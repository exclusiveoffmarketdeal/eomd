import Link from 'next/link'
import HeaderLogo from '../../../../public/img/menu/nav/header-logo.png'
import Image from 'next/image'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import LinkBtn from '@/components/Hardware/LinkBtn'
import LinkUnderline from './LinkUnderline'
import { MdPersonOutline } from 'react-icons/md'
import { useState } from 'react'

const DesktopNav = () => {
  const [homeOpen, setHomeOpen] = useState(false)
  const [aboutUsOpen, setAboutUsOpen] = useState(false)
  const [logInOpen, setLogInOpen] = useState(false)
  return (
    <>
      <div className='hidden lg:block bg-vb_white-100 shadow-sm shadow-vb_gray-300'>
        <BasicContainer>
          <span className='flex flex-row justify-between items-center h-20 text-sm lg:text-base text-vb_gray-500 font-normal'>
            <div className='py-3'>
              <Link href='/'>
                {HeaderLogo ? (
                  <Image
                    src={HeaderLogo}
                    alt='Header Logo'
                    priority={true}
                    className='w-24 h-16 '
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
            </div>
            <div className='w-3/5 h-full flex justify-end'>
              <div className='w-[200px] h-full grid grid-cols-2 items-center [&>p]:text-end [&>p]:uppercase [&>p]:px-2'>
                <LinkUnderline address={'/login'}>Log In</LinkUnderline>
                <LinkUnderline address={'/signup'}>Sign Up</LinkUnderline>
                {/* <LinkUnderline address={'/sell-your-home'}>Sell Your Home</LinkUnderline>
                <LinkUnderline address={'/house-for-rent'}>Find A Home</LinkUnderline>
                <LinkUnderline address={'/buy-your-home'}>Contact Us</LinkUnderline>
                <LinkUnderline address={'/sell-your-home'}>About Us</LinkUnderline> */}
              </div>
            </div>
            <LinkBtn address={'/contacts'} bgColor={'bg-vb_blue-500'} bgColorHover={'hover:bg-vb_blue-600'}>
              <span className='flex flex-row items-center text-vb_white-100'>
                <MdPersonOutline className='text-3xl' /> Help
              </span>
            </LinkBtn>
          </span>
        </BasicContainer>
      </div>
    </>
  )
}

export default DesktopNav
