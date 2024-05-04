import LinkBtn from '@/components/Hardware/LinkBtn'
import Image from 'next/image'
import keys from '../../../public/img/pages/Sell-Your-Home/Keys-Sell-Your-Home.jpg'

const SectionOne = () => {
  let pattern = `bg-[url('/img/pages/Sell-Your-Home/Pattern-Sell-Your-Home.png')]`
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center w-full mb-20'>
        <Image src={keys} alt={'keys'} width={0} height={0} sizes={100} className='w-full lg:w-7/12 2xl:w-3/5' />
        <div className='w-full lg:w-5/12 2xl:w-2/5 bg-vb_blue-800'>
          <div
            className={`w-full h-full flex flex-col justify-center items-center lg:items-end ${pattern} 2xl:pl-4 sm:pr-4 md:pr-10 lg:pr-14 xl:pr-32 2xl:pr-36 3xl:pr-56 4xl:pr-72 py-10 sm:py-14`}
          >
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-right font-black'>
              LOOKING TO SELL?
            </h1>
            <span className='mt-8 sm:mt-10 md:mt-12 lg:mt-14 2xl:mt-16'>
              <LinkBtn address={'https://exclusive.my.salesforce-sites.com/sellyour_home'} newTab={'yes'}>
                REQUEST DETAILS
              </LinkBtn>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
