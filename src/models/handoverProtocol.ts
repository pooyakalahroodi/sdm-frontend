import type { ActionType } from './enums';

export type HandOverProtocol = {
  id: number;
  deviceSerialNumber: string;
  receiverUsername: string;
  performedBy: string;
  performedAt: string;     // ISO date-time string, e.g. "2025-08-10T12:34:56Z"
  actionType: ActionType;
};

export type CreateHandOverProtocol = {
  deviceSerialNumber: string;
  receiverUsername: string;
  performedBy: string;
  actionType: ActionType;
};
