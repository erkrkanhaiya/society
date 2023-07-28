import React, { createContext, useState } from 'react'
import { DevSettings } from 'react-native'
import * as Keychain from 'react-native-keychain'

const AuthContext = createContext(null)
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
    role: null,
  })

  const logout = async () => {
    await Keychain.resetGenericPassword()
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
      role: null,
    })
    DevSettings.reload()
  }

  const getAccessToken = () => {
    return authState.accessToken
  }
  // logout()

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
