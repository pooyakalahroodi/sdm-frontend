// src/features/devices/components/DeviceForm.tsx
import React, { useState } from 'react'
import type { CreateDevice } from '../../../models/device'
import type { DeviceStatus } from '../../../models/enums'
import { DeviceStatusEnum, DEVICE_STATUS, DeviceStatusLabel } from '../../../models/enums'
import { createDevice } from '../../../api/devices'

export default function DeviceForm() {
  const [form, setForm] = useState<CreateDevice>({
    name: '', type: '', status: DeviceStatusEnum.ACTIVE,
    serialNumber: '', manufacturer: '', location: '', purchaseDate: '',
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'status' ? (value as DeviceStatus) : value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      await createDevice(form)
      // reset if needed
      setForm({ name:'', type:'', status:DeviceStatusEnum.ACTIVE, serialNumber:'', manufacturer:'', location:'', purchaseDate:'' })
    } catch (err: any) {
      setError(err?.message || 'Failed to create device')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display:'flex', flexWrap:'wrap', gap:16 }}>
      {error && (
        <div className="alert" role="alert" aria-live="polite" style={{ flexBasis:'100%' }}>
          {error}
        </div>
      )}

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required style={{ flex:1 }} />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type" required style={{ flex:1 }} />

      <select name="status" value={form.status} onChange={handleChange} required style={{ flex:1 }}>
        {DEVICE_STATUS.map(s => <option key={s} value={s}>{DeviceStatusLabel[s]}</option>)}
      </select>

      <input name="serialNumber" value={form.serialNumber} onChange={handleChange} placeholder="Serial Number" required style={{ flex:1 }} />
      <input name="manufacturer" value={form.manufacturer} onChange={handleChange} placeholder="Manufacturer" required style={{ flex:1 }} />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required style={{ flex:1 }} />
      <input name="purchaseDate" value={form.purchaseDate} onChange={handleChange} type="date" required style={{ flex:1 }} />

      <button type="submit" className="btn btn-primary" disabled={saving} style={{ flexBasis:'100%' }}>
        {saving ? 'Saving…' : 'Add Device'}
      </button>
    </form>
  )
}
