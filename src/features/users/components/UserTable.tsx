import { useUsersQuery } from '../hooks'

export default function UserTable() {
  const { data: users, isLoading, error } = useUsersQuery()

  return (
    <>
      {error && <div className="alert">Failed to load users.</div>}
      <div style={{ overflowX:'auto', marginTop:8 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.department?.name}</td> 
                <td>{user.active ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}