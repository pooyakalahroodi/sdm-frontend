// src/app/routes.tsx
import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'

const DevicesPage = lazy(() => import('../features/devices'))

function Fallback() { return <div className="loader" aria-label="loading" /> }
function RouteError() { return <div className="alert">Route error</div> }

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      { path: '/', element: <Suspense fallback={<Fallback />}><DevicesPage /></Suspense> },
      { path: '/devices', element: <Suspense fallback={<Fallback />}><DevicesPage /></Suspense> },
      // Later add: /users, /departments, /protocols
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
