import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setAuthToken(token)
    }
  }, [])

  const login = (token, firstName = '', lastName = '') => {
    localStorage.setItem('authToken', token)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    setAuthToken(token)
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setAuthToken(null)
    router.push('/login')
  }

  return <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)