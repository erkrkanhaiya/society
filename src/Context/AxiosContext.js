import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import * as Keychain from 'react-native-keychain'

axios.defaults.headers.common.language = 'english'

const AxiosContext = createContext()
const { Provider } = AxiosContext
const BASE_URL = 'https://nf.supportroom.com/api'

const AxiosProvider = ({ children }) => {
  const authContext = useContext(AuthContext)

  const authAxios = axios.create({
    baseURL: BASE_URL,
  })

  const publicAxios = axios.create({
    baseURL: BASE_URL,
  })

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  const refreshAuthLogic = async failedRequest => {
    const data = {
      refresh_token: authContext.authState.refreshToken,
    }

    const options = {
      method: 'POST',
      data,
      url: `${BASE_URL}/refresh_token`,
    }

    try {
      console.log(options,'>>>>>')
      const tokenRefreshResponse = await axios(options)
      if (tokenRefreshResponse.status === 'error') {
        return authContext.logout()
      }

      failedRequest.response.config.headers.Authorization =
        'Bearer ' + tokenRefreshResponse.data.access_token

      authContext.setAuthState({
        ...authContext.authState,
        accessToken: tokenRefreshResponse.data.access_token,
        refreshToken: tokenRefreshResponse.data.refresh_token,
      })

      await Keychain.setGenericPassword(
        'token',
        JSON.stringify({
          accessToken: tokenRefreshResponse.data.access_token,
          refreshToken: tokenRefreshResponse.data.refresh_token,
        }),
      )
      return await Promise.resolve()
    } catch (e) {
      authContext.logout()
    }
  }

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {})
  // authContext.logout()

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}
    >
      {children}
    </Provider>
  )
}

export { AxiosContext, AxiosProvider }
