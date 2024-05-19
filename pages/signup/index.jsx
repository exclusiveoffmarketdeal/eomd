import Signup from '@/components/Signup'
import Link from 'next/link'
import HeaderLogo from '@/public/img/menu/nav/header-logo.png'
import Image from 'next/image'

const SignupPage = () => {
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
        <h1 className='font-semibold text-4xl text-vb_blue-800 text-center tracking-widest'>SIGNUP</h1>
        <div className=' border border-b-1 border-black mb-2'> </div>
        <Signup />
        <p className='text-center'>
          Already have an account?{' '}
          <Link className='text-indigo-500 hover:underline' href='/login'>
            Login
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default SignupPage
