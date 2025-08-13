// src/App.tsx
import { AppProviders } from './app/providers'
import { AppRoutes } from './app/routes'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

export default function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  )
}
