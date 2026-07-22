import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppProviders } from '@/app/providers/AppProviders'
import { HomePage } from '@/pages/home'
import { OfertaPage } from '@/pages/legal/OfertaPage'
import { PrivacyPage } from '@/pages/legal/PrivacyPage'
import { SoglasiePage } from '@/pages/legal/SoglasiePage'
import {
  LEGAL_ROUTE_OFERTA,
  LEGAL_ROUTE_PRIVACY,
  LEGAL_ROUTE_SOGLASIE,
} from '@/shared/constants/legal-routes'

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<SoglasiePage />} path={LEGAL_ROUTE_SOGLASIE} />
          <Route element={<PrivacyPage />} path={LEGAL_ROUTE_PRIVACY} />
          <Route element={<OfertaPage />} path={LEGAL_ROUTE_OFERTA} />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}
