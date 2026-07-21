import { AppProviders } from '@/app/providers/AppProviders'
import { HomePage } from '@/pages/home'

export default function App() {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  )
}
