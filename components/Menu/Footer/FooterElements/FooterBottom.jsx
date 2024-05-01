import Link from 'next/link'
import BasicContainer from '../../../Hardware/Containers/BasicContainer'
import Image from 'next/image'
import Accredited from '../../../../public/img/menu/footer/accredited.png'
import FooterHome from '../../../../public/img/menu/footer/footer-home.png'

const FooterBottom = () => {
  return (
    <>
      <div className='flex flex-col justify-center bg-vb_blue-500 w-full h-auto py-4'>
        <BasicContainer>
          <div className='grid grid-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center text-white'>
            <span className='hidden lg:flex flex-row justify-start col-span-1'>
              <p>Exclusive Off Market DealsLLC © 2023</p>
            </span>
            <span className='flex flex-row justify-center md:justify-start lg:justify-center col-span-1 mb-4 lg:mb-0'>
              {Accredited ? (
                <Image
                  src={Accredited}
                  alt='Accredited'
                  className='w-auto h-auto mx-2'
                  width='0'
                  height='0'
                  sizes='100vw'
                />
              ) : null}
              {FooterHome ? (
                <Image
                  src={FooterHome}
                  alt='Footer Home'
                  className='w-auto h-auto mx-2'
                  width='0'
                  height='0'
                  sizes='100vw'
                />
              ) : null}
            </span>
            <span className='flex flex-row justify-center md:justify-end col-span-1 mb-4 lg:mb-0'>
              <h2>
                <Link className='mb-2' href='/terms-privacy'>
                  Terms | Policy
                </Link>
              </h2>
            </span>
            <span className='lg:hidden flex flex-row justify-center col-span-1 md:col-span-2'>
              <p>Exclusive Off Market DealsLLC © 2023</p>
            </span>
          </div>
        </BasicContainer>
      </div>
    </>
  )
}

export default FooterBottom
