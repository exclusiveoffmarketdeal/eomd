import Login from '@/components/Login'
import Link from 'next/link'
import HeaderLogo from '@/public/img/menu/nav/header-logo.png'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
      <div className='sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-4'>
        <div className='flex justify-center'>
          {HeaderLogo ? (
            <Image
              src={HeaderLogo}
              alt='Header Logo'
              priority={true}
              className='w-24 h-20'
              width='0'
              height='0'
              sizes='100vw'
            />
          ) : null}
        </div>
        <h1 className='font-semibold text-4xl text-vb_blue-800 text-center tracking-widest'>LOGIN</h1>
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
