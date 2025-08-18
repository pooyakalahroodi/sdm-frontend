// progiton\SdmDeviceManagement-Frontend\src\features\users\components\UserForm.tsx
import React, { useState } from 'react'
import { useCreateUser } from '../hooks'
import type { CreateUser } from '../../../models/user'

export default function UserForm() {
  const [form, setForm] = useState<CreateUser>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    active: true
  })
  const createUser = useCreateUser()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    createUser.mutate(form)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      {/* Add other form fields similarly */}
    </form>
  )
}