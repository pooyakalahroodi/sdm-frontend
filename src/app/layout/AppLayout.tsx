// src/app/layout/AppLayout.tsx
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../App.css' // Import the global styles

export default function AppLayout() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="navbar-brand">
          <h1>Simple Management</h1>
        </div>
        <nav className="navbar-tabs" role="navigation" aria-label="Main Navigation">
          <NavLink to="/devices" className="navbar-link" end>Devices</NavLink>
          <NavLink to="/users" className="navbar-link">Users</NavLink>
          <NavLink to="/departments" className="navbar-link">Departments</NavLink>
          <NavLink to="/protocols" className="navbar-link">Handover Protocols</NavLink>
        </nav>
      </header>
      <main style={{marginTop:24}}>
        <Outlet />
      </main>
    </div>
  )
}
