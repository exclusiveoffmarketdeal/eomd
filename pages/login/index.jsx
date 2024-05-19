import Login from '@/components/Login'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
      <div className='sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12'>
        <h1 className='font-semibold text-4xl text-center'>LOGIN</h1>
        <Login />
        <p className='text-center'>
          Need to create an account?{' '}
          <Link className='text-indigo-500 hover:underline' href='/signup'>
            Create Account
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default LoginPage
