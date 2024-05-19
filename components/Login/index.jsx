import { useState } from 'react'
import ApiClient from '@/utils/ApiClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
    general: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValid = true
    const newError = {
      email: '',
      password: '',
      general: '',
    }

    if (!email) {
      newError.email = 'Enter Email.'
      isValid = false
    }

    if (!password) {
      newError.password = 'Enter Password.'
      isValid = false
    }

    setError(newError)
    if (!isValid) return

    const formData = {
      email: email,
      password: password,
    }
    setError({ email: '', password: '', general: '' }) // Clear any previous error messages
    try {
      const loginResponse = await ApiClient.postRequest('/users/login', formData)
      // Handle successful login, e.g., redirect to dashboard
      if (loginResponse.success) {
      } else {
        setError({
          ...error,
          general: 'Invalid email or password', // Handle specific error from API response
        })
      }
    } catch (error) {
      setError({
        ...error,
        general: 'Issue while logging you in', // Handle specific error from API response
      })
    }
  }

  return (
    <>
      {error.general && <div className='text-red-500 text-center'>{error.general}</div>}
      <form className='space-y-12 w-full sm:w-[400px]' onSubmit={handleSubmit}>
        <div className='grid w-full items-center gap-1.5'>
          <div>
            <label htmlFor='email' className='p-0 m-0 overflow-hidden border-0'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                error.email ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Email address'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError({ ...error, email: '' }) // Clear email error on change
              }}
            />

            {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
          </div>
          <div>
            <label htmlFor='password' className='p-0 m-0 overflow-hidden border-0'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                error.password ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError({ ...error, password: '' }) // Clear password error on change
              }}
            />

            {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
          </div>
        </div>
        <div className='w-full'>
          <button
            type='submit'
            onClick={(e) => handleSubmit(e)}
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
