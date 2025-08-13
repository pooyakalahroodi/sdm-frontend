// src/features/devices/components/DeviceForm.tsx
/**
 * DeviceForm Component
 * --------------------
 * Form for creating a new device.
 * Fields: name, type, status (dropdown), serialNumber, manufacturer, location, purchaseDate.
 * On submit, calls API to create the device.
 */
import React, { useState } from 'react'
import type { CreateDevice } from '../../../models/device'
import type {DeviceStatus } from '../../../models/enums'

export default function DeviceForm() {
  const [form, setForm] = useState<CreateDevice>({
    name: '',
    type: '',
    status: SdmDeviceStatus.ACTIVE,
    serialNumber: '',
    manufacturer: '',
    location: '',
    purchaseDate: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Call API to create device
    // Example: createDevice(form)
    alert('Device created!\n' + JSON.stringify(form, null, 2))
    setForm({
      name: '',
      type: '',
      status: SdmDeviceStatus.Active,
      serialNumber: '',
      manufacturer: '',
      location: '',
      purchaseDate: '',
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        maxLength={100}
        required
        style={{ flex: 1 }}
      />
      <input
        name="type"
        value={form.type}
        onChange={handleChange}
        placeholder="Type"
        maxLength={50}
        required
        style={{ flex: 1 }}
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        required
        style={{ flex: 1 }}
      >
        {Object.values(SdmDeviceStatus).map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <input
        name="serialNumber"
        value={form.serialNumber}
        onChange={handleChange}
        placeholder="Serial Number"
        maxLength={50}
        required
        style={{ flex: 1 }}
      />
      <input
        name="manufacturer"
        value={form.manufacturer}
        onChange={handleChange}
        placeholder="Manufacturer"
        maxLength={100}
        required
        style={{ flex: 1 }}
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        maxLength={100}
        required
        style={{ flex: 1 }}
      />
      <input
        name="purchaseDate"
        value={form.purchaseDate}
        onChange={handleChange}
        type="date"
        required
        style={{ flex: 1 }}
      />
      <button type="submit" className="btn" style={{ flexBasis: '100%' }}>Add Device</button>
    </form>
  )
}
