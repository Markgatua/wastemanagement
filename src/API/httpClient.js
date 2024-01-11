import axios from '@axios'
import { BASE_URL } from "./urls"

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig),
})
  
// This interceptor sets the auth token automatically if it exists in the store
const authInterceptor = config => {
  const token = this.$store.state.auth.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
}
  
httpClient.interceptors.request.use(authInterceptor)

// httpClient.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   },
// )

httpClient.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response.status === 401) {
      this.$store.commit("auth/setToken", null)
    }
    
    return Promise.reject(error)
  },
)
  
export default httpClient
