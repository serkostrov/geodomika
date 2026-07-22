import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const DIST_DIR = path.resolve(ROOT_DIR, 'dist')

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return

  const content = fs.readFileSync(filePath, 'utf8')
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue

    const separatorIndex = line.indexOf('=')
    if (separatorIndex <= 0) continue

    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

loadEnvFile(path.join(ROOT_DIR, '.env'))

const PORT = Number(process.env.PORT || 3000)
const SMTP_BZ_API_KEY = process.env.SMTP_BZ_API_KEY?.trim()
const SMTP_BZ_FROM = process.env.SMTP_BZ_FROM?.trim()
const SMTP_BZ_FROM_NAME = process.env.SMTP_BZ_FROM_NAME?.trim() || 'Геодомика'
const LEAD_NOTIFY_TO = process.env.LEAD_NOTIFY_TO?.trim() || 'geodomika@yandex.ru'

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const rateLimitBuckets = new Map()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  }
  return req.socket.remoteAddress || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const timestamps = (rateLimitBuckets.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  )

  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitBuckets.set(ip, timestamps)
    return true
  }

  timestamps.push(now)
  rateLimitBuckets.set(ip, timestamps)
  return false
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload)
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  })
  res.end(body)
}

async function readJsonBody(req) {
  const chunks = []
  let size = 0
  const maxSize = 32_768

  for await (const chunk of req) {
    size += chunk.length
    if (size > maxSize) {
      throw new Error('Payload too large')
    }
    chunks.push(chunk)
  }

  if (chunks.length === 0) return {}

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function buildLeadEmail({ source, name, phone, message }) {
  const safeSource = escapeHtml(source)
  const safeName = escapeHtml(name || '—')
  const safePhone = escapeHtml(phone)
  const safeMessage = escapeHtml(message || '—').replaceAll('\n', '<br />')

  const subject = `Новая заявка: ${source}`
  const text = [
    'Новая заявка с сайта geodomika.ru',
    '',
    `Источник: ${source}`,
    `Имя: ${name || '—'}`,
    `Телефон: ${phone}`,
    `Сообщение: ${message || '—'}`,
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #202129; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">Новая заявка с сайта Геодомика</h2>
      <p style="margin: 0 0 8px;"><strong>Источник:</strong> ${safeSource}</p>
      <p style="margin: 0 0 8px;"><strong>Имя:</strong> ${safeName}</p>
      <p style="margin: 0 0 8px;"><strong>Телефон:</strong> ${safePhone}</p>
      <p style="margin: 0 0 8px;"><strong>Сообщение:</strong><br />${safeMessage}</p>
    </div>
  `.trim()

  return { subject, text, html }
}

async function sendSmtpBzEmail({ subject, text, html }) {
  if (!SMTP_BZ_API_KEY || !SMTP_BZ_FROM) {
    throw new Error('SMTP is not configured')
  }

  const form = new FormData()
  form.append('from', SMTP_BZ_FROM)
  form.append('name', SMTP_BZ_FROM_NAME)
  form.append('to', LEAD_NOTIFY_TO)
  form.append('subject', subject)
  form.append('html', html)
  form.append('text', text)
  form.append('tag', 'lead')

  const response = await fetch('https://api.smtp.bz/v1/smtp/send', {
    method: 'POST',
    headers: {
      Authorization: SMTP_BZ_API_KEY,
      Accept: 'application/json',
    },
    body: form,
  })

  const responseText = await response.text()
  let payload = null
  try {
    payload = responseText ? JSON.parse(responseText) : null
  } catch {
    payload = { raw: responseText }
  }

  if (!response.ok) {
    const error = new Error('SMTP.BZ request failed')
    error.status = response.status
    error.payload = payload
    throw error
  }

  return payload
}

async function handleLeadRequest(req, res) {
  if (isRateLimited(getClientIp(req))) {
    sendJson(res, 429, { ok: false, error: 'Too many requests' })
    return
  }

  let body
  try {
    body = await readJsonBody(req)
  } catch {
    sendJson(res, 400, { ok: false, error: 'Invalid JSON body' })
    return
  }

  const source = typeof body.source === 'string' ? body.source.trim() : ''
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const policyAccepted = Boolean(body.policyAccepted)

  if (!phone) {
    sendJson(res, 400, { ok: false, error: 'Phone is required' })
    return
  }

  if (!policyAccepted) {
    sendJson(res, 400, { ok: false, error: 'Policy acceptance is required' })
    return
  }

  if (!source) {
    sendJson(res, 400, { ok: false, error: 'Source is required' })
    return
  }

  if (!SMTP_BZ_API_KEY || !SMTP_BZ_FROM) {
    console.error('[leads] Missing SMTP_BZ_API_KEY or SMTP_BZ_FROM')
    sendJson(res, 503, { ok: false, error: 'Email service is not configured' })
    return
  }

  try {
    const email = buildLeadEmail({ source, name, phone, message })
    await sendSmtpBzEmail(email)
    sendJson(res, 200, { ok: true })
  } catch (error) {
    console.error('[leads] Failed to send email', error.payload ?? error)
    sendJson(res, 502, { ok: false, error: 'Failed to send email' })
  }
}

function resolveStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0] || '/')
  const relative = decoded === '/' ? '/index.html' : decoded
  const filePath = path.normalize(path.join(DIST_DIR, relative))

  if (!filePath.startsWith(DIST_DIR)) {
    return null
  }

  return filePath
}

function serveStatic(req, res) {
  const filePath = resolveStaticPath(req.url || '/')
  if (!filePath) {
    sendJson(res, 400, { ok: false, error: 'Invalid path' })
    return
  }

  const candidate = fs.existsSync(filePath) && fs.statSync(filePath).isFile()
    ? filePath
    : path.join(DIST_DIR, 'index.html')

  if (!fs.existsSync(candidate)) {
    sendJson(res, 404, { ok: false, error: 'Not found' })
    return
  }

  const ext = path.extname(candidate).toLowerCase()
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'
  const data = fs.readFileSync(candidate)

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  })
  res.end(data)
}

const server = http.createServer(async (req, res) => {
  const method = req.method || 'GET'
  const url = req.url || '/'

  if (method === 'OPTIONS' && url.startsWith('/api/')) {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
    res.end()
    return
  }

  if (method === 'POST' && url.startsWith('/api/leads')) {
    await handleLeadRequest(req, res)
    return
  }

  if (method === 'GET' || method === 'HEAD') {
    if (fs.existsSync(DIST_DIR)) {
      serveStatic(req, res)
      return
    }

    sendJson(res, 200, {
      ok: true,
      service: 'geodomica-api',
      hint: 'Frontend dist is missing. Run npm run build for production static serving.',
    })
    return
  }

  sendJson(res, 405, { ok: false, error: 'Method not allowed' })
})

server.listen(PORT, () => {
  console.log(`[geodomica] listening on :${PORT}`)
  console.log(`[geodomica] notify to: ${LEAD_NOTIFY_TO}`)
  console.log(`[geodomica] smtp from: ${SMTP_BZ_FROM || '(not set)'}`)
})
