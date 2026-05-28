import axios from 'axios'
import shuruEnv from './shuru_env'

const api = axios.create({
  baseURL: shuruEnv.API_BASE_URL
})

api.interceptors.request.use((config) => {
  if (import.meta.env.DEV) {
    const method = config.method?.toUpperCase() ?? 'GET'
    const url = `${config.baseURL ?? ''}${config.url ?? ''}`
    console.log(`[shuru axios] route hit: ${method} ${url}`)
  }
  return config
})

export default api
