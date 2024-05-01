import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import coach1 from '../../../public/img/pages/Operation-Hope/Debra-Douglas.jpg'
import coach2 from '../../../public/img/pages/Operation-Hope/Cesar-Montero.png'
import Link from 'next/link'

const SectionFour = () => {
  return (
    <>
      <div className='w-full mb-4'>
        <div className='bg-vb_blue-800'>
          <BasicContainer>
            <h3 className='w-full bg-vb_blue-800 text-xl md:text-2xl lg:text-4xl text-white text-center font-bold py-6'>
              NEED HELP? CONTACT ONE OF OUR FINANCIAL WELLNESS COACHES!
            </h3>
          </BasicContainer>
        </div>
        <BasicContainer>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch my-16'>
            <div className='flex flex-col justify-between items-center w-full sm:w-3/4 md:w-full lg:w-1/2 px-6 sm:px-0 lg:px-4 2xl:px-5 mb-16 lg:mb-0'>
              <div className='flex flex-col items-center'>
                <Image
                  src={coach1}
                  width={0}
                  height={0}
                  sizes={100}
                  alt={'coach1'}
                  className='w-auto h-56 sm:h-80 xl:h-[450px] mb-4 rounded-2xl'
                />
                <h4 className='text-center text-2xl lg:text-3xl font-bold tracking-wide leading-relaxed xl:leading-relaxed mb-6'>
                  DEBRA DOUGLAS | FINANCIAL WELLNESS COACH
                </h4>
                <p className='text-md md:text-lg 2xl:text-xl font-light mb-4'>
                  Debra Douglas, a Certified Credit Counselor and has worked in the Banking Industry for over 15 years.
                </p>
                <p className='text-md md:text-lg 2xl:text-xl font-light'>
                  Prior to joining Operation HOPE as a Credit & Money Management Coach, I have seen the impact and
                  disappointment in people when denied a loan application because of low/no credit. Being able to serve
                  in this capacity at Operation HOPE allows me to help and direct individuals to better manage their
                  finances and build/rebuild to 700 and above credit score for a brighter future.
                </p>
              </div>
              <div className='flex flex-col justify-end items-center w-full mt-4'>
                <Link
                  href={
                    'https://outlook.office365.com/owa/calendar/OperationHOPE3186925@operationHOPEinc.onmicrosoft.com/bookings/'
                  }
                  target={'_blank'}
                  className='w-5/6 sm:w-3/4 md:w-3/5 lg:w-11/12 xl:w-5/6 flex flex-col justify-center items-center bg-red-600 hover:bg-red-500 text-[18px] lg:text-2xl text-white text-center font-bold my-2 py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                >
                  SCHEDULE A CONSULTATION
                </Link>
                <Link
                  href={'https://operationhope.org/events-location/?hil=b98915bc-bdb6-ec11-983f-0022480404ba'}
                  target={'_blank'}
                  className='w-5/6 sm:w-3/4 md:w-3/5 lg:w-11/12 xl:w-5/6 flex flex-col justify-center items-center bg-red-600 hover:bg-red-500 text-[18px] lg:text-2xl text-white text-center font-bold my-2 py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                >
                  SIGN UP FOR A WORKSHOP
                  <span className='text-xs font-normal'>SEE PASSWORD BELOW</span>
                </Link>
              </div>
            </div>
            <div className='flex flex-col justify-between items-center w-full sm:w-3/4 md:w-full lg:w-1/2 px-6 sm:px-0 lg:px-4 2xl:px-5'>
              <div className='flex flex-col items-center'>
                <Image
                  src={coach2}
                  width={0}
                  height={0}
                  sizes={100}
                  alt={'coach2'}
                  className='w-auto h-56 sm:h-80 xl:h-[450px] mb-4 rounded-2xl'
                />
                <h4 className='text-center text-2xl lg:text-3xl font-bold tracking-wide leading-relaxed xl:leading-relaxed mb-6'>
                  CESAR MONTERO | FINANCIAL WELLNESS COACH
                </h4>
                <p className='text-md md:text-lg 2xl:text-xl font-light mb-4'>
                  Cesar Montero is a bilingual certified Hud Counselor and financial industry expert with banking
                  experience in various roles over two decades with most of his career concentrated in the areas of
                  Banking, Credit Risk, Origination, Underwriting, and Closing of Mortgages.
                </p>
                <p className='text-md md:text-lg 2xl:text-xl font-light'>
                  His Expertise includes improving clients’ credit, effective budgeting, and recommendation of tools to
                  increase savings. He has extensive knowledge of the loan process, documentation required for signing a
                  mortgage, and strategies to overcome becoming a homeowner.
                </p>
              </div>
              <div className='flex flex-col justify-end items-center w-full mt-4'>
                <Link
                  href={
                    'https://outlook.office365.com/owa/calendar/OperationHOPE488036%40operationHOPEinc.onmicrosoft.com/bookings/'
                  }
                  target={'_blank'}
                  className='w-5/6 sm:w-3/4 md:w-3/5 lg:w-11/12 xl:w-5/6 flex flex-col justify-center items-center bg-red-600 hover:bg-red-500 text-[18px] lg:text-2xl text-white text-center font-bold my-2 py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                >
                  SCHEDULE A CONSULTATION
                </Link>
                <Link
                  href={'https://operationhope.org/events-location/?hil=eb90a99c-eed2-ed11-a7c7-0022480499cb'}
                  target={'_blank'}
                  className='w-5/6 sm:w-3/4 md:w-3/5 lg:w-11/12 xl:w-5/6 flex flex-col justify-center items-center bg-red-600 hover:bg-red-500 text-[18px] lg:text-2xl text-white text-center font-bold my-2 py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                >
                  SIGN UP FOR A WORKSHOP
                  <span className='text-xs font-normal'>SEE PASSWORD BELOW</span>
                </Link>
              </div>
            </div>
          </div>
        </BasicContainer>
      </div>
      <div className='w-full bg-vb_blue-500'>
        <BasicContainer>
          <h4 className='w-full bg-vb_blue-500 text-lg sm:text-xl md:text-2xl lg:text-4xl text-white text-center font-normal py-6'>
            To register for a workshop, please use password: <span className='font-bold'>hope2023</span>
          </h4>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionFour
