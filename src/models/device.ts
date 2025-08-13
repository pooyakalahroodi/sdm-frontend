import { DeviceStatus } from './enums';

export type Device = {
  id: number;
  name: string;
  type: string;
  status: DeviceStatus;
  serialNumber: string;
  manufacturer: string;
  location: string;
  purchaseDate: string; // Use string for ISO date, or Date if you prefer
};

export type CreateDevice = {
  name: string;
  type: string;
  status: DeviceStatus;
  serialNumber: string;
  manufacturer: string;
  location: string;
  purchaseDate: string; // Use string for ISO date, or Date if you prefer
};
