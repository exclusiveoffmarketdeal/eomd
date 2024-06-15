// components/LeftNav.js
import Link from 'next/link'

const LeftNav = () => {
  return (
    <nav className='h-full p-5 bg-gray-100'>
      <ul className='space-y-4'>
        <li>
          <Link href='/admin/properties' className='text-blue-600 hover:text-blue-800'>
            Properties
          </Link>
        </li>
        <li>
          <Link href='/admin/users' className='text-blue-600 hover:text-blue-800'>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default LeftNav
