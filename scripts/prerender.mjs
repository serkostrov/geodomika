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

function injectAppHtml(template, appHtml) {
  if (template.includes('<!--ssr-outlet-->')) {
    return template.replace('<!--ssr-outlet-->', appHtml)
  }

  return template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`,
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

main().catch((error) => {
  console.error('[prerender] failed')
  console.error(error)
  process.exit(1)
})
