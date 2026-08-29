import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'

import { AppProviders } from '@/app/providers/AppProviders'
import { AppRoutes } from '@/app/AppRoutes'

export { PRERENDER_ROUTES, SITE_ORIGIN } from '@/shared/constants/prerender-routes'

async function readableToString(stream: AsyncIterable<unknown>): Promise<string> {
  const chunks: Uint8Array[] = []

  for await (const chunk of stream) {
    if (typeof chunk === 'string') {
      chunks.push(new TextEncoder().encode(chunk))
      continue
    }

    if (chunk instanceof Uint8Array) {
      chunks.push(chunk)
    }
  }

  const total = chunks.reduce((sum, part) => sum + part.byteLength, 0)
  const bytes = new Uint8Array(total)
  let offset = 0

  for (const part of chunks) {
    bytes.set(part, offset)
    offset += part.byteLength
  }

  return new TextDecoder().decode(bytes)
}

export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
    {
      onError(error) {
        console.error('[ssr]', error)
      },
    },
  )

  return readableToString(prelude as AsyncIterable<unknown>)
}
