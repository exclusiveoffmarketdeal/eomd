import Link from 'next/link'
import { useState } from 'react'

const LinkUnderline = ({ children, address }) => {
  const [underline, setUnderline] = useState(false)
  let spanWidth = ''
  underline === false ? (spanWidth = 'w-0') : (spanWidth = 'w-full')
  return (
    <>
      <Link
        className='w-full flex justify-end [&>div>p]:hover:text-vb_green-500'
        href={address}
        onMouseEnter={() => setUnderline(!underline)}
        onMouseLeave={() => setUnderline(!underline)}
      >
        <div className='w-fit flex flex-col justify-center'>
          <p className='transition-all duration-300 ease-in-out'>{children}</p>
          <span className={`${spanWidth} h-[2px] bg-vb_green-500 transition-all duration-500 ease-in-out`}></span>
        </div>
      </Link>
    </>
  )
}

export default LinkUnderline
