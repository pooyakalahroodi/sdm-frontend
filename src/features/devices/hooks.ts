// src/features/devices/hooks.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getDevices, createDevice, updateDeviceStatus } from '../../api/devices'
import type { Device } from '../../models/device'
import { devicesKeys } from './keys'

export function useDevicesQuery() {
  return useQuery({ queryKey: devicesKeys.list(), queryFn: getDevices })
}

export function useCreateDevice() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createDevice,
    onSuccess: () => qc.invalidateQueries({ queryKey: devicesKeys.list() }),
  })
}

export function useSetActive() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (serial: string) => updateDeviceStatus(serial, 'Active'),
    onMutate: async (serial) => {
      await qc.cancelQueries({ queryKey: devicesKeys.list() })
      const prev = qc.getQueryData<Device[]>(devicesKeys.list())
      qc.setQueryData<Device[]>(devicesKeys.list(), (cur)=>
        (cur ?? []).map(d => d.serialNumber === serial ? { ...d, status: 'Active' } : d)
      )
      return { prev }
    },
    onError: (_e,_v,ctx)=>{ if (ctx?.prev) qc.setQueryData(devicesKeys.list(), ctx.prev) },
    onSettled: ()=> qc.invalidateQueries({ queryKey: devicesKeys.list() }),
  })
}
