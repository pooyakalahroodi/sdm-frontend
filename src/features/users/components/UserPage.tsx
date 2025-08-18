import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable'; // if you have this component


export default function UserPage() {
  return (
    <div className="card">
      <header className="toolbar">
        <h2>Users</h2>
      </header>
      
      <div style={{marginBottom:16}}>
        <h3>Add User</h3>
        <UserForm />
      </div>

      <UserTable />
    </div>
  )
}