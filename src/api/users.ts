import { api } from './client';
import type { User, CreateUser } from '../models/user';

export async function getUsers(): Promise<User[]> {
  const res = await api.get('/api/users');
  return res.data;
}

export async function getUsersByDepartment(departmentName: string): Promise<User[]> {
  const res = await api.get(`/api/users/department/${encodeURIComponent(departmentName)}`);
  return res.data;
}

export async function getUserByUsername(username: string): Promise<User> {
  const res = await api.get(`/api/users/username/${encodeURIComponent(username)}`);
  return res.data;
}

export async function createUser(payload: CreateUser): Promise<User> {
  const res = await api.post('/api/users', payload);
  return res.data;
}

// PUT /api/users/{username}/devices/{serialNumber}/assign
export async function assignDeviceToUser(username: string, serialNumber: string): Promise<User> {
  const res = await api.put(
    `/api/users/${encodeURIComponent(username)}/devices/${encodeURIComponent(serialNumber)}/assign`
  );
  return res.data;
}

// PUT /api/users/assign-department?username=...&departmentName=...
export async function assignDepartmentToUser(username: string, departmentName: string): Promise<User> {
  const res = await api.put('/api/users/assign-department', null, {
    params: { username, departmentName },
  });
  return res.data;
}
