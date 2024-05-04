import Link from 'next/link'
import BasicContainer from '../../../Hardware/Containers/BasicContainer'
import Image from 'next/image'
import FooterLogo from '../../../../public/img/menu/footer/footer-logo.png'
import Facebook from '../../../../public/img/menu/footer/facebook.svg'
import Instagram from '../../../../public/img/menu/footer/instagram.svg'
import Linkedin from '../../../../public/img/menu/footer/linkedin.svg'
import Twitter from '../../../../public/img/menu/footer/twitter.svg'

const FooterTop = () => {
  return (
    <>
      <div className='bg-vb_blue-800 py-6'>
        <BasicContainer>
          <div className='grid grid-row grid-cols-1 xl:grid-cols-3 justify-between items-center text-white'>
            <span className='xl:col-span-1 flex flex-col justify-center items-center xl:items-start mb-6 xl:mb-0'>
              {FooterLogo ? (
                <Image
                  src={FooterLogo}
                  alt='Footer Logo'
                  className='w-52 xl:w-1/2 h-auto mb-6'
                  width='0'
                  height='0'
                  sizes='50vw'
                />
              ) : null}
              <p className='text-center xl:text-left text-sm md:text-md'>
                Exclusive Off Market Dealsis an interally managed real estate company specializing in acquiring,
                renovating and leasing single family homes.
              </p>
            </span>
            <span className='xl:col-span-1 hidden xl:flex flex-row justify-between px-16 2xl:px-24'>
              <Link href={'https://www.facebook.com/exclusive'} target={'_blank'}>
                {Facebook ? (
                  <Image
                    src={Facebook}
                    alt='Facebook Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link href={'https://www.instagram.com/exclusive/'} target={'_blank'}>
                {Instagram ? (
                  <Image
                    src={Instagram}
                    alt='Instagram Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGQs8Bkpy21nQAAAYh9uEPAi-0N0lpNMMnLCTSwuiPb7WdB2KNi08kZZqbo4IdTBK7mJpbUIlPTFNl5Q_N3lzkYIxm7-gYTbTGXea_55PJLFIYyqWoDNAy4gDhP_CHzriKEDfU=&original_referer=https://www.exclusive.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvinebrook-homes-llc'
                }
                target={'_blank'}
              >
                {Linkedin ? (
                  <Image
                    src={Linkedin}
                    alt='Linkedin Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link href={'https://twitter.com/exclusive'} target={'_blank'}>
                {Twitter ? (
                  <Image
                    src={Twitter}
                    alt='Twitter Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
            </span>
            <span className='xl:col-span-1 flex flex-row justify-between xl:justify-end font-light text-sm mb-6 xl:mb-0'>
              <div className='flex flex-col text-right'>
                <Link className='hover:text-vb_green-400 mb-2 transition-all duration-150 ease-in-out' href='/'>
                  Log In
                </Link>
              </div>
              <div className='flex flex-col text-right ml-16'>
                <Link
                  className='hover:text-vb_green-400 mb-2 transition-all duration-150 ease-in-out'
                  href='https://vinebrook-reslisting.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx'
                  target={'_blank'}
                >
                  Sign Up
                </Link>
              </div>
            </span>
            <span className='col-span-1 xl:hidden flex flex-row justify-between w-64 md:w-1/2 mx-auto'>
              <Link href={'https://www.facebook.com/exclusive'} target={'_blank'}>
                {Facebook ? (
                  <Image
                    src={Facebook}
                    alt='Facebook Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link href={'https://www.instagram.com/exclusive/'} target={'_blank'}>
                {Instagram ? (
                  <Image
                    src={Instagram}
                    alt='Instagram Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGQs8Bkpy21nQAAAYh9uEPAi-0N0lpNMMnLCTSwuiPb7WdB2KNi08kZZqbo4IdTBK7mJpbUIlPTFNl5Q_N3lzkYIxm7-gYTbTGXea_55PJLFIYyqWoDNAy4gDhP_CHzriKEDfU=&original_referer=https://www.exclusive.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvinebrook-homes-llc'
                }
                target={'_blank'}
              >
                {Linkedin ? (
                  <Image
                    src={Linkedin}
                    alt='Linkedin Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
              <Link href={'https://twitter.com/exclusive'} target={'_blank'}>
                {Twitter ? (
                  <Image
                    src={Twitter}
                    alt='Twitter Icon'
                    className='w-auto h-auto'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </Link>
            </span>
          </div>
        </BasicContainer>
      </div>
    </>
  )
}

export default FooterTop
