import axios from "axios"
import { cacheAdapterEnhancer } from "axios-extensions"
import { BASE_URL } from "./urls"

// Uncomment the next two lines if using XHR adapter
// import xhrAdapter from "axios/lib/adapters/xhr";
// axios.defaults.adapter = xhrAdapter;

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: "useCache",
}

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig),
})

const authInterceptor = config => {
  return config
}

httpClient.interceptors.request.use(authInterceptor)

httpClient.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default httpClient
