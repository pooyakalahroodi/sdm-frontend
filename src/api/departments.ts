import { api } from './client';
import type { Department, CreateDepartment } from '../models/department';

export async function getDepartments(): Promise<Department[]> {
  const res = await api.get('/api/departments');
  return res.data;
}

export async function createDepartment(payload: CreateDepartment): Promise<Department> {
  const res = await api.post('/api/departments', payload);
  return res.data; 
}
