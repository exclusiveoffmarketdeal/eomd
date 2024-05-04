import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import serviceRequestIcon from '../../../../public/img/pages/Resident/Welcome/Service-Request-Icon.png'
import Link from 'next/link'

const SectionThree = () => {
  return (
    <>
      <section className='w-full h-auto bg-vb_white-500 py-10 sm:py-6 lg:py-0'>
        <BasicContainer>
          <div className='flex flex-col lg:flex-row justify-between lg:items-start'>
            <div className='w-full lg:w-1/2 flex flex-row justify-end bg-vb_white-500 lg:pr-8 xl:pr-12 2xl:pr-16 3xl:pr-20 4xl:pr-28 py-8'>
              <div className='flex flex-col justify-around items-center w-full'>
                <p className='text-base text-left mb-4'>
                  We are sure you will have many questions on how this change affects you and your rental home and we
                  are excited to answer them. As your new property manager, our priority is to ensure a smooth and
                  seamless transition into our resident support platform. While we are getting things ready for you,
                  below are some FAQs and other important information that will help guide you during this transition.
                  Keep an eye out in your email for additional communication from us in the coming days.
                </p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col justify-start bg-vb_white-500 lg:pl-8 xl:pl-12 2xl:pl-16 3xl:pl-20 4xl:pl-28 py-8'>
              <div className='flex flex-col justify-around items-center w-full'>
                <Link
                  href={'https://www.exclusive.com/service-request'}
                  className='flex flex-col justify-center items-center w-full sm:w-3/4 lg:w-full bg-white px-4 py-8 rounded-xl shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-400 transition-all duration-150 ease-in-out [&>p]:hover:text-vb_blue-500'
                >
                  {serviceRequestIcon ? (
                    <Image
                      src={serviceRequestIcon}
                      alt='Service Request Icon'
                      width={0}
                      height={0}
                      sizes={100}
                      className='w-16 h-auto mb-4'
                    />
                  ) : null}
                  <h6 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-vb_blue-600 mb-4'>
                    SERVICE REQUEST
                  </h6>
                  <p className='text-center text-base text-vb_blue-300 underline transition-all duration-150 ease-in-out'>
                    Click here to request service or check on an existing request for NON-EMERGENCY issues.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionThree
