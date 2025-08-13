// src/api/devices.ts
import type { CreateDevice } from '../models/device';
import type { DeviceStatus } from '../models/enums';

// src/api/devices.ts
import type { Device } from '../models/device'

export async function getDevices(): Promise<Device[]> {
  const res = await fetch('/api/devices')
  if (!res.ok) throw new Error('Failed to load devices')
  return res.json() as Promise<Device[]>
}

export async function createDevice(payload: CreateDevice): Promise<Device> {
  const res = await fetch('/api/devices', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    // Try to extract a useful message from JSON or text; fall back to status text
    let msg = 'Failed to create device'
    try {
      const data = await res.json()
      msg = data?.detail || data?.message || msg
    } catch {
      const text = await res.text().catch(() => '')
      if (text) msg = text
    }
    throw new Error(msg)
  }
  return res.json()
}

export async function updateDeviceStatus(serial: string, status: DeviceStatus) {
  // If your backend expects a query param:
  const res = await fetch(
    `/api/devices/${encodeURIComponent(serial)}/status?status=${status}`,
    { method: 'PATCH' }
  );
  // If it expects a JSON body instead, use:
  // const res = await fetch(`/api/devices/${encodeURIComponent(serial)}/status`, {
  //   method: 'PATCH',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ status }),
  // });
  if (!res.ok) throw new Error('Failed to update status');
}
