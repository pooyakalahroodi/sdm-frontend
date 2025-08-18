import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'

const DevicesPage = lazy(() => import('../features/devices')) // ✅ Direct import, no .then()
const UsersPage = lazy(() => import('../features/users')) // ✅ Direct import, no .then()

function Fallback() { return <div className="loader" aria-label="loading" /> }
function RouteError() { return <div className="alert">Route error</div> }

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
  { path: '/', element: <Suspense fallback={<Fallback />}><DevicesPage /></Suspense> },
  { path: '/devices', element: <Suspense fallback={<Fallback />}><DevicesPage /></Suspense> },
  { path: '/users', element: <Suspense fallback={<Fallback />}><UsersPage /></Suspense> },
  // Later add: /departments, /protocols
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}