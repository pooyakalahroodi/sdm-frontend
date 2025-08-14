// src/features/devices/components/DeviceForm.tsx
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { DeviceStatusEnum, DeviceStatusLabel } from '../../../models/enums';
import type { CreateDevice } from '../../../models/device';
import type { DeviceStatus } from '../../../models/enums';
import { createDevice } from '../../../api/devices'


export default function DeviceForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<CreateDevice>({
    name: '', type: '', status: DeviceStatusEnum.ACTIVE,
    serialNumber: '', manufacturer: '', location: '', purchaseDate: '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'status' ? (value as DeviceStatus) : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      await createDevice(form);
      queryClient.invalidateQueries({ queryKey: ['devices'] });
      setForm({ name:'', type:'', status:DeviceStatusEnum.ACTIVE, serialNumber:'', manufacturer:'', location:'', purchaseDate:'' });
    } catch (err: any) {
      setError(err?.message || 'Failed to create device');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        maxWidth: 500,
        margin: '0 auto',
        alignItems: 'start',
      }}
    >
      {error && <div className="alert" style={{ gridColumn: '1 / span 2' }}>{error}</div>}

      <label style={{ fontSize: 14, width: '100%' }}>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Type
        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Type"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Status
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        >
          {Object.values(DeviceStatusEnum).map(status => (
            <option key={status} value={status}>
              {DeviceStatusLabel[status]}
            </option>
          ))}
        </select>
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Serial Number
        <input
          name="serialNumber"
          value={form.serialNumber}
          onChange={handleChange}
          placeholder="Serial Number"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Manufacturer
        <input
          name="manufacturer"
          value={form.manufacturer}
          onChange={handleChange}
          placeholder="Manufacturer"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Location
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ fontSize: 14, width: '100%' }}>
        Purchase Date
        <input
          name="purchaseDate"
          value={form.purchaseDate}
          onChange={handleChange}
          type="date"
          required
          style={{ width: '100%', fontSize: 14, padding: 8, marginTop: 4, boxSizing: 'border-box' }}
        />
      </label>
      <button
        type="submit"
        className="btn"
        style={{
          fontSize: 14,
          padding: 10,
          marginTop: 8,
          gridColumn: '1 / span 2',
          width: '100%',
        }}
      >
        {saving ? 'Saving...' : 'Add Device'}
      </button>
    </form>
  );
}
