// src/features/devices/components/DevicesTable.tsx
import { useDevicesQuery } from '../hooks'
import type { Device } from '../../../models/device'

function StatusBadge({ status }: { status: Device['status'] }) {
  const cls =
    status === 'ACTIVE' ? 'badge active'
    : 'badge inactive'
  return <span className={cls}>{status}</span>
}

export default function DevicesTable() {
  const { data: devices, isLoading, isFetching, error } = useDevicesQuery()

  return (
    <>
      {error && <div className="alert">Failed to load devices.</div>}
      <div style={{ overflowX:'auto', marginTop:8 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Serial Number</th>
              <th>Status</th>
              <th>Manufacturer</th>
              <th>Location</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {devices?.map(d => (
              <tr key={d.serialNumber}>
                <td>{d.name}</td>
                <td>{d.type}</td>
                <td>{d.serialNumber}</td>
                <td><StatusBadge status={d.status} /></td>
                <td>{d.manufacturer}</td>
                <td>{d.location}</td>
                <td>{d.purchaseDate}</td>
              </tr>
            ))}
            {(!devices || devices.length === 0) && !isLoading && (
              <tr>
                <td colSpan={7} style={{padding:18, color:'var(--muted)'}}>No devices yet. Add one above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
