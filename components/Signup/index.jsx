import { useState } from 'react'
import ApiClient from '@/utils/ApiClient'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: '',
  })

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setError({ ...error, email: '' }) // Clear email error on change
    setError({ ...error, general: '' })
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setError({ ...error, password: '' }) // Clear password error on change
    setError({ ...error, general: '' })
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
    setError({ ...error, confirmPassword: '' }) // Clear confirm password error on change
    setError({ ...error, general: '' })
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
    setError({ ...error, firstName: '' }) // Clear first name error on change
    setError({ ...error, general: '' })
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
    setError({ ...error, lastName: '' }) // Clear last name error on change
    setError({ ...error, general: '' })
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/
    return regex.test(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!firstName && !lastName && !email && !password && !confirmPassword) {
      setError({ ...error, general: 'Please fill in all fields.' })
      return
    }

    let isValid = true
    const newError = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    if (!firstName) {
      newError.firstName = 'Enter First Name.'
      isValid = false
    }

    if (!lastName) {
      newError.lastName = 'Enter Last Name.'
      isValid = false
    }

    if (!email) {
      newError.email = 'Enter Email.'
      isValid = false
    }

    if (!confirmPassword) {
      newError.confirmPassword = 'Enter Confirm Password.'
      isValid = false
    }

    if (password !== confirmPassword) {
      newError.confirmPassword = 'Passwords do not match.'
      isValid = false
    }

    if (!password) {
      newError.password = 'Enter Password.'
      isValid = false
    } else if (!validatePassword(password)) {
      newError.password =
        'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one special character.'
      isValid = false
    }

    setError(newError)
    if (!isValid) return

    const formData = {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    }
    setError({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', general: '' })

    try {
      const signupResponse = await ApiClient.postRequest('/users/signup', formData)
      // Handle successful signup, e.g., redirect to login page
      if (signupResponse.success) {
      } else {
        setError({
          ...error,
          general: 'An error occurred during signup. Please try again.', // Handle specific error from API response
        })
      }
    } catch (error) {
      setError({
        ...error,
        general: 'An error occurred during signup. Please try again.', // Handle specific error from API response
      })
    }
  }

  return (
    <>
      {error.general && <div className='text-red-500 text-center'>{error.general}</div>}
      <form className='space-y-12 w-full sm:w-[400px]' onSubmit={handleSubmit}>
        <div className='grid w-full items-center gap-1.5'>
          <div className='flex gap-4'>
            <div>
              <label htmlFor='first-name' className='p-0 m-0 overflow-hidden border-0'>
                First Name:
              </label>
              <input
                id='first-name'
                name='firstName'
                type='firstName'
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  error.firstName || error.general ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500  text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder='First Name'
                value={firstName}
                onChange={handleFirstNameChange}
              />

              {error.firstName && <p className='text-red-500 text-sm'>{error.firstName}</p>}
            </div>
            <div>
              <label htmlFor='last-name' className='p-0 m-0 overflow-hidden border-0'>
                Last Name:
              </label>
              <input
                id='last-name'
                name='lastName'
                type='lastName'
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  error.lastName || error.general ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastNameChange}
              />

              {error.lastName && <p className='text-red-500 text-sm'>{error.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor='email' className='p-0 m-0 overflow-hidden border-0'>
              Email:
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                error.email || error.general ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Email address'
              value={email}
              onChange={handleEmailChange}
            />

            {error.email && <p className='text-red-500 text-sm'>{error.email}</p>}
          </div>
          <div>
            <label htmlFor='phone' className='p-0 m-0 overflow-hidden border-0'>
              Phone:
            </label>
            <input
              id='phone'
              name='phone'
              type='phone'
              autoComplete='phone'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Phone(Optional)'
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div>
            <label htmlFor='address' className='p-0 m-0 overflow-hidden border-0'>
              Address:
            </label>
            <input
              id='address'
              name='address'
              type='address'
              autoComplete='address'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Address(Optional)'
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor='password' className='p-0 m-0 overflow-hidden border-0'>
              Password:
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='new-password'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                error.password || error.general ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
            {error.password && <p className='text-red-500 text-sm'>{error.password}</p>}
          </div>
          <div>
            <label htmlFor='confirm-password' className='p-0 m-0 overflow-hidden border-0'>
              Confirm Password:
            </label>
            <input
              id='confirm-password'
              name='confirm-password'
              type='password'
              autoComplete='new-password'
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                error.confirmPassword || error.general ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {error.confirmPassword && <p className='text-red-500 text-sm'>{error.confirmPassword}</p>}
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
