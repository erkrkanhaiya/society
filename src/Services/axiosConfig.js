import { applyAuthTokenInterceptor } from 'react-native-axios-jwt'
import axios from 'axios'

// const BASE_URL = 'https://control.mysupportroom.com/api';
const BASE_URL = 'https://nf.supportroom.com/api'
// 1. Create an axios instance that you wish to apply the interceptor to
const axiosInstance = axios.create({ baseURL: BASE_URL })

axiosInstance.defaults.headers.common.Accept = 'application/json'
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// 2. Define token refresh function.
const requestRefresh = async refresh => {
  // Notice that this is the global axios instance, not the axiosInstance!
  const response = await axios.post(`${BASE_URL}/auth/refresh_token`, {
    refresh,
  })

  return response.data.access_token
}

// 3. Apply interceptor
// Notice that this uses the axiosInstance instance.
applyAuthTokenInterceptor(axiosInstance, { requestRefresh })

export default axiosInstance
