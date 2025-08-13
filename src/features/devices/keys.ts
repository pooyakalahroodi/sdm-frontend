// src/features/devices/keys.ts
export const devicesKeys = {
  all: ['devices'] as const,
  list: () => [...devicesKeys.all] as const,
  bySerial: (serial: string) => [...devicesKeys.all, serial] as const,
}
