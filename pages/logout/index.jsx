// pages/logout.js

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/components/AuthProvider'
import { toast } from 'react-toastify'

const Logout = () => {
  const router = useRouter()
  const { logout } = useAuth()

  useEffect(() => {
    // Clear the authentication token and any other related user data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken')
      localStorage.removeItem('firstName')
      logout()
    }
    toast.success('Logout successful!')
    // Redirect to the login page
    router.push('/login')
  }, [router])

  return null
}

export default Logout
