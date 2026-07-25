import axios from 'axios'

/**
 * Shared axios instance.
 * Not connected to a live backend yet — every feature currently reads from
 * local mock data. Point baseURL at the real API when the backend is ready
 * and each feature's `services/*API.js` file will start hitting real endpoints
 * without any change to components or hooks.
 */
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('cs_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default axiosInstance
