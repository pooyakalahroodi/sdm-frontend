// src/models/enums.ts
export type DeviceStatus = 'ACTIVE' | 'INACTIVE' | 'LOST' | 'DAMAGED' | 'RETIRED';

export const DeviceStatusEnum = {
  ACTIVE: 'ACTIVE' as DeviceStatus,
  INACTIVE: 'INACTIVE' as DeviceStatus,
  LOST: 'LOST' as DeviceStatus,
  DAMAGED: 'DAMAGED' as DeviceStatus,
  RETIRED: 'RETIRED' as DeviceStatus,
};

export const DeviceStatusLabel: Record<DeviceStatus, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  LOST: 'Lost',
  DAMAGED: 'Damaged',
  RETIRED: 'Retired',
};

export const DEVICE_STATUS = Object.values(DeviceStatusEnum) as DeviceStatus[];
