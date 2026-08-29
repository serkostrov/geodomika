import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.join(ROOT_DIR, 'dist')
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html')
const SERVER_ENTRY = path.join(ROOT_DIR, 'dist/server/entry-server.js')

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function replaceMeta(html, attr, value) {
  const pattern = new RegExp(
    `(<meta\\s[^>]*(?:name|property)=["']${escapeRegExp(attr)}["'][^>]*content=["'])([^"']*)(["'][^>]*>)`,
    'i',
  )

  if (pattern.test(html)) {
    return html.replace(pattern, `$1${value}$3`)
  }

  return html
}

function applyRouteMeta(html, route, origin) {
  const canonical = `${origin}${route.path === '/' ? '/' : route.path}`
  let next = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)

  next = replaceMeta(next, 'description', route.description)
  next = replaceMeta(next, 'og:title', route.title)
  next = replaceMeta(next, 'og:description', route.description)
  next = replaceMeta(next, 'og:url', canonical)
  next = replaceMeta(next, 'twitter:title', route.title)
  next = replaceMeta(next, 'twitter:description', route.description)
  next = next.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  )

  return next
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

const RAW_TEXT_TAGS = new Set(['script', 'style', 'pre', 'textarea'])

function findTagEnd(html, start) {
  let quote = null

  for (let index = start + 1; index < html.length; index += 1) {
    const char = html[index]

    if (quote) {
      if (char === quote) quote = null
      continue
    }

    if (char === '"' || char === "'") {
      quote = char
      continue
    }

    if (char === '>') return index
  }

  return -1
}

function tokenizeHtml(html) {
  const tokens = []
  let index = 0

  while (index < html.length) {
    if (html[index] !== '<') {
      const nextTag = html.indexOf('<', index)
      const end = nextTag === -1 ? html.length : nextTag
      tokens.push({ type: 'text', value: html.slice(index, end) })
      index = end
      continue
    }

    if (html.startsWith('<!--', index)) {
      const commentEnd = html.indexOf('-->', index + 4)
      const end = commentEnd === -1 ? html.length : commentEnd + 3
      tokens.push({ type: 'comment', value: html.slice(index, end) })
      index = end
      continue
    }

    const tagEnd = findTagEnd(html, index)
    if (tagEnd === -1) {
      tokens.push({ type: 'text', value: html.slice(index) })
      break
    }

    const raw = html.slice(index, tagEnd + 1)
    const nameMatch = raw.match(/^<\/?([a-zA-Z][\w:.-]*)/)
    const name = nameMatch ? nameMatch[1].toLowerCase() : ''
    const isClose = raw.startsWith('</')
    const isSelfClosing = raw.endsWith('/>') || VOID_TAGS.has(name)

    if (!isClose && RAW_TEXT_TAGS.has(name)) {
      const closeTag = `</${name}>`
      const closeAt = html.toLowerCase().indexOf(closeTag, tagEnd + 1)
      const rawEnd = closeAt === -1 ? html.length : closeAt + closeTag.length
      tokens.push({
        type: 'raw',
        value: html.slice(index, rawEnd),
      })
      index = rawEnd
      continue
    }

    if (isClose) {
      tokens.push({ type: 'close', name, value: raw })
    } else {
      tokens.push({
        type: 'open',
        name,
        value: raw,
        isSelfClosing,
      })
    }

    index = tagEnd + 1
  }

  return tokens
}

function parseHtml(html) {
  const root = { type: 'fragment', children: [] }
  const stack = [root]

  for (const token of tokenizeHtml(html)) {
    const parent = stack[stack.length - 1]

    if (token.type === 'open' && !token.isSelfClosing) {
      const element = {
        type: 'element',
        name: token.name,
        open: token.value,
        close: `</${token.name}>`,
        children: [],
      }
      parent.children.push(element)
      stack.push(element)
      continue
    }

    if (token.type === 'open') {
      parent.children.push({ type: 'void', value: token.value })
      continue
    }

    if (token.type === 'close') {
      if (stack.length > 1) {
        const element = stack.pop()
        element.close = token.value
      }
      continue
    }

    parent.children.push({ type: token.type, value: token.value })
  }

  return root
}

function stripLastGt(value) {
  return value.endsWith('>') ? value.slice(0, -1) : value
}

function hasElementChild(node) {
  return node.children.some((child) => child.type === 'element' || child.type === 'void')
}

function hasTextChild(node) {
  return node.children?.some((child) => child.type === 'text' && child.value.length > 0) ?? false
}

function serializeNode(node, depth, unit, baseIndent) {
  if (node.type === 'fragment') {
    if (node.children.length <= 1 || hasTextChild(node)) {
      return node.children.map((child) => serializeNode(child, depth, unit, baseIndent)).join('')
    }

    const siblingIndent = baseIndent + unit.repeat(depth)
    let output = stripLastGt(serializeNode(node.children[0], depth, unit, baseIndent))

    for (let index = 1; index < node.children.length; index += 1) {
      output += `\n${siblingIndent}>${stripLastGt(serializeNode(node.children[index], depth, unit, baseIndent))}`
    }

    return `${output}>`
  }

  if (node.type === 'text' || node.type === 'comment' || node.type === 'raw' || node.type === 'void') {
    return node.value
  }

  if (!hasElementChild(node) || hasTextChild(node)) {
    return `${node.open}${node.children.map((child) => serializeNode(child, depth + 1, unit, baseIndent)).join('')}${node.close}`
  }

  const childIndent = baseIndent + unit.repeat(depth + 1)
  const closeIndent = baseIndent + unit.repeat(depth)
  let output = stripLastGt(node.open)

  for (const child of node.children) {
    output += `\n${childIndent}>${stripLastGt(serializeNode(child, depth + 1, unit, baseIndent))}`
  }

  output += `\n${closeIndent}>${node.close}`
  return output
}

/** Pretty-print without inserting text nodes between tags (keeps flex/hydration intact). */
function formatAppHtml(html) {
  return serializeNode(parseHtml(html), 0, '  ', '    ')
}

function injectAppHtml(template, appHtml) {
  const formatted = formatAppHtml(appHtml)

  if (template.includes('<!--ssr-outlet-->')) {
    return template.replace('<!--ssr-outlet-->', formatted)
  }

  return template.replace(
    /<div id="root">[\s\S]*<\/div>(?=\s*(?:<script|<\/body>))/i,
    `<div id="root">${formatted}</div>`,
  )
}

async function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error(`Client build is missing: ${TEMPLATE_PATH}`)
  }

  if (!fs.existsSync(SERVER_ENTRY)) {
    throw new Error(`SSR build is missing: ${SERVER_ENTRY}`)
  }

  const { render, PRERENDER_ROUTES, SITE_ORIGIN } = await import(
    pathToFileURL(SERVER_ENTRY).href
  )
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8')

  for (const route of PRERENDER_ROUTES) {
    const appHtml = await render(route.path)
    const html = applyRouteMeta(injectAppHtml(template, appHtml), route, SITE_ORIGIN)
    const outputPath = path.join(DIST_DIR, route.file)

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, html)
    console.log(`[prerender] ${route.path} -> ${path.relative(ROOT_DIR, outputPath)}`)
  }

  fs.rmSync(path.join(DIST_DIR, 'server'), { recursive: true, force: true })
}

const isDirectRun =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])

if (isDirectRun) {
  main().catch((error) => {
    console.error('[prerender] failed')
    console.error(error)
    process.exit(1)
  })
}
