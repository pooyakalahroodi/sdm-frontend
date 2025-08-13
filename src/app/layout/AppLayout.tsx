// src/app/layout/AppLayout.tsx
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="container">
      <header className="toolbar" style={{justifyContent:'space-between'}}>
        <h1>Simple Management</h1>
        <nav className="tabs" role="tablist" aria-label="Sections" style={{display:'flex', gap:8}}>
          <NavLink to="/devices" className="btn" end>Devices</NavLink>
          <NavLink to="/users" className="btn">Users</NavLink>
          <NavLink to="/departments" className="btn">Departments</NavLink>
          <NavLink to="/protocols" className="btn">Handover Protocols</NavLink>
        </nav>
      </header>
      <main style={{marginTop:16}}>
        <Outlet />
      </main>
    </div>
  )
}
