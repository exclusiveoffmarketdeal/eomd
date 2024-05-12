import { useState } from 'react'
import ApiClient from '@/utils/ApiClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    const formData = {
      email: email,
      password: password,
    }
    setError('') // Clear any previous error messages
    try {
      const data = await ApiClient.postRequest('/users/login', formData)
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      setError('Invalid email or password.') // Handle specific error from API response
    }
  }

  return (
    <>
      {error && <div className='text-red-500 text-center'>{error}</div>}
      <form className='space-y-12 w-full sm:w-[400px]' onSubmit={handleSubmit}>
        <div className='grid w-full items-center gap-1.5'>
          <div>
            <label htmlFor='email' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={setPassword}
            />
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
