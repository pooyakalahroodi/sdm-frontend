import axios from 'axios'

// This is your reusable HTTP client
export const api = axios.create({
  baseURL: '',            // In dev, we let Vite proxy to backend
  withCredentials: true,  // Send cookies if needed
})
