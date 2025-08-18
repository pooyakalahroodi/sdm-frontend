// This makes lazy(() => import('../features/devices')) work
export { default } from './components/UserPage'

// Optional: re-export your hooks & keys so other files can import from 'features/devices'
export * from './hooks'
export * from './keys'
