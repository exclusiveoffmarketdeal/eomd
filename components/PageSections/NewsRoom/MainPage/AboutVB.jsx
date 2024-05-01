import { useState } from 'react'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'

const AboutVB = () => {
  const [showAboutModal, setShowAboutModal] = useState(false)

  if (showAboutModal === false) {
    return (
      <>
        <aside className='w-full h-fit lg:h-full bg-vb_white-500 py-2 lg:py-10'>
          <div className='sticky lg:top-20 xl:top-24 px-2 sm:px-4 md:px-10 content-center'>
            <div>
              <h2 className='text-vb_blue-800 text-lg lg:text-2xl text-center lg:text-left font-semibold mb-4'>
                ABOUT Exclusive Off Market Deals
              </h2>
              <div className='text-vb_blue-800 text-justify text-xs lg:text-md'>
                <p>
                  Exclusive Off Market Dealsis an internally managed real estate company specializing in acquiring,
                  renovating and leasing single family homes. Unlike other providers, VineBrook takes a different
                  approach in the growing Single Family Rental Home industry, focusing on affordability and value for
                  our residents. Since our commencement in 2007, we have quickly become one of the largest providers of
                  quality homes with a variety of housing options offered.
                </p>
                <p className='hidden lg:block mt-6'>
                  Our highly trained and experienced staff is dedicated to providing the best experience to our current
                  and future residents, while demonstrating a commitment to being a good citizen in our communities. Our
                  core values of hard work, integrity, communication and execution have helped build a recognized brand
                  known for quality and long-term resident satisfaction.
                </p>
                <p className='hidden lg:block mt-6'>
                  We are proud to provide the many benefits of single family home living in great neighborhoods, with
                  ample space, storage, yards, privacy, security and professional management at a reasonable price. Most
                  importantly, our success in the Single Family Rental Home business would be nothing if it weren’t for
                  our fantastic residents, and we work every day to provide the best service possible in reacting to
                  their needs.
                </p>
              </div>
            </div>
            <div className='hidden lg:block text-vb_blue-800'>
              <h2 className='text-vb_blue-800 text-2xl font-semibold mt-8'>MEDIA CONTACT</h2>
              <p className='font-semibold mt-2'>Megan Grabos</p>
              <p className='lg:text-sm xl:text-base'>Vice President of Communications | Exclusive Off Market Deals</p>
              <Link
                href={'mailto:megan.grabos@vinebrookhomes.com'}
                className=' text-vb_green-400 break-all hover:text-vb_green-300 lg:text-xs xl:text-base font-bold underline transition duration-150 ease-in-out'
              >
                megan.grabos@vinebrookhomes.com
              </Link>
            </div>
            <button
              onClick={() => setShowAboutModal(true)}
              className='block lg:hidden text-vb_green-400 hover:text-vb_green-500 font-semibold my-2 transition-all duration-150 ease-in-out'
            >
              READ MORE
            </button>
          </div>
        </aside>
      </>
    )
  }
  return (
    <>
      <div className='z-30 fixed left-0 top-20 w-full h-screen py-4 px-2 backdrop-blur-sm'>
        <div className='h-fit bg-vb_white-500 bg-opacity-90 py-4 rounded-md shadow-md shadow-vb_gray-300'>
          <BasicContainer>
            <button
              onClick={() => setShowAboutModal(false)}
              className='bg-red-400 hover:bg-red-500 text-white p-1 rounded-full shadow-sm hover:shadow-md shadow-vb_gray-300 hover:shadow-vb_gray-400 transition-all duration-300 ease-in-out'
            >
              <IoMdClose />
            </button>
            <div>
              <h2 className='text-vb_blue-800 text-lg lg:text-2xl text-center lg:text-left font-semibold mb-4'>
                ABOUT Exclusive Off Market Deals
              </h2>
              <div className='text-vb_blue-800 text-justify text-xs'>
                <p>
                  Exclusive Off Market Dealsis an internally managed real estate company specializing in acquiring,
                  renovating and leasing single family homes. Unlike other providers, VineBrook takes a different
                  approach in the growing Single Family Rental Home industry, focusing on affordability and value for
                  our residents. Since our commencement in 2007, we have quickly become one of the largest providers of
                  quality homes with a variety of housing options offered.
                </p>
                <p className='mt-6'>
                  Our highly trained and experienced staff is dedicated to providing the best experience to our current
                  and future residents, while demonstrating a commitment to being a good citizen in our communities. Our
                  core values of hard work, integrity, communication and execution have helped build a recognized brand
                  known for quality and long-term resident satisfaction.
                </p>
                <p className='mt-6'>
                  We are proud to provide the many benefits of single family home living in great neighborhoods, with
                  ample space, storage, yards, privacy, security and professional management at a reasonable price. Most
                  importantly, our success in the Single Family Rental Home business would be nothing if it weren’t for
                  our fantastic residents, and we work every day to provide the best service possible in reacting to
                  their needs.
                </p>
              </div>
            </div>
            <div className='text-vb_blue-800 text-xs'>
              <h2 className='text-vb_blue-800 text-xl font-semibold mt-8'>MEDIA CONTACT</h2>
              <p className='font-semibold mt-2'>Megan Grabos</p>
              <p>Vice President of Communications | Exclusive Off Market Deals</p>
              <Link
                href={'mailto:megan.grabos@vinebrookhomes.com'}
                className=' text-vb_green-400 break-all hover:text-vb_green-300 font-bold underline transition duration-150 ease-in-out'
              >
                megan.grabos@vinebrookhomes.com
              </Link>
            </div>
          </BasicContainer>
        </div>
      </div>
    </>
  )
}

export default AboutVB
