import Link from 'next/link'

const Custom500 = () => {
  return (
    <>
      <h1 className='flex flex-row justify-center pt-52'>
        <span className='self-center text-4xl text-vb_blue-400'>500 | </span>
        <span className='self-center text-2xl text-vb_green-500'> Internal Server Error</span>
      </h1>
      <div className='flex flex-row justify-center pt-32 '>
        <span className='self-center text-2xl'>Go to:</span>
        <span className='self-center text-2xl text-vb_orange-700 hover:text-vb_orange-500 underline'>
          <Link href='/'>Home</Link>
        </span>
      </div>
    </>
  )
}

export default Custom500
