import React, { useState } from 'react'
import ApiClient from '@/utils/ApiClient'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useAuth } from '@/components/AuthProvider'

const Login = () => {
  const router = useRouter()
  const { login } = useAuth()
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
        const token = loginResponse.token
        const firstName = loginResponse.firstName
        const lastName = loginResponse.lastName
        // Use context to handle login
        login(token, firstName, lastName)

        // Redirect to homePage
        toast.success('Login successful!')
        router.push('/')
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
            className='group relative w-full flex justify-center py-2 px-4 mb-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Login
          </button>
          <button
            type='button'
            className='group relative w-full flex justify-center mb-2 transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg '
          >
            <span className='flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 48 48'
                enableBackground='new 0 0 48 48'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#FFC107'
                  d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
                <path
                  fill='#FF3D00'
                  d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                ></path>
                <path
                  fill='#4CAF50'
                  d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                ></path>
                <path
                  fill='#1976D2'
                  d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                ></path>
              </svg>
              Sign in with Google
            </span>
          </button>
          <button
            type='button'
            className='group relative w-full flex justify-center mb-2 transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg '
          >
            <span className='flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'></path>
              </svg>
              Sign in with Facebook
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
