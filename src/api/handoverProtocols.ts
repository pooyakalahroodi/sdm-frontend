import { api } from './client';
import type { HandOverProtocol, CreateHandOverProtocol } from '../models/handoverProtocol';

export async function getProtocolsForDevice(serialNumber: string): Promise<HandOverProtocol[]> {
  const res = await api.get(`/api/handover-protocols/device/${encodeURIComponent(serialNumber)}`);
  return res.data;
}

export async function getLatestProtocolForDevice(serialNumber: string): Promise<HandOverProtocol> {
  const res = await api.get(`/api/handover-protocols/device/${encodeURIComponent(serialNumber)}/latest`);
  return res.data;
}

export async function getProtocolsForReceiver(username: string): Promise<HandOverProtocol[]> {
  const res = await api.get(`/api/handover-protocols/receiver/${encodeURIComponent(username)}`);
  return res.data;
}

export async function createHandOverProtocol(payload: CreateHandOverProtocol): Promise<HandOverProtocol> {
  const res = await api.post('/api/handover-protocols', payload);
  return res.data;
}

export async function confirmLatestForDevice(serialNumber: string): Promise<HandOverProtocol> {
  const res = await api.put(`/api/handover-protocols/device/${encodeURIComponent(serialNumber)}/confirm`);
  return res.data;
}
