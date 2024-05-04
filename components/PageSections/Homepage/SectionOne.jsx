import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Autocomplete from '@/components/Map/Autocomplete'

/**
 * Section of Banners.
 *
 * @returns
 */
const SectionOne = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState(0)
  const setAutocomplete = (value) => {
    setKeyword(value)
  }
  const [suggestions, setSuggestions] = useState([])
  const [suggestionType, setSuggestionType] = useState([])
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    // After some scrolling we hide some links.
    const listenToScroll = () => {
      let heightToHideFrom = 450
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      setHeight(winScroll)

      if (winScroll > heightToHideFrom) {
        isVisible && setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [isVisible])

  const getData = async (URL = 'autosuggest.json') => {
    let response = {}
    response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    return response?.json()
  }

  useEffect(() => {
    const autosuggestData = async () => {
      const suggestions = await getData(`autosuggest.json`)
      setSuggestions(suggestions)
    }
    autosuggestData()
  }, [])

  return (
    <>
      <section className='relative w-full h-[750px] md:h-[800px] min-h-[90vh] bg-vb_blue-600'>
        <Swiper
          id='homepage-swiper'
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className='mySwiper h-full'
          style={{
            '--swiper-pagination-color': '#869791',
            '--swiper-pagination-bullet-inactive-color': '#eeeeee',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '7px',
          }}
        >
          <SwiperSlide>
            <Image
              src={'/img/homepage/banner1.jpg'}
              alt=''
              className='mx-auto max-w-max object-cover w-full h-full'
              width={2560}
              height={800}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/homepage/banner2.jpg'}
              alt=''
              className='mx-auto w-full object-cover max-w-max h-full'
              width={2560}
              height={800}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/homepage/banner3.jpg'}
              alt=''
              className='mx-auto w-full object-cover max-w-max h-full'
              width={2560}
              height={800}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/homepage/banner4.jpg'}
              alt=''
              className='mx-auto w-full object-cover max-w-max h-full'
              width={2560}
              height={800}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/homepage/banner5.jpg'}
              alt=''
              className='mx-auto w-full object-cover max-w-max h-full'
              width={2560}
              height={800}
            />
          </SwiperSlide>
        </Swiper>
        <div className='absolute top-16 z-10 w-full'>
          <BasicContainer>
            <div className='text-center sm:text-right mb-52'>
              <h1 className='text-4xl lg:text-8xl text-white font-extrabold mb-6'>PUT DOWN ROOTS</h1>
              <h3 className='text-2xl lg:text-4xl text-white font-medium tracking-widest'>
                Find the home that is right for you.
              </h3>
            </div>
          </BasicContainer>
        </div>
        <div className='absolute bottom-20 z-10 w-full bg-white bg-opacity-20 py-2'>
          <form method='get' acceptCharset='utf-8' action='/search' autoComplete='off'>
            <div className='flex flex-row justify-center h-full md:h-20 bg-vb_blue-800'>
              <div className='w-full sm:w-11/12 md:w-2/3 xl:w-1/2 3xl:w-1/3 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-2 sm:px-0 py-3'>
                <div className='relative w-full sm:w-3/4 mb-4 sm:mb-0 sm:mx-2 md:mx-4'>
                  <Autocomplete
                    setSuggestions={setAutocomplete}
                    suggestions={suggestions}
                    setSuggestionType={setSuggestionType}
                    inputClasses={'w-full rounded-xl pl-8 md:pl-4 text-left'}
                  />
                  <span className='absolute top-2 right-0 bg-[url(/img/homepage/location-pin.svg)] bg-contain bg-no-repeat w-8 h-8' />
                </div>
                <button className='w-1/2 sm:w-1/4 bg-vb_green-400 hover:bg-vb_green-500 text-center text-white text-2xl sm:mx-2 md:mx-4 px-6 py-2 rounded-xl transition duration-150 ease-in-out'>
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* {isVisible && (
          <div className='fixed top-2/4 right-0 w-20 z-50'>
            <Link
              href='https://vinebrook-reslisting.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx'
              target='_blank'
              className='flex items-center justify-center w-20 h-20 bg-vb_green-300 hover:bg-vb_green-400 mb-4 rounded-l-2xl shadow-xl transition duration-150 ease-in-out'
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              data-bs-title='Make a Payment'
            >
              <Image
                src='/img/homepage/credit_card.svg'
                alt='Make Payment Icon'
                width={0}
                height={0}
                sizes={100}
                className='w-[40px] h-[40px]'
              />
            </Link>
            <Link
              href='https://www.exclusive.com/service-request'
              className='flex items-center justify-center w-20 h-20 bg-vb_green-300 hover:bg-vb_green-400 rounded-l-2xl shadow-xl transition duration-150 ease-in-out'
              data-bs-toggle='tooltip'
              data-bs-placement='left'
              data-bs-title='Service Request'
            >
              <Image
                src='/img/homepage/request.png'
                alt='Service Request Icon'
                width={0}
                height={0}
                sizes={100}
                className='w-[40px] h-[40px]'
              />
            </Link>
          </div>
        )} */}
      </section>
    </>
  )
}

export default SectionOne
