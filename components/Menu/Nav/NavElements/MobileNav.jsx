import NavBtn from './NavBtn'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import HeaderLogo from '../../../../public/img/menu/nav/header-logo.png'
import LinkBtn from '@/components/Hardware/LinkBtn'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { useState } from 'react'

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <div className='block lg:hidden absolute'>
        <span className='fixed items-center h-20 w-full bg-vb_white-100 shadow-sm shadow-vb_gray-300'>
          <BasicContainer>
            <span className='flex flex-row justify-between items-center w-full h-20'>
              <Link href='/'>
                {HeaderLogo ? (
                  <Image
                    src={HeaderLogo}
                    alt='Header Logo'
                    priority={true}
                    className='w-24 h-16'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <NavBtn handleClick={() => setNavOpen(!navOpen)} />
            </span>
          </BasicContainer>
        </span>
        <div
          className={classNames(
            'flex flex-row -left-1/2 w-1/2 sm:w-1/3 md:w-1/4 fixed mt-20 transition-all duration-500 ease-in-out',
            {
              'left-0 shadow-md shadow-vb_gray-300 transition-all duration-300 ease-in-out': navOpen,
            }
          )}
        >
          <div className='relative flex flex-col justify-between py-2 pl-4 font-medium w-full h-screen bg-vb_white-100'>
            <div className='flex flex-col justify-between h-1/2 text-vb_gray-500 font-normal [&>a]:uppercase'>
              <Link href='/house-for-rent'>Find A Home</Link>
              <Link href='/buy-your-home'>Buy Your Home</Link>
              <Link href='/sell-your-home'>Sell Your Home</Link>
              <Link href='/about-us'>About Us</Link>
              {/* <Link href='/newsroom'>On The Vine</Link> */}
              <Link href='/buy-your-home'>Buy Your Home</Link>
              <Link href='/careers'>Careers</Link>
              <Link href='/resident'>Resident</Link>
              <Link href='/vendor'>Vendor</Link>
              <span className='mt-2'>
                <LinkBtn address={'/contacts'} bgColor={'bg-vb_blue-500'} bgColorHover={'hover:bg-vb_blue-600'}>
                  Help
                </LinkBtn>
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
