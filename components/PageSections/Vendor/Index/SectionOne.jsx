import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import LinkBtn from '@/components/Hardware/LinkBtn'
import Link from 'next/link'
import bannerImg from '@/public/img/pages/Vendor/index/Vendor-Banner.jpg'

const SectionOne = () => {
  let patternBg = `bg-[url('/img/pages/Vendor/index/Bg-Pattern.png')]`
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-between w-full'>
          <div className='w-full md:w-1/2 flex flex-row justify-between md:justify-end'>
            <Image
              src={bannerImg}
              alt={'bannerImg'}
              width={0}
              height={0}
              sizes={100}
              priority={true}
              className='w-full md:h-[580px] object-cover'
            />
          </div>
          <div className='w-full md:w-1/2 bg-vb_white-500'>
            <div
              className={`w-full h-full flex flex-row justify-center md:justify-end items-center ${patternBg} bg-repeat bg-contain py-12 md:py-0`}
            >
              <BasicContainer>
                <div className='w-full flex flex-col justify-center items-center md:items-end'>
                  <h1 className='text-vb_blue-800 text-center md:text-right text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl xl:leading-normal font-black mb-4 3xl:mb-8'>
                    VENDOR PORTAL
                  </h1>
                  <span className='mt-6'>
                    <LinkBtn
                      address={'https://www.vendorcafe.com/vendorcafe/'}
                      newTab={'yes'}
                      textSize={'text-3xl'}
                      fontWeight={'bold'}
                      bgColor={'bg-vb_green-500'}
                      bgColorHover={'hover:bg-vb_green-400'}
                      paddingX={'px-12'}
                      paddingY={'py-2'}
                    >
                      SIGN IN
                    </LinkBtn>
                  </span>
                  <span className='text-vb_green-300 text-lg italic mt-8 px-4'>
                    <Link href={'https://www.vinebrookhomes.com/vendor/create-account'}>create new account</Link>
                  </span>
                </div>
              </BasicContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
