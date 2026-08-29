import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import App from '@/app/App'
import '@/styles/globals.css'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (rootElement.firstElementChild) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
