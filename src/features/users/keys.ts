// src/features/devices/keys.ts
export const usersKeys = {
  all: ['users'] as const,
  list: () => [...usersKeys.all] as const,
  bySerial: (serial: string) => [...usersKeys.all, serial] as const,
}
