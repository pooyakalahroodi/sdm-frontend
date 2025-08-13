// src/models/enums.ts
export type DeviceStatus = 'ACTIVE' | 'INACTIVE';

export const DeviceStatusEnum = {
  ACTIVE: 'ACTIVE' as DeviceStatus,
  INACTIVE: 'INACTIVE' as DeviceStatus,
};
export const DeviceStatusLabel: Record<DeviceStatus, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
};

export const DEVICE_STATUS = Object.values(DeviceStatusEnum) as DeviceStatus[];
