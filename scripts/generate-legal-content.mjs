import AdmZip from 'adm-zip'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const outputDir = path.join(root, 'src', 'pages', 'legal', 'content')

const soglasieSources = [
  {
    id: 'general',
    docx: 'c:\\Users\\talininigor\\Downloads\\Согласие общее ПД 28052025.docx',
    title: 'Согласие на обработку персональных данных',
  },
  {
    id: 'biometric',
    docx: 'c:\\Users\\talininigor\\Downloads\\Согласие биометрические ПД 28052025.docx',
    title: 'Согласие на обработку персональных данных',
  },
  {
    id: 'advertising',
    docx: 'c:\\Users\\talininigor\\Downloads\\Согласие реклама 28052025.docx',
    title: 'Согласие на обработку персональных данных',
  },
  {
    id: 'delivery',
    docx: 'c:\\Users\\talininigor\\Downloads\\Вложение для доставки товара.docx',
    title: 'Вложение для доставки товара',
  },
]

const singleSources = [
  {
    id: 'privacy',
    input: path.join(root, 'tmp-privacy.txt'),
    title: 'Политика конфиденциальности',
  },
  {
    id: 'oferta',
    input: path.join(root, 'tmp-oferta.txt'),
    title: 'Публичная оферта',
  },
]

function normalizeLine(line) {
  return line
    .replace(/https:\/\/izodecor\.ru\/?/gi, 'https://geodomika.ru/')
    .replace(/info@izodecor\.ru/gi, 'geodomika@yandex.ru')
    .trim()
}

function isHeading(line) {
  if (line.length > 120) return false
  if (/^\d+(\.\d+)*\.?\s/.test(line)) return false
  if (line.startsWith('- ')) return false

  const letters = line.replace(/[^A-Za-zА-Яа-яЁё]/g, '')
  if (letters.length === 0) return false

  return line === line.toUpperCase()
}

function extractDocxText(docxPath) {
  const zip = new AdmZip(docxPath)
  const entry = zip.getEntry('word/document.xml')
  if (!entry) throw new Error(`No document.xml in ${docxPath}`)

  const xml = entry.getData().toString('utf8')
  const paragraphs = xml.match(/<w:p[\s\S]*?<\/w:p>/g) ?? []

  return paragraphs
    .map((paragraph) => {
      const textNodes = paragraph.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) ?? []
      return textNodes
        .map((node) => node.replace(/<[^>]+>/g, ''))
        .join('')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .trim()
    })
    .filter(Boolean)
    .join('\n')
}

function parseLegalText(text, sectionTitle = null) {
  const lines = text.split(/\r?\n/).map(normalizeLine).filter(Boolean)
  const blocks = []

  for (const line of lines) {
    if (blocks.length === 0) {
      if (isHeading(line)) continue
      if (sectionTitle && line.localeCompare(sectionTitle, 'ru', { sensitivity: 'accent' }) === 0) {
        continue
      }
    }

    if (line.startsWith('- ')) {
      blocks.push({ type: 'list-item', text: line.slice(2).trim() })
      continue
    }

    if (/^\d+(\.\d+)*\.?\s/.test(line)) {
      blocks.push({ type: 'list-item', text: line })
      continue
    }

    if (isHeading(line)) {
      blocks.push({ type: 'heading', text: line })
      continue
    }

    blocks.push({ type: 'paragraph', text: line })
  }

  return blocks
}

function serializeBlocks(blocks) {
  return blocks
    .map((block) => `      { type: '${block.type}', text: ${JSON.stringify(block.text)} },`)
    .join('\n')
}

function serializeSections(sections) {
  return sections
    .map(
      (section) => `  {
    title: ${JSON.stringify(section.title)},
    blocks: [
${serializeBlocks(section.blocks)}
    ],
  },`,
    )
    .join('\n')
}

function writeSingleSource(source) {
  const raw = fs.readFileSync(source.input, 'utf8')
  const blocks = parseLegalText(raw, false)
  const content = `export const ${source.id.toUpperCase()}_LEGAL_TITLE = ${JSON.stringify(source.title)} as const

export const ${source.id.toUpperCase()}_LEGAL_BLOCKS = [
${serializeBlocks(blocks).replace(/^      /gm, '  ')}
] as const
`

  fs.writeFileSync(path.join(outputDir, `${source.id}.ts`), content, 'utf8')
  console.log(`Generated ${source.id}.ts (${blocks.length} blocks)`)
}

fs.mkdirSync(outputDir, { recursive: true })

const soglasieSections = soglasieSources.map((source) => {
  const raw = extractDocxText(source.docx)
  const blocks = parseLegalText(raw, source.title)
  console.log(`Parsed ${source.id}: ${blocks.length} blocks`)
  return { title: source.title, blocks }
})

const soglasieContent = `export const SOGLASIE_LEGAL_SECTIONS = [
${serializeSections(soglasieSections)}
] as const
`

fs.writeFileSync(path.join(outputDir, 'soglasie.ts'), soglasieContent, 'utf8')
console.log(`Generated soglasie.ts (${soglasieSections.length} sections)`)

for (const source of singleSources) {
  if (fs.existsSync(source.input)) {
    writeSingleSource(source)
  } else {
    console.log(`Skipped ${source.id}.ts — missing ${source.input}`)
  }
}
