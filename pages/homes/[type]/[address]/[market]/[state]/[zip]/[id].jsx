import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { SyncLoader } from 'react-spinners'
import React, { useEffect, useLayoutEffect, useRef, useState, useCallback, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import ImageSwiper from '@/pages/house-for-rent/ImageSwiper'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import ApiClient from '@/utils/ApiClient'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const Homes = () => {
  let similarPattern = `bg-[url('/img/pages/Homes/Pattern-Homes.png')]`
  const [loading, setLoading] = useState(false)
  const [showApplyNowModal, setShowApplyNowModal] = useState(false)
  const [propertyId, setPropertyId] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [type, setType] = useState('')
  const [propDetails, setPropDetails] = useState([])
  const [similarProperties, setSimilarProperties] = useState([])
  const google = typeof window !== 'undefined' && window.google

  const ref = useRef(null)
  const [width, setWidth] = useState('1350px')

  const common = async (pageData) => {
    setLoading(true)
    const propCt = await ApiClient.postRequest(`/find-homes/detail`, pageData)
    setLoading(false)
    setPropDetails(propCt?.data)
    setSimilarProperties(propCt?.similarProperties)
  }

  const slugify = (str) => {
    str = str?.replace(/^\s+|\s+$/g, '')
    str = str?.toLowerCase()
    str = str
      ?.replace(/[^a-z0-9 -]/g, '')
      ?.replace(/\s+/g, '-')
      ?.replace(/-+/g, '-')
    return str
  }

  const getDetailURL = (prop) => {
    let address = slugify(prop.address)
    let dwellingType = slugify(prop.dwellingType)
    let market = slugify(prop.market)
    let state = prop.state.toLowerCase()
    let zip = prop.zip
    let id = prop.id
    return dwellingType + '/' + address + '/' + market + '/' + state + '/' + zip + '/' + id
  }
  const init = async () => {
    if (typeof window !== 'undefined') {
      const { Lightbox, initTE } = await import('tw-elements')
      initTE({ Lightbox })
    }
  }
  init()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (ref.current?.offsetWidth) {
        let widthX = ref.current?.offsetWidth
        if (ref.current?.offsetWidth > 768) {
          widthX = (ref.current?.offsetWidth * 4) / 5
        }
        setWidth(widthX)
      }
    }
    const pathname = window.location.pathname
    let parts = pathname.split('/')
    let tempId = parts[parts.length - 1]
    common({
      propertyId: tempId,
      keyword: keyword,
      type: type,
    })
  }, [keyword, type])
  const checkAvailability = async (param) => {
    const availProData = await ApiClient.postRequest(`/find-homes/check-availability`, param)
    if (availProData.status === 1) {
      window.open(availProData.url, '_blank', 'noopener,noreferrer')
    } else {
      setShowApplyNowModal(true)
    }
  }
  return (
    <>
      <Head>
        <title>Homes</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div className='w-full py-6'>
        <BasicContainer>
          <a
            className='flex flex-row items-center text-xl text-vb_gray-200 hover:text-vb_gray-100 font-light transition-all duration-150 ease-in-out'
            href={'/house-for-rent'}
          >
            <MdKeyboardArrowLeft className='text-4xl opacity-80 hover:opacity-50' />
            Back to Search Results
          </a>
        </BasicContainer>
      </div>
      {!loading ? (
        <>
          <div className='bg-vb_blue-100 w-full flex flex-wrap text-gray'>
            <BasicContainer>
              <div className='bg-vb_blue-100 py-4'>
                <div className='align-items-baseline'>
                  <div className=''>
                    <a
                      className=''
                      href={
                        'https://maps.google.com/maps?q=' +
                        propDetails[0]?.address +
                        ' ' +
                        propDetails[0]?.city +
                        ' ' +
                        propDetails[0]?.state +
                        ' ' +
                        '&hl=en&t=v&hnear=' +
                        propDetails[0]?.address +
                        ' ' +
                        propDetails[0]?.city +
                        ' ' +
                        propDetails[0]?.state
                      }
                    >
                      <h1 className='text-4xl font-extrabold text-vb_gray-500 '>
                        {propDetails[0]?.address} {propDetails[0]?.city}, {propDetails[0]?.state} {propDetails[0]?.zip}
                      </h1>
                    </a>

                    <h4 className='text-3xl font-bold mt-6 text-vb_blue-500'> ${propDetails[0]?.price} / mo</h4>
                    <h5 className='text-2xl font-light mt-3 text-[#677F8B]'>
                      {propDetails[0]?.beds} Bedrooms, {propDetails[0]?.baths} Bathrooms
                    </h5>
                  </div>
                </div>
              </div>
            </BasicContainer>
          </div>

          <div data-te-lightbox-init className='w-full mt-10'>
            <BasicContainer>
              <div className='w-full flex flex-col md:flex-row justify-between'>
                {propDetails.map((prop) => {
                  const images = JSON.parse(prop.images)
                  return (
                    <>
                      {images.map((image, i) => {
                        const ImageURL = image.ImageURL ?? '/img/homepage/default.png'
                        if (i == 0) {
                          return (
                            <Fragment key={`image-${i}`}>
                              <Image
                                data-te-img={ImageURL ?? '/img/homepage/default.png'}
                                src={ImageURL ?? '/img/homepage/default.png'}
                                alt='Property Image'
                                width={0}
                                height={0}
                                sizes={100}
                                className='w-full md:w-2/3 h-[325px] sm:h-[650px] rounded-2xl shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-200 mr-0 md:mr-2 mb-4 md:mb-0 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover transition-all duration-300 ease-in-out'
                              />
                            </Fragment>
                          )
                        }
                      })}
                    </>
                  )
                })}
                <div key={'slideshow'} className='grid grid-rows-2 gap-4 w-full md:w-1/3 sm:h-[650px]'>
                  {propDetails.map((prop) => {
                    const images = JSON.parse(prop.images)
                    return (
                      <>
                        {images.map((image, i) => {
                          const ImageURL = image.ImageURL ?? '/img/homepage/default.png'
                          if (i == 1) {
                            return (
                              <Fragment key={`image-${i}`}>
                                <Image
                                  src={ImageURL ?? '/img/homepage/default.png'}
                                  alt='Property Image'
                                  width={0}
                                  height={0}
                                  sizes={100}
                                  className='w-full h-full rounded-2xl shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-200 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover transition-all duration-300 ease-in-out'
                                />
                              </Fragment>
                            )
                          } else if (i == 2) {
                            return (
                              <Fragment key={`image-${i}`}>
                                <div className='relative w-full h-full'>
                                  <Image
                                    src={ImageURL ?? '/img/homepage/default.png'}
                                    alt='Property Image'
                                    width={0}
                                    height={0}
                                    sizes={100}
                                    className='w-full h-full opacity-50 rounded-2xl shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-200 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto object-cover transition-all duration-300 ease-in-out'
                                  />
                                  {images.length < 3 ? (
                                    <></>
                                  ) : (
                                    <div className='absolute top-1/2 left-1/4 text-4xl md:text-2xl lg:text-3xl 3xl:text-4xl font-extrabold text-sky-950'>
                                      + {images.length - 3} MORE
                                    </div>
                                  )}
                                </div>
                              </Fragment>
                            )
                          } else if (i > 2) {
                            return (
                              <Fragment key={`image-${i}`}>
                                <div className='relative hidden w-full h-full'>
                                  <Image
                                    src={ImageURL ?? '/img/homepage/default.png'}
                                    alt='Property Image'
                                    width={0}
                                    height={0}
                                    sizes={100}
                                    className='w-full h-full opacity-50 max-w-full rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                                  />
                                </div>
                              </Fragment>
                            )
                          }
                        })}
                      </>
                    )
                  })}
                </div>
              </div>
            </BasicContainer>
          </div>
          <BasicContainer>
            <p className='text-xl text-left font-light leading-9 my-6'>
              {propDetails.map((prop) => {
                const detail = JSON.parse(prop.detail)
                return <Fragment key={uuidv4()}>{detail[0].description}</Fragment>
              })}
            </p>
          </BasicContainer>

          <div className='w-full bg-vb_gray-500 py-12' ref={ref}>
            <BasicContainer>
              <span className='w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col sm:flex-row justify-between mx-auto mb-12'>
                <a
                  className='bg-vb_green-400 hover:bg-vb_green-500 text-center text-white font-bold text-xl mb-4 sm:mb-0 py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                  href='https://www.vinebrookhomes.com/files/resident-selection-criteria.pdf'
                  target='_blank'
                >
                  Rental Criteria
                </a>

                <a
                  className='bg-vb_green-400 hover:bg-vb_green-500 text-center text-white font-bold text-xl py-2 px-4 rounded-lg transition-all duration-150 ease-in-out'
                  onClick={() => {
                    checkAvailability({ propertyId: propDetails[0].rentcafeID })
                  }}
                >
                  Apply Now
                </a>
              </span>
              {showApplyNowModal ? (
                <>
                  <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative  mt-12 mx-auto max-w-4xl w-full  border-8 rounded-2xl border-solid border-#80949e'>
                      <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                          <p>
                            We are sorry. Currently this home is unavailable. Check back soon or Contact us at
                            +1(855)513-5678.
                          </p>
                          <button
                            className='bg-transparent border-0 text-black float-right'
                            onClick={() => setShowApplyNowModal(false)}
                          >
                            <span className='text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full'>
                              x
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              <div className='bg-vb_gray-100 p-4 rounded-2xl bg-opacity-70'>
                <div className='bg-white py-14 px-4 sm:px-8 lg:px-12 rounded-lg shadow-md shadow-vb_gray-300'>
                  <h3 className='text-center text-4xl font-light uppercase tracking-widest mb-14'>PROPERTY DETAILS</h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-18 text-xl md:text-2xl mb-8 [&>div>div>b]:font-normal [&>div>div>b]:mr-2 [&>div>div>p]:text-vb_gray-300'>
                    <div className='text-left'>
                      <div className='flex flex-row justify-start mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Price: </b> <p>${propDetails[0]?.price}/ Month</p>
                      </div>
                      <div className='flex flex-row justify-start mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Property Size:</b>
                        <p>{propDetails[0]?.area} Sqft.</p>
                      </div>
                    </div>
                    <div className='text-left'>
                      <div className='flex flex-row justify-start sm:justify-end xl:justify-center mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Beds:</b>
                        <p>{propDetails[0]?.beds}</p>
                      </div>
                      <div className='flex flex-row justify-start sm:justify-end xl:justify-center mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Baths:</b>
                        <p>{propDetails[0]?.baths}</p>
                      </div>
                    </div>
                    <div className='text-left'>
                      <div className='flex flex-row justify-start mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Type:</b>
                        <p>{propDetails[0]?.dwellingType}</p>
                      </div>
                      <div className='flex flex-row justify-start mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Status :</b>
                        <p>{propDetails[0]?.availableStatus == 'Y' ? 'Available' : 'Coming soon'}</p>
                      </div>
                    </div>
                  </div>
                  <div className='text-center text-3xl'>
                    <h3 className='text-center text-4xl font-light uppercase tracking-widest mb-8'>Schools</h3>
                    <div className='grid grid-cols-1 text-xl md:text-2xl [&>div>b]:font-normal [&>div>b]:mr-2 [&>div>p]:text-vb_gray-300'>
                      <div className='flex-col sm:flex-row justify-start items-start text-left mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Elementary School:</b>
                        <p className='whitespace-normal'>{propDetails[0]?.elementarySchool}</p>
                      </div>
                      <div className='flex-col sm:flex-row justify-start items-start text-left mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>Middle/Jr. High School:</b>
                        <p className='whitespace-normal'>{propDetails[0]?.middleSchool}</p>
                      </div>
                      <div className='flex-col sm:flex-row justify-start items-start text-left mb-4 md:mb-6'>
                        <b className='whitespace-nowrap'>High School:</b>
                        <p className='whitespace-normal'>{propDetails[0]?.highSchool}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BasicContainer>
          </div>

          <div className='w-full bg-vb_gray-100 py-12'>
            <BasicContainer>
              <iframe
                className='w-full'
                marginHeight='0'
                marginWidth='0'
                scrolling='no'
                src={
                  'https://www.walkscore.com/serve-walkscore-tile.php?wsid=9d8b9aab2f4f59b04bed3837e4ca9b43&s=' +
                  propDetails[0]?.address +
                  ',' +
                  propDetails[0]?.city +
                  ',' +
                  propDetails[0]?.state +
                  '&o=none&ts=t&c=t&hide_scores_below=70&icon=pin&mm=all&hide_bigger_map=t&nlb=t&h=485.6&fh=0&w=' +
                  (width > 1024 ? width : (width * 6) / 7)
                }
                width={width > 1024 ? width : (width * 6) / 7}
                height='500px'
                frameBorder='0'
              ></iframe>
            </BasicContainer>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col justify-center my-4'>
            <div className='justify-center flex flex-row'>
              Loading ...
              <span className='ml-2 self-center'>
                <SyncLoader color={'#339b84'} size={5} speedMultiplier={0.8} />
              </span>
            </div>
          </div>
        </>
      )}

      {similarProperties.length > 1 ? (
        <div className={`w-full px-1 md:px-4 bg-vb_green-200 ${similarPattern}`}>
          <div className='my-8'>
            <div className='my-12 text-center text-white text-4xl font-thin uppercase tracking-wider md:tracking-[16px]'>
              SIMILAR PROPERTIES
            </div>
            <div className=''>
              <div id="similar-properties-swiper" className='flex flex-col space-y-5 mx-1 md:mx-4'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className='mySwiper max-w-full'
                  breakpoints={{
                    '@0': {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    '@1': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '@1.2': {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    '@1.50': {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    }
                  }}
                  style={{
                    '--swiper-navigation-size': '20px',
                    'width': '100%'
                  }}>
                  {similarProperties.map((simProp, i) => {
                    const simDetailURL = getDetailURL(simProp)
                    const simImages = JSON.parse(simProp.images)
                    const simPropDetails = JSON.parse(simProp.detail)
                    const simPropDetail = simPropDetails[0].description ?? ''
                    return (
                      <Fragment key={uuidv4()}>
                        <SwiperSlide key={uuidv4()}>
                          <div className='px-6 h-full'>
                            <div className='sm:h-[520px] md:h-[500px] 2xl:max-h-[480px] 4xl:max-h-[450px] h-full pb-6 mb-12 overflow-hidden bg-white border-8 rounded-2xl border-solid border-white shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-400 transition-all duration-150 ease-in-out'>
                              <ImageSwiper images={simImages} detailURL={simDetailURL} />
                              <div className='p-2'>
                                <div className='relative'>
                                  <p className='text-lg font-bold mb-2'>${simProp.price}/month</p>
                                  <p className='text-vb_gray-400 mb-1'>
                                    {simProp.beds}bds {simProp.baths}ba, {simProp.area}sqft
                                  </p>
                                  <p className='text-vb_gray-400 mb-2'>
                                    {simProp.address}, {simProp.city}, {simProp.state} {simProp.zip}
                                  </p>
                                  {simProp.detail != '"None"' && simProp.detail != '' && simProp.detail != 'None' ? (
                                    <p className='font-thin'>{simPropDetail.substring(0, 70)}...</p>
                                  ) : (
                                    <p>
                                      This VineBrook Home is newly available or will be shortly. A full description is
                                      coming soon!
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Fragment>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default Homes
