import LinkBtn from '@/components/Hardware/LinkBtn'
import Image from 'next/image'
import paymentIcon from '../../../../public/img/pages/Resident/index/Payment-Icon.svg'
import serviceRequestIcon from '../../../../public/img/pages/Resident/index/Service-Request-Icon.svg'

const SectionThree = ({ serviceRequestHeading, serviceRequestBody }) => {
  return (
    <>
      <section className='flex flex-col sm:flex-row w-full h-auto'>
        <div className='flex flex-row justify-end bg-vb_white-500 py-8'>
          <div className='flex flex-col justify-around items-center w-full px-2 sm:px-4 md:pl-10 lg:pl-14 xl:pl-32 2xl:pl-36 3xl:pl-56 4xl:pl-72'>
            {paymentIcon ? (
              <Image
                src={paymentIcon}
                alt='Payment Icon'
                className='w-20 lg:w-auto h-auto mb-4'
                width='0'
                height='0'
                sizes='100vw'
              />
            ) : null}
            <h6 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-vb_blue-600 mb-8'>
              MAKE A PAYMENT
            </h6>
            <p className='text-md sm:text-xl md:text-2xl text-center mb-4 px-6 md:px-0 2xl:px-12'>
              Pay online, check the status of your payments, and review payment history.
            </p>
            <LinkBtn
              address={'https://vinebrook-reslisting.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx'}
              newTab={'yes'}
            >
              START HERE
            </LinkBtn>
          </div>
        </div>
        <div className='flex flex-col justify-start bg-vb_green-300 py-8'>
          <div className='flex flex-col justify-around items-center w-full px-2 sm:px-4 md:pr-10 lg:pr-14 xl:pr-32 2xl:pr-36 3xl:pr-56 4xl:pr-72'>
            {serviceRequestIcon ? (
              <Image
                src={serviceRequestIcon}
                alt='Service Request Icon'
                className='w-20 lg:w-auto h-auto mb-4'
                width='0'
                height='0'
                sizes='100vw'
              />
            ) : null}
            <h6 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white mb-8'>SERVICE REQUEST</h6>
            <p className='text-md sm:text-xl md:text-2xl text-center text-white mb-4 px-6 md:px-0 2xl:px-12'>
              Request service or check on an existing request for NON-EMERGENCY issues.
            </p>
            <LinkBtn address={'https://www.vinebrookhomes.com/service-request'}>START NEW / CHECK REQUEST</LinkBtn>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionThree
