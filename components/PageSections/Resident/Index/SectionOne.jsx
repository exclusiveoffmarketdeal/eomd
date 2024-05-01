import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Link from 'next/link'
import Image from 'next/image'
import bannerIcon1 from '../../../../public/img/pages/Resident/index/Appstore-Icon.png'
import bannerIcon2 from '../../../../public/img/pages/Resident/index/Playstore-Icon.png'
import bannerImg from '../../../../public/img/pages/Resident/index/Phones.png'

const SectionOne = () => {
  let bannerBackground = `bg-[url('/img/pages/Resident/index/Resident-Banner-Full.jpg')]`
  return (
    <>
      <section className={`${bannerBackground} bg-no-repeat bg-cover w-full pt-6`}>
        <BasicContainer>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-1/2 px-4 md:px-0'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl xl:leading-normal font-bold text-right md:text-left text-white mb-4'>
                DOWNLOAD THE Exclusive Off Market DealsRESIDENT APP
              </h1>
              <h3 className='hidden md:block text-2xl font-thin text-white mb-8'>Pay your rent hassle free.</h3>
              <div className='hidden md:flex flex-row w-1/3 xl:w-1/4 3xl:w-1/5 justify-between'>
                <Link href={'https://apps.apple.com/us/app/vinebrook-homes-resident/id1584094378'} target={'_blank'}>
                  {bannerIcon1 ? (
                    <Image
                      src={bannerIcon1}
                      alt='Banner Icon 1'
                      className='w-10 h-auto'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  ) : null}
                </Link>
                <Link
                  href={'https://play.google.com/store/apps/details?id=com.yardi.systems.rentcafe.resident.vinebrook'}
                  target={'_blank'}
                >
                  {bannerIcon2 ? (
                    <Image
                      src={bannerIcon2}
                      alt='Banner Icon 2'
                      className='w-10 h-auto'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  ) : null}
                </Link>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex flex-row justify-between md:justify-end px-2 md:px-0'>
              <div className='w-4/5 md:w-full xl:w-4/5'>
                {bannerImg ? (
                  <Image
                    src={bannerImg}
                    alt='Banner Img'
                    className='w-4/5 md:w-full h-full'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
              </div>
              <div className='flex flex-col w-1/5 justify-center items-center md:hidden'>
                <Link href={'https://apps.apple.com/us/app/vinebrook-homes-resident/id1584094378'} target={'_blank'}>
                  {bannerIcon1 ? (
                    <Image
                      src={bannerIcon1}
                      alt='Banner Icon 1'
                      className='w-10 sm:w-10 h-auto py-2'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  ) : null}
                </Link>
                <Link
                  href={'https://play.google.com/store/apps/details?id=com.yardi.systems.rentcafe.resident.vinebrook'}
                  target={'_blank'}
                >
                  {bannerIcon2 ? (
                    <Image
                      src={bannerIcon2}
                      alt='Banner Icon 2'
                      className='w-10 sm:w-10 h-auto py-2'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  ) : null}
                </Link>
              </div>
            </div>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionOne
