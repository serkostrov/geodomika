import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AppProviders } from '@/app/providers/AppProviders'
import { HomePage } from '@/pages/home'
import {
  LEGAL_ROUTE_OFERTA,
  LEGAL_ROUTE_PRIVACY,
  LEGAL_ROUTE_SOGLASIE,
} from '@/shared/constants/legal-routes'

const PrivacyPage = lazy(() =>
  import('@/pages/legal/PrivacyPage').then((module) => ({
    default: module.PrivacyPage,
  })),
)

const OfertaPage = lazy(() =>
  import('@/pages/legal/OfertaPage').then((module) => ({
    default: module.OfertaPage,
  })),
)

const SoglasiePage = lazy(() =>
  import('@/pages/legal/SoglasiePage').then((module) => ({
    default: module.SoglasiePage,
  })),
)

function LegalFallback() {
  return <div className="min-h-svh bg-surface-light" />
}

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route
            element={
              <Suspense fallback={<LegalFallback />}>
                <SoglasiePage />
              </Suspense>
            }
            path={LEGAL_ROUTE_SOGLASIE}
          />
          <Route
            element={
              <Suspense fallback={<LegalFallback />}>
                <PrivacyPage />
              </Suspense>
            }
            path={LEGAL_ROUTE_PRIVACY}
          />
          <Route
            element={
              <Suspense fallback={<LegalFallback />}>
                <OfertaPage />
              </Suspense>
            }
            path={LEGAL_ROUTE_OFERTA}
          />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
