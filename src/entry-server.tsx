import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { AppProviders } from '@/app/providers/AppProviders'
import { AppRoutes } from '@/app/AppRoutes'

export { PRERENDER_ROUTES, SITE_ORIGIN } from '@/shared/constants/prerender-routes'

export function render(url: string): string {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  )
}
