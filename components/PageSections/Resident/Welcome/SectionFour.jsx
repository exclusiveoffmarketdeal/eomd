import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import { useState } from 'react'
import LinkBtn from '@/components/Hardware/LinkBtn'
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import classNames from 'classnames'
import hardshipIcon from '../../../../public/img/pages/Resident/index/Hardship-Icon.png'
import resourcesIcon from '../../../../public/img/pages/Resident/index/Resources-Icon.png'
import coachingIcon from '../../../../public/img/pages/Resident/index/Coaching-Icon.png'
import faqIcon from '../../../../public/img/pages/Resident/index/FAQ-Icon.png'
import customerServiceIcon from '../../../../public/img/pages/Resident/index/Customer-Service-Icon.png'

const SectionFour = () => {
  let [hardship, setHardship] = useState(true)
  let [resources, setResources] = useState(false)
  let [coaching, setCoaching] = useState(false)
  let [faq, setFAQ] = useState(false)
  let [customer, setCustomer] = useState(false)
  let menuBg = 'bg-[url(/img/pages/Resident/index/Bg-Pattern.png)]'
  let hardshipBg = 'bg-[url(/img/pages/Resident/index/Hardship-Icon-Lg.png)]'
  let resourcesBg = 'bg-[url(/img/pages/Resident/index/Resources-Icon-Lg.png)]'
  let coachingBg = 'bg-[url(/img/pages/Resident/index/Coaching-Icon-Lg.png)]'
  let faqBg = 'bg-[url(/img/pages/Resident/index/FAQ-Icon-Lg.png)]'
  let customerServiceBg = 'bg-[url(/img/pages/Resident/index/Customer-Service-Icon-Lg.png)]'
  return (
    <>
      <section className='w-full'>
        <div className=' bg-vb_blue-800'>
          <BasicContainer>
            <h2 className='text-white text-2xl md:text-4xl text-center lg:tracking-widest py-8'>
              NEED MORE INFORMATION?
            </h2>
          </BasicContainer>
        </div>
        <div className='flex flex-col md:flex-row h-[500px] sm:h-[500px] md:h-[600px] lg:h-[650px]'>
          <div className={`flex justify-end bg-vb_teal-400 ${menuBg} w-full h-20 md:w-1/3 md:h-auto py-4`}>
            <ul className='flex flex-row md:flex-col justify-around w-full md:pl-2 lg:pl-20 xl:pl-30 2xl:pl-32 3xl:pl-36 4xl:pl-52'>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-0 h-16 xl:h-20 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': hardship === true }
                )}
                onClick={() => (
                  setHardship(true), setResources(false), setCoaching(false), setFAQ(false), setCustomer(false)
                )}
              >
                {hardshipIcon ? (
                  <Image
                    src={hardshipIcon}
                    alt='Hardship Icon'
                    className='w-8 h-8 xl:w-10 xl:h-10'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Hardship Program</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-0 h-16 xl:h-20 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': resources === true }
                )}
                onClick={() => (
                  setResources(true), setCoaching(false), setFAQ(false), setCustomer(false), setHardship(false)
                )}
              >
                {resourcesIcon ? (
                  <Image
                    src={resourcesIcon}
                    alt='Resources Icon'
                    className='w-8 h-8 xl:w-10 xl:h-10'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Resident Resources</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-0 h-16 xl:h-20 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': coaching === true }
                )}
                onClick={() => (
                  setCoaching(true), setFAQ(false), setCustomer(false), setHardship(false), setResources(false)
                )}
              >
                {coachingIcon ? (
                  <Image
                    src={coachingIcon}
                    alt='Coaching Icon'
                    className='w-8 h-8 xl:w-10 xl:h-10'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Financial Coaching</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-0 h-16 xl:h-20 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': faq === true }
                )}
                onClick={() => (
                  setFAQ(true), setCustomer(false), setHardship(false), setResources(false), setCoaching(false)
                )}
              >
                {faqIcon ? (
                  <span className='flex flex-row justify-center w-8 h-8 xl:w-10 xl:h-10'>
                    <Image
                      src={faqIcon}
                      alt='FAQ Icon'
                      className='w-auto h-auto p-[3px]'
                      width='0'
                      height='0'
                      sizes='100vw'
                    />
                  </span>
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>FAQ</p>
              </li>
              <li
                className={classNames(
                  'flex flex-row items-center pl-4 pr-4 md:pl-6 md:pr-0 h-16 xl:h-20 cursor-pointer select-none hover:bg-white hover:bg-opacity-20 rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md transition-all duration-300 ease-in-out',
                  { 'bg-white bg-opacity-20': customer === true }
                )}
                onClick={() => (
                  setCustomer(true), setHardship(false), setResources(false), setCoaching(false), setFAQ(false)
                )}
              >
                {customerServiceIcon ? (
                  <Image
                    src={customerServiceIcon}
                    alt='Customer Service Icon'
                    className='w-8 h-8 xl:w-10 xl:h-10'
                    width='0'
                    height='0'
                    sizes='100vw'
                  />
                ) : null}
                <p className='text-white text-xl xl:text-2xl xl:font-[600] hidden md:block'>Customer Service</p>
              </li>
            </ul>
          </div>
          <div className='bg-white w-full md:w-2/3 h-full'>
            <ul className='h-full p-2 sm:p-4 md:p-10 lg:p-16'>
              <li className={hardship === true ? `h-full ${hardshipBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-2xl lg:text-4xl text-vb_blue-500 font-bold mb-6'>HARDSHIP PROGRAM</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 text-md sm:text-lg lg:text-xl leading-snug lg:leading-loose'>
                  {/* <ReactMarkdown> */}
                  Today, more than ever, Exclusive Off Market Dealsis striving to live up to our mission of providing
                  safe, functional, and affordable homes to the markets in which we operate. We care deeply for
                  residents, communities, and neighborhoods and are committed to working with our residents by providing
                  solutions to ensure they have a place to call home.
                  <br />
                  <br />
                  <span className='italic'>
                    If you are a resident who is experiencing financial hardship, please let us know.
                  </span>
                  {/* </ReactMarkdown> */}
                </p>
                <div className='mt-6'>
                  <LinkBtn address={'/resident/hardship'} fontWeight={'bold'}>
                    LEARN MORE
                  </LinkBtn>
                </div>
              </li>
              <li className={resources === true ? `h-full ${resourcesBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-2xl lg:text-4xl text-vb_blue-500 font-bold mb-6'>RESIDENT RESOURCES</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 text-md sm:text-lg lg:text-xl leading-snug lg:leading-loose'>
                  At Exclusive Off Market Dealswe are committed to working with our residents who experience financial
                  hardship to stay in their homes. The Resident Resources page connects residents to resources they may
                  need during challenging times.
                </p>
                <div className='mt-6'>
                  <LinkBtn address={'/resident/resources'} fontWeight={'bold'}>
                    LEARN MORE
                  </LinkBtn>
                </div>
              </li>
              <li className={coaching === true ? `h-full ${coachingBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-2xl lg:text-4xl text-vb_blue-500 font-bold mb-6'>FINANCIAL COACHING</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 text-md sm:text-lg lg:text-xl leading-snug lg:leading-loose'>
                  Exclusive Off Market DealsCommunity Uplift program through our partnership with Operation HOPE strives
                  to expand our communities’ economic opportunities and helps provide financial well-being through
                  coaches and services to our residents.
                </p>
                <div className='mt-6'>
                  <LinkBtn address={'/operation-hope'} fontWeight={'bold'}>
                    LEARN MORE
                  </LinkBtn>
                </div>
              </li>
              <li className={faq === true ? `h-full ${faqBg} bg-no-repeat bg-center bg-contain` : 'hidden'}>
                <h4 className='text-2xl lg:text-4xl text-vb_blue-500 font-bold mb-6'>FAQ</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 text-md sm:text-lg lg:text-xl leading-snug lg:leading-loose'>
                  We are committed to your smooth transition as a resident with Exclusive Off Market Deals. We have
                  created this FAQ page that allows our residents to find key information to provide you a seamless and
                  enjoyable resident experience while in your new home.
                </p>
                <div className='mt-6'>
                  <LinkBtn address={'/resident/faq'} fontWeight={'bold'}>
                    GET HELP
                  </LinkBtn>
                </div>
              </li>
              <li
                className={
                  customer === true ? `h-full ${customerServiceBg} bg-no-repeat bg-center bg-contain` : 'hidden'
                }
              >
                <h4 className='text-2xl lg:text-4xl text-vb_blue-500 font-bold mb-6'>CUSTOMER SERVICE</h4>
                <p className='w-full md:w-4/5 xl:w-3/5 text-md sm:text-lg lg:text-xl leading-snug lg:leading-loose'>
                  {/* <ReactMarkdown> */}
                  If you have any further questions our customer service team is happy to help. To speak to a trusted
                  member of the VineBrook team, please email{' '}
                  <a
                    className='underline text-vb_blue-400 hover:text-vb_blue-500'
                    href='mailto:customerservice@exclusive.com'
                  >
                    customerservice@exclusive.com
                  </a>{' '}
                  or call
                  <a className='underline text-vb_blue-400 hover:text-vb_blue-500' href='tel:1-855-513-5678'>
                    1.855.513.5678
                  </a>
                  {/* </ReactMarkdown> */}
                </p>
                <div className='mt-6'>
                  <LinkBtn address={'/contacts'} fontWeight={'bold'}>
                    LEARN MORE
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

export default SectionFour
