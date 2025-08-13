import { api } from './client';
import type { Device, CreateDevice } from '../models/device';
import type { DeviceStatus } from '../models/enums';

export async function getDevices(): Promise<Device[]> {
  const res = await api.get('/api/devices');
  return res.data;
}

export async function createDevice(payload: CreateDevice): Promise<Device> {
  const res = await api.post('/api/devices', payload);
  return res.data;
}

// Calls: PUT /api/devices/update-status?serialNumber=...&status=...
export async function updateDeviceStatus(
  serialNumber: string,
  status: DeviceStatus
): Promise<Device> {
  const res = await api.put('/api/devices/update-status', null, {
    params: { serialNumber, status },
  });
  return res.data;
}
