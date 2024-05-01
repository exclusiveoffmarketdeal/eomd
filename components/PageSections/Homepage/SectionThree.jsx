import Image from 'next/image'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Link from 'next/link'

/**
 * Section of Download links.
 *
 * @returns
 */
const SectionThree = () => {
  return (
    <>
      <section
        className='w-full pt-4 md:pt-8 xl:pt-12 flex justify-center bg-no-repeat bg-cover 
        bg-[url("/img/homepage/resident-app-banner-texture.jpg")] bg-center'
      >
        <BasicContainer>
          <div className='w-full flex flex-row'>
            <div className='w-full md:w-1/2 xl:w-3/5 flex flex-col justify-center md:justify-start'>
              <div className='w-full'>
                <h2 className='text-right md:text-left text-2xl sm:text-4xl lg:text-5xl xl:text-6xl md:leading-tight 2xl:leading-normal text-white font-extrabold leading-snug mb-2'>
                  DOWNLOAD THE Exclusive Off Market DealsRESIDENT APP
                </h2>
                <h3 className='text-2xl hidden md:block text-white mb-5 lg:mb-12 2xl:mb-8'>
                  Pay your rent hassle free.
                </h3>
              </div>
              <div className='w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 flex flex-row'>
                <div className='w-3/5 sm:w-1/2 md:hidden flex justify-center'>
                  <Image
                    src='/img/homepage/mobiles.png'
                    alt='Phone Image'
                    width={0}
                    height={0}
                    sizes={100}
                    className='w-full'
                  />
                </div>
                <div className='w-2/5 sm:w-1/2 md:w-full flex flex-col md:flex-row items-end sm:items-center justify-center md:justify-start'>
                  <Link
                    href='https://apps.apple.com/us/app/vinebrook-homes-resident/id1584094378'
                    target='_blank'
                    className='w-1/3 sm:w-1/5 md:1/4 mb-6 sm:mb-10 md:mb-0 mr-0 md:mr-10'
                  >
                    <Image
                      src='/img/homepage/appstore.png'
                      alt='Appstore Icon'
                      width={0}
                      height={0}
                      sizes={100}
                      className='w-full h-full'
                    />
                  </Link>
                  <Link
                    href='https://play.google.com/store/apps/details?id=com.yardi.systems.rentcafe.resident.vinebrook'
                    target='_blank'
                    className='w-1/3 sm:w-1/5 md:1/4'
                  >
                    <Image
                      src='/img/homepage/playstore.png'
                      alt='Playstore Icon'
                      width={0}
                      height={0}
                      sizes={100}
                      className='w-full h-full'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden md:flex md:justify-end items-end md:w-1/2 xl:w-2/5'>
              <Image
                src='/img/homepage/mobiles.png'
                alt='Phone Image'
                width={0}
                height={0}
                sizes={100}
                className='w-full h-fit'
              />
            </div>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionThree
