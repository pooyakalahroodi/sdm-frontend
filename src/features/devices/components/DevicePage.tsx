// src/features/devices/components/DevicesPage.tsx
import DeviceForm from './DeviceForm'
import DevicesTable from './DeviceTable'
import { useDevicesQuery } from '../hooks'

export default function DevicesPage() {
  const { isLoading, isFetching } = useDevicesQuery()

  return (
    <section className="card">
      <header className="toolbar">
        <h2>Devices</h2>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          {(isLoading || isFetching) && <div className="loader" aria-label="loading" />}
          <span className="kbd">API: /api/devices</span>
        </div>
      </div>

      <DevicesTable />
    </section>
  )
}
