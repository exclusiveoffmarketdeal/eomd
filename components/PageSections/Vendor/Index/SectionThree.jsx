import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import { useState } from 'react'
import LinkBtn from '@/components/Hardware/LinkBtn'
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import classNames from 'classnames'
import getStartedIcon from '../../../../public/img/pages/Vendor/index/Get-Started-Icon.png'
import whyVbIcon from '../../../../public/img/pages/Vendor/index/Why-VB-Icon.png'
import benefitsIcon from '../../../../public/img/pages/Vendor/index/Benefits-Icon.png'
import whyVendorCafeIcon from '../../../../public/img/pages/Vendor/index/Why-VendorCafe-Icon.png'
import vendorFAQIcon from '../../../../public/img/pages/Vendor/index/Vendor-FAQ-Icon.png'

const SectionThree = () => {
  let [getStarted, setGetStarted] = useState(true)
  let [whyVb, setWhyVb] = useState(false)
  let [benefits, setBenefits] = useState(false)
  let [whyVendorCafe, setWhyVendorCafe] = useState(false)
  let [vendorFAQ, setVendorFAQ] = useState(false)
  let menuBg = 'bg-[url(/img/pages/Vendor/index/Bg-Pattern.png)]'
  let getStartedBg = 'bg-[url(/img/pages/Vendor/index/Get-Started-Icon-Lg.png)]'
  let whyVbBg = 'bg-[url(/img/pages/Vendor/index/Why-VB-Icon-Lg.png)]'
  let benefitsBg = 'bg-[url(/img/pages/Vendor/index/Benefits-Icon-Lg.png)]'
  let whyVendorCafeBg = 'bg-[url(/img/pages/Vendor/index/Why-VendorCafe-Icon-Lg.png)]'
  let vendorFAQBg = 'bg-[url(/img/pages/Vendor/index/Vendor-FAQ-Icon-Lg.png)]'
  return (
    <>
      <section className='w-full'>
        <div className=' bg-vb_blue-800'>
          <BasicContainer>
            <h2 className='text-white text-2xl md:text-4xl text-center font-light lg:tracking-widest py-8'>
              INTERESTED IN BECOMING A VENDOR?
            </h2>
          </BasicContainer>
        </div>
        <div className='flex flex-col md:flex-row h-[980px] sm:h-[700px] md:h-[850px] lg:h-[850px] 2xl:h-[650px] 3xl:h-[620px]'>
          <div className={`flex justify-end bg-vb_teal-500 ${menuBg} w-full h-20 md:w-1/3 md:h-auto py-4`}>
            <ul className='flex flex-row md:flex-col justify-around w-full md:pl-2 lg:pl-20 2xl:pl-16 3xl:pl-24 4xl:pl-28'>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-2 h-16 md:h-28 xl:h-28 2xl:h-24 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': getStarted === true }
                )}
                onClick={() => (
                  setGetStarted(true), setWhyVb(false), setBenefits(false), setWhyVendorCafe(false), setVendorFAQ(false)
                )}
              >
                {getStartedIcon ? (
                  <Image
                    src={getStartedIcon}
                    alt='Get Started Icon'
                    className='w-8 h-8 mx-0 md:mx-4 lg:mx-2'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>How Do I Get Started?</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-2 h-16 md:h-28 xl:h-28 2xl:h-24 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': whyVb === true }
                )}
                onClick={() => (
                  setWhyVb(true), setBenefits(false), setWhyVendorCafe(false), setVendorFAQ(false), setGetStarted(false)
                )}
              >
                {whyVbIcon ? (
                  <Image
                    src={whyVbIcon}
                    alt='Why VB Icon'
                    className='w-8 h-8 mx-0 md:mx-4 lg:mx-2'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>
                  Why Exclusive Off Market Deals?
                </p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-2 h-16 md:h-28 xl:h-28 2xl:h-24 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': benefits === true }
                )}
                onClick={() => (
                  setBenefits(true), setWhyVendorCafe(false), setVendorFAQ(false), setGetStarted(false), setWhyVb(false)
                )}
              >
                {benefitsIcon ? (
                  <Image
                    src={benefitsIcon}
                    alt='Benefits Icon'
                    className='w-8 h-8 mx-0 md:mx-4 lg:mx-2'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>
                  Benefits of being a vendor
                </p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-2 h-16 md:h-28 xl:h-28 2xl:h-24 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': whyVendorCafe === true }
                )}
                onClick={() => (
                  setWhyVendorCafe(true), setVendorFAQ(false), setGetStarted(false), setWhyVb(false), setBenefits(false)
                )}
              >
                {whyVendorCafeIcon ? (
                  <Image
                    src={whyVendorCafeIcon}
                    alt='Why Vendor Cafe Icon'
                    className='w-8 h-8 mx-0 md:mx-4 lg:mx-2'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Why VendorCafe?</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-2 pr-2 md:pl-6 md:pr-2 h-16 md:h-28 xl:h-28 2xl:h-24 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': vendorFAQ === true }
                )}
                onClick={() => (
                  setVendorFAQ(true), setGetStarted(false), setWhyVb(false), setBenefits(false), setWhyVendorCafe(false)
                )}
              >
                {vendorFAQIcon ? (
                  <span className='flex flex-row justify-center w-10 h-10 mr-0 md:mr-2'>
                    <Image
                      src={vendorFAQIcon}
                      alt='Vendor FAQ Icon'
                      className='w-auto h-auto p-[3px]'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  </span>
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Vendor FAQ</p>
              </li>
            </ul>
          </div>
          <div className='bg-white w-full md:w-2/3 h-full'>
            <ul className='h-full p-2 sm:p-4 md:p-10 lg:p-16'>
              <li
                className={getStarted === true ? `h-full ${getStartedBg} bg-no-repeat bg-center bg-contain` : 'hidden'}
              >
                <h4 className='text-4xl text-vb_blue-500 font-bold mt-8 md:mt-0 mb-6'>HOW DO I GET STARTED?</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-2xl leading-loose'>
                  {/* <ReactMarkdown> */}
                  We are excited that you have chosen to partner with Exclusive Off Market Deals! To help us get to know
                  you better, please take 5 minutes to complete our short questionnaire.
                  {/* </ReactMarkdown> */}
                </p>
                <div className='mt-8'>
                  <LinkBtn
                    address={'https://www.vinebrookhomes.com/vendor/create-account'}
                    textSize={'text-2xl'}
                    fontWeight={'bold'}
                    bgColor={'bg-vb_green-500'}
                    bgColorHover={'hover:bg-vb_green-400'}
                    paddingX={'px-8'}
                    paddingY={'py-3'}
                  >
                    TELL US ABOUT YOU
                  </LinkBtn>
                </div>
              </li>
              <li className={whyVb === true ? `h-full ${whyVbBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-4xl text-vb_blue-500 font-bold mt-8 md:mt-0 mb-6'>
                  WHY Exclusive Off Market Deals?
                </h4>
                <p className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-md sm:text-lg lg:text-xl font-normal leading-snug lg:leading-loose'>
                  We know that you could collaborate with anyone. Here is what Exclusive Off Market Dealscan do for you:
                </p>
                <ul className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-lg font-thin pl-6 mt-6 list-disc leading-loose'>
                  <li>As the old adage goes, "time is money," and we pay you fast.</li>
                  <li>
                    With over 14,000 homes in 19 markets across the Midwestern and Southeastern United States, VineBrook
                    Homes offers a virtually unlimited number of jobs.
                  </li>
                  <li>Rapid growth promotes a sustainable vendor relationship in new markets.</li>
                  <li>
                    VineBrook Home's knowledgeable Project Managers are hands-on, friendly, and available, making sure
                    you get what you need to do the job well.
                  </li>
                  <li>Our vendor referral program will make your peers envious.</li>
                </ul>
              </li>
              <li className={benefits === true ? `h-full ${benefitsBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-4xl text-vb_blue-500 font-bold mt-8 md:mt-0 mb-6'>BENEFITS OF BEING A VENDOR</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-2xl font-normal leading-snug lg:leading-loose'>
                  Our Vendors are:
                </p>
                <ul className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-lg font-thin pl-6 mt-6 list-disc leading-loose'>
                  <li>Provided detailed scope of work</li>
                  <li>Provided Materials</li>
                  <li>Performing work on vacant properties</li>
                  <li>Signing a new Master Service Agreement (MSA) which will eliminate redundant paperwork</li>
                  <li>Tracking invoices through our payment process</li>
                  <li>Receiving payments quickly</li>
                  <li>Able to sign up with our easy and quick process</li>
                  <li>Provided constant available work</li>
                  <li>Using a new easier invoicing process</li>
                </ul>
              </li>
              <li
                className={
                  whyVendorCafe === true ? `h-full ${whyVendorCafeBg} bg-no-repeat bg-center bg-contain` : 'hidden'
                }
              >
                <h4 className='text-4xl text-vb_blue-500 font-bold mt-8 md:mt-0 mb-6'>WHY VENDORCAFE?</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-md sm:text-lg lg:text-xl font-normal leading-snug lg:leading-loose'>
                  There is nothing worse than having to shuffle through mounds of paperwork or click through multiple
                  cumbersome, inaccessible computer systems. Vendor Café literally puts your vendor relationship
                  management in the palm of your own hands. Using your personal computer or mobile device, you can:
                </p>
                <ul className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-lg font-thin pl-6 mt-6 list-disc leading-loose'>
                  <li>Create and submit invoices quickly and easily.</li>
                  <li>Upload insurance documentation in a few simple steps.</li>
                  <li>
                    Track your invoice and receive real-time notification of your payments progress or upcoming
                    insurance expiration.
                  </li>
                  <li>Receive check numbers or electronic routing numbers instantly upon payment.</li>
                  <li>Access anytime, anywhere. And best of all, it is entirely FREE!</li>
                </ul>
              </li>
              <li className={vendorFAQ === true ? `h-full ${vendorFAQBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-4xl text-vb_blue-500 font-bold mt-8 md:mt-0 mb-6'>FAQ</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 2xl:w-4/5 text-2xl leading-loose'>
                  We are committed to your smooth transition as a vendor partner with Exclusive Off Market Deals. We
                  have created this FAQ page that allows our vendor partners to find key information regarding
                  maintenance processes to better manage assigned service requests.
                </p>
                <div className='mt-8'>
                  <LinkBtn
                    address={'/vendor/faq'}
                    textSize={'text-2xl'}
                    fontWeight={'bold'}
                    bgColor={'bg-vb_green-500'}
                    bgColorHover={'hover:bg-vb_green-400'}
                    paddingX={'px-8'}
                    paddingY={'py-3'}
                  >
                    GET HELP
                  </LinkBtn>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionThree
