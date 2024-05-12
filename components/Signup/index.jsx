import { useState } from 'react'
import ApiClient from '@/utils/ApiClient'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/
    return regex.test(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one special character.'
      )
      return
    }

    const formData = {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    }
    setError('')
    try {
      const data = await ApiClient.postRequest('/users/signup', formData)
      // Handle successful signup, e.g., redirect to login page
    } catch (error) {
      setError('An error occurred during signup. Please try again.') // Handle specific error from API response
    }
  }

  return (
    <>
      {error && <div className='text-red-500 text-center'>{error}</div>}
      <form className='space-y-12 w-full sm:w-[400px]' onSubmit={handleSubmit}>
        <div className='grid w-full items-center gap-1.5'>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              First Name
            </label>
            <input
              id='first-name'
              name='firstName'
              type='firstName'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='First Name'
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Last Name
            </label>
            <input
              id='last-name'
              name='lastName'
              type='lastName'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Last Name'
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Email address'
              value={email}
              onChange={handleEmailChange}
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
              autoComplete='new-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <label htmlFor='confirm-password' className='sr-only'>
              Confirm Password
            </label>
            <input
              id='confirm-password'
              name='confirm-password'
              type='password'
              autoComplete='new-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Signup
          </button>
        </div>
      </form>
    </>
  )
}

export default Signup
