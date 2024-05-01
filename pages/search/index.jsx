import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { SyncLoader } from 'react-spinners'
import React, { useEffect, useLayoutEffect, useRef, useState, useCallback, Fragment } from 'react'
import { MarkerF, MarkerClustererF, InfoWindowF } from '@react-google-maps/api'
import { v4 as uuidv4 } from 'uuid'
import Map from '@/components/Map/Map'
import Autocomplete from '@/components/Map/Autocomplete'
import ApiClient from '@/utils/ApiClient'
import ImageSwiper from '../house-for-rent/ImageSwiper'
import MultiRangeSlider from '@/components/Map/MultiRangeSlider'

const options = {
  disableDefaultUI: true,
  scaleControl: true,
  mapTypeId: 'roadmap',
  labels: true,
}

const FindHomes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingListing, setLoadingListing] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [column, setColumn] = useState('')
  const [order, setOrder] = useState('')

  const [keyword, setKeyword] = useState('')
  const [type, setType] = useState('market')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')
  const [minArea, setMinArea] = useState(0)
  const [maxArea, setMaxArea] = useState(0)

  const [totalRecords, settotalRecords] = useState(0)
  const [totalPage, setTotalPage] = useState(100)
  const [isOpen, setIsOpen] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [showBoxInfo, setShowBoxInfo] = useState(false)
  const [sortByDisplay, setSortByDisplay] = useState(true)
  const [position, setPosition] = useState({})
  const [address, setAddress] = useState({})
  const [availableStatus, setAvailableStatus] = useState({})
  const [map, setMap] = useState(null)
  const [defaultCenter, setDefaultCenter] = useState(null)
  const [centerLat, setCenterLat] = useState(39.738539565203624)
  const [centerLng, setCenterLng] = useState(-86.22431045532225)
  const [zoom, setZoom] = useState(4)
  const [locs, setLocs] = useState([])
  const [toggle, setToggle] = useState(false)
  const [propData, setPropData] = useState([])
  const [propMapData, setPropMapData] = useState([])
  const [mapContainerStyle, setMapContainerStyle] = useState([])
  const [suggestionList, setSuggestionList] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [suggestionType, setSuggestionType] = useState([])

  const google = typeof window !== 'undefined' && window.google

  const ref = useRef(null)

  const [width, setWidth] = useState(0)

  const handleToggleOpen = (loc) => {
    const positionTemp = { lat: parseFloat(loc.Latitude), lng: parseFloat(loc.Longitude) }
    setAddress(loc)
    setAvailableStatus(loc.availableStatus)
    setPosition({ lat: parseFloat(loc.latitude), lng: parseFloat(loc.longitude) })
    setShowInfo(true)
  }

  const handleToggleClose = () => {
    setShowInfo(false)
  }

  const handlePriceToggle = () => {
    setIsOpen(!isOpen)
  }

  const setAutocomplete = (value) => {
    setKeyword(value)
  }

  const commonListing = async (URL, pageData) => {
    const propCt = await ApiClient.postRequest(URL, pageData)
    setPropData(propCt?.data)
  }
  const commonLocations = async (URL, pageData) => {
    const propCt = await ApiClient.postRequest(URL, pageData)
    setPropMapData(propCt?.totalResult)
    settotalRecords(propCt?.totalResult?.length)
    if (propCt?.totalResult?.length == 1) {
      const url = `/homes/${getDetailURL(propCt?.totalResult[0])}`
      window.location.replace(url)
      //window.open(url, '_blank', 'noreferrer');
    }
  }
  /*
  const handleChangeType = (event) => {
    setType(event.target.value)
  }
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }
  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value)
  }
  */
  const handleChangeBeds = (event) => {
    setBeds(event.target.value)
  }
  const handleChangeBaths = (event) => {
    setBaths(event.target.value)
  }
  const handleChangeMinArea = (event) => { 
    let newMinArea = parseInt(event.target.value)
    if(maxArea == 0 || maxArea >= newMinArea){
      setMinArea(newMinArea) 
    }
    else{
      setShowBoxInfo(true)
      setMinArea(0) 
    } 
  }
  const handleChangeMaxArea = (event) => { 
    let newMaxArea = parseInt(event.target.value)
    if(minArea == 0 || minArea <= newMaxArea){
      setMaxArea(newMaxArea) 
    }
    else{ 
      setShowBoxInfo(true)
      setMaxArea(0) 
    } 
  } 
  const handleToggleCloseBox = () => {
    setShowBoxInfo(false)
  }
  const handleSubmit = async () => {
    setLoadingListing(true)
    await commonListing(`/find-homes/listing`, {
      lat: centerLat,
      lng: centerLng,
      page: page,
      limit: limit,
      column: column,
      order: order,
      keyword: keyword,
      type: suggestionType.toString().toLowerCase(),
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    await commonLocations(`/find-homes/locations`, {
      keyword: keyword,
      type: suggestionType.toString().toLowerCase(),
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    setLoadingListing(false)
  }

  const fetchListingData = async (lat, lng, kw, mtype) => {
    setLoadingListing(true)
    await commonListing(`/find-homes/listing`, {
      lat: lat,
      lng: lng,
      page: page,
      limit: limit,
      column: column,
      order: order,
      keyword: kw,
      type: mtype,
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    setLoadingListing(false)
  }

  const fetchLocationsData = async (kw, mtype) => {
    setLoading(true)
    await commonLocations(`/find-homes/locations`, {
      keyword: kw,
      type: mtype,
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    setLoading(false)
  }
  const nextPage = async (newPage) => {
    setLoadingListing(true)
    await commonListing(`/find-homes/listing`, {
      lat: centerLat,
      lng: centerLng,
      page: newPage,
      limit: limit,
      column: column,
      order: order,
      keyword: keyword,
      type: type,
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    setLoadingListing(false)
  }

  const prevPage = async (newPage) => {
    setLoadingListing(true)
    await commonListing(`/find-homes/listing`, {
      lat: centerLat,
      lng: centerLng,
      page: newPage,
      limit: limit,
      column: column,
      order: order,
      keyword: keyword,
      type: type,
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
    setLoadingListing(false)
  }

  const sortBy = async (newColumn, newOrder) => { 
    await commonListing(`/find-homes/listing`, {
      lat: centerLat,
      lng: centerLng,
      page: page,
      limit: limit,
      column: newColumn,
      order: newOrder,
      keyword: keyword,
      type: type,
      minPrice: minPrice,
      maxPrice: maxPrice,
      beds: beds,
      baths: baths,
      minArea: minArea,
      maxArea: maxArea,
    })
  }
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchTxt = window.location.search
      const kws = searchTxt?.split('&')
      const kw = kws[0]?.split('=')[1]
      const mtype = kws[1]?.split('=')[1].toLowerCase()
      setType(mtype)
      setKeyword(kw)
      setSuggestions(kw)
      setWidth(ref.current?.offsetWidth)

      const suggestionsArrInit = []
      suggestionList?.map((suggestion) => {
        suggestionsArrInit.push(suggestion)
      })
      setSuggestions(suggestionsArrInit)
      if (page == 1) {
        fetchLocationsData(kw, mtype)
      }
    }
  }, [page])

  useEffect(() => {
    const autosuggestData = async () => {
      const suggestions = await getData(`autosuggest.json`)
      setSuggestions(suggestions)
    }
    autosuggestData()
  }, [])

  useEffect(() => {
    if (map) {
      let timeout = 0
      google.maps.event.addListener(map, 'center_changed', (cntr) => {
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(function () {
          const searchTxt = window.location.search
          const kws = searchTxt?.split('&')
          const kw = kws[0]?.split('=')[1]
          const mtype = kws[1]?.split('=')[1].toLowerCase()
          setType(mtype)
          setKeyword(kw)

          var cntr = map.getCenter()
          setCenterLat(cntr.lat())
          setCenterLng(cntr.lng())
          fetchListingData(cntr.lat(), cntr.lng(), kw, mtype)
        }, 500)
      })

      let locations = []
      propMapData?.map((loc) => {
        locations.push({ lat: parseFloat(loc.latitude), lng: parseFloat(loc.longitude) })
      })
      if (locations.count > 0) {
        setCenterLat(locations[1].lat)
        setCenterLng(locations[1].lng)
      }
      setDefaultCenter({ lat: centerLat, lng: centerLng })
      setLocs(locations)
      if (width) {
        let widthX = width
        if (width > 768) {
          widthX = width / 2
        }
        setMapContainerStyle({
          height: '100vh',
          width: 'auto',
          overflow: 'hidden',
        })
      }
    }
  }, [map])

  return (
    <>
      <Head>
        <title>Find Homes</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <div className='w-full flex flex-wrap justify-center text-white bg-vb_teal-500 p-5'>
        <div className='text-center text-4xl sm:text-7xl font-extrabold'>
          <h1>FIND YOUR NEXT HOME</h1>
        </div>
      </div>
      <div className='w-full bg-white bg-opacity-25 py-2.5 -mt-2.5 relative z-10' ref={ref}>
        <div className='bg-vb_blue-900 px-4 sm:px-12 lg:px-32 xl:px-12 3xl:px-20 4xl:px-32 py-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-9 3xl:grid-cols-10 4xl:grid-cols-9 gap-y-2 md:gap-y-4 xl:gap-y-0 gap-x-2 md:gap-x-4 items-center'>
            <form autoComplete='off' className='col-span-2 xl:col-span-2'>
              <div className='relative'>
                <Autocomplete
                  setSuggestions={setAutocomplete}
                  suggestions={suggestions}
                  keyword={keyword}
                  setSuggestionType={setSuggestionType}
                  inputClasses={'w-full h-10 rounded-xl text-left truncate'}
                />
                <span className='absolute top-1 right-0 md:right-2 bg-[url(/img/homepage/location-pin.svg)] bg-contain bg-no-repeat w-8 h-8' />
              </div>
            </form>
            <div className='col-span-2'>
              <button
                className='w-full h-10 flex flex-row justify-between items-center bg-white rounded-xl text-left px-2'
                onClick={handlePriceToggle}
              >
                Rent per Month
                <span
                  className='inline-block border-b-[2px] border-r-[2px] border-black border-solid text-gray-300 p-[2px]'
                  style={{
                    transform: isOpen ? 'rotate(-135deg)' : 'rotate(45deg)',
                  }}
                ></span>
              </button>
              <div className={'px-2 bg-white rounded ' + (isOpen ? 'block ' : 'hidden ')}>
                <div className='w-full relative rounded-xl'>
                  <MultiRangeSlider
                    min={0}
                    max={3000}
                    onChange={({ min, max }) => {
                      setMinPrice(min)
                      setMaxPrice(max)
                    }}
                  />
                </div>
              </div>
            </div>
            <select name='beds' className='col-span-1 h-10 px-1 rounded-xl cursor-pointer' onChange={handleChangeBeds}>
              <option value=''>Bedrooms</option>
              <option value='1'>1 Bed</option>
              <option value='2'>2 Beds</option>
              <option value='3'>3 Beds</option>
              <option value='4'>4 Beds</option>
              <option value='5'>5 Beds</option>
              <option value='6'>5+ Beds</option>
            </select>
            <select
              name='baths'
              className='col-span-1 h-10 px-1 rounded-xl cursor-pointer'
              onChange={handleChangeBaths}
            >
              <option value=''>Bathrooms</option>
              <option value='1'>1 Bath</option>
              <option value='2'>2 Baths</option>
              <option value='3'>3 Baths</option>
              <option value='4'>4 Baths</option>
              <option value='5'>4+ Baths</option>
            </select>
            <select
              name='minArea'
              className='col-span-1 h-10 px-1 rounded-xl cursor-pointer'
              onChange={(e) => {
                handleChangeMinArea(e)
              }} 
              value={minArea}
              defaultValue={minArea}
            >
              <option value='0'>Min Area</option>
              <option value='500'>500 sqft</option>
              <option value='750'>750 sqft</option>
              <option value='1000'>1,000 sqft</option>
              <option value='1250'>1,250 sqft</option>
              <option value='1500'>1,500 sqft</option>
              <option value='1750'>1,750 sqft</option>
              <option value='2000'>2,000 sqft</option>
              <option value='2250'>2,250 sqft</option>
              <option value='2500'>2,500 sqft</option>
              <option value='2750'>2,750 sqft</option>
              <option value='3000'>3,000 sqft</option>
              <option value='3500'>3,500 sqft</option>
              <option value='4000'>4,000 sqft</option>
              <option value='4500'>4,500 sqft</option>
              <option value='5000'>5,000 sqft</option>
              <option value='6000'>6,000 sqft</option>
              <option value='7500'>7,500 sqft</option>
            </select>
            <select
              name='maxArea'
              className='col-span-1 h-10 px-1 rounded-xl cursor-pointer'
              onChange={(e) => {
                handleChangeMaxArea(e)
              }}
              value={maxArea}
              defaultValue={maxArea}
            >
              <option value='0'>Max Area</option>
              <option value='500'>500 sqft</option>
              <option value='750'>750 sqft</option>
              <option value='1000'>1,000 sqft</option>
              <option value='1250'>1,250 sqft</option>
              <option value='1500'>1,500 sqft</option>
              <option value='1750'>1,750 sqft</option>
              <option value='2000'>2,000 sqft</option>
              <option value='2250'>2,250 sqft</option>
              <option value='2500'>2,500 sqft</option>
              <option value='2750'>2,750 sqft</option>
              <option value='3000'>3,000 sqft</option>
              <option value='3500'>3,500 sqft</option>
              <option value='4000'>4,000 sqft</option>
              <option value='4500'>4,500 sqft</option>
              <option value='5000'>5,000 sqft</option>
              <option value='6000'>6,000 sqft</option>
              <option value='7500'>7,500 sqft</option>
            </select>
            {showBoxInfo && (
              <div style={{width: '100%', height: '100%',position: 'fixed',left: '0'}}>
                <div style={{ zIndex: '999', opacity:4, width: '400px', border:'1px solid #f10', padding:'10px', borderRadius:'10px',backgroundColor: '#a25c7f', position: 'fixed', top: '50%', left: '50%',transform: 'translate(-50%, -50%)' }}>
                  <p className='text-white'>Max area must be greater then min area</p>              
                  <button onClick={handleToggleCloseBox} style={{ position: 'absolute', top: '-16px',  right: '-12px', background: '#ef0a0a',  borderRadius: '10px',    padding: '2px 8px 2px 8px',  color: 'white'}}>X</button>            
                </div> 
              </div>
             )}
            <button
              type='submit'
              className='col-span-2 md:col-span-4 xl:col-span-1 3xl:col-span-2 4xl:col-span-1 flex justify-center items-center h-10 bg-vb_green-400 hover:bg-vb_green-500 text-2xl tracking-wider text-white font-extrabold px-8 py-3 rounded-xl transition-all duration-150 ease-in-out'
              onClick={() => {
                handleSubmit()
              }}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-full -mt-2.5'>
        {!loading ? (
          <>
            <div className='w-full lg:w-1/2'>
              <div className='sticky top-0'>
                <Map
                  setMap={setMap}
                  mapContainerStyle={mapContainerStyle}
                  defaultCenter={defaultCenter}
                  zoom={zoom}
                  options={options}
                >
                  <MarkerClustererF>
                    {(clusterer) =>
                      propMapData?.map((loc) => (
                        <MarkerF
                          key={uuidv4()}
                          position={{ lat: parseFloat(loc.latitude), lng: parseFloat(loc.longitude) }}
                          clusterer={clusterer}
                          onClick={() => handleToggleOpen(loc)}
                        />
                      ))
                    }
                  </MarkerClustererF>
                  {showInfo && (
                    <InfoWindowF onCloseClick={handleToggleClose} position={position}>
                      <div style={{ width: '280px' }}>
                        <a
                          href={`/homes/${getDetailURL(address)}`}
                          target='_blank'
                          className='position-absolute top-0 start-0 bottom-0 end-0 '
                        >
                          <h5 className='text-xl font-extrabold'>
                            {address.address + ', ' + address.city + ', ' + address.state + ' ' + address.zip}
                          </h5>
                          <p className='mb-2'>
                            <small>$ {address.price} / month</small>
                          </p>
                          <div className='info-body mb-2'>
                            {JSON.parse(address?.images).map(
                              (img, i) =>
                                i == 0 && (
                                  <Fragment key={uuidv4()}>
                                    <Image
                                      src={
                                        img.ImageURL !== '' && img.ImageURL !== undefined
                                          ? `${img.ImageURL}`
                                          : `/img/homepage/default.png`
                                      }
                                      className='m-3 max-sm:w-[365px] lg:w-[263px] '
                                      width='263'
                                      height='263'
                                      alt='Property Image'
                                    />
                                    {availableStatus !== 'Y' || img.ImageURL === '' || img.ImageURL === undefined ? (
                                      <span className='inline-block absolute left-0 opacity-7 rounded-r-2xl top-[100px] text-white bg-[#eca858] p-[12px] w-3/5 text-center'>
                                        Coming soon
                                      </span>
                                    ) : (
                                      <></>
                                    )}
                                  </Fragment>
                                )
                            )}
                          </div>
                          <p className='mb-2'>{address.dwellingType}</p>
                          <p className='mb-2'>
                            Beds: {address.beds}&nbsp;&nbsp;Baths: {address.baths}&nbsp;&nbsp;Area:{address.area}
                            sqft
                          </p>
                          <p className='mb-2'>
                            {JSON.parse(address?.detail).map((d) =>
                              d.description != '"None"' && d.description != '' && d.description != 'None' ? (
                                <Fragment key={uuidv4()}>
                                  <p>{d.description.substring(0, 70)}...</p>
                                </Fragment>
                              ) : (
                                <Fragment key={uuidv4()}>
                                  <p>
                                    This VineBrook Home is newly available or will be shortly. A full description is
                                    coming soon!
                                  </p>
                                </Fragment>
                              )
                            )}
                          </p>
                        </a>
                      </div>
                    </InfoWindowF>
                  )}
                </Map>
              </div>
            </div>
            {!loadingListing ? (
              <>
                {totalRecords === 0 || totalRecords === 1 ? (
                  <>
                    <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 border' style={{ width: width / 2 + 'px' }}>
                      <div className='flex flex-wrap justify-between'>
                        {totalRecords === 0 ? (
                          <>
                            <div className='w-full mt-48 uppercase'>
                              {keyword ? (
                                <>
                                  <h1 className='text-vb_blue-800 text-center  text-3xl xl:leading-normal font-black mb-4 3xl:mb-8'>
                                    HOUSES FOR RENT IN {keyword}
                                  </h1>
                                  <h2 className='text-vb_blue-800 text-center text-2xl mb-4 3xl:mb-8'>
                                    NEW HOUSES IN THE {keyword} {type} ARE COMING SOON !
                                  </h2>
                                </>
                              ) : (
                                <>
                                  <h1 className='text-vb_blue-800 text-center  text-3xl xl:leading-normal font-black mb-4 3xl:mb-8'>
                                    SORRY! WE CANNOT FIND ANY PROPERTY.
                                  </h1>
                                  <h2 className='text-vb_blue-800 text-center text-2xl mb-4 3xl:mb-8'>
                                    PLEASE CHECK BACK AGAIN SOON - OUR PROPERTY COLLECTION CHANGE VERY FREQUENTLY
                                  </h2>
                                </>
                              )}
                              <div className='text-center mb-8'>
                                <a
                                  className=' bg-vb_green-500 hover:bg-vb_green-400 font-bold text-white text-3xl px-6 py-2 rounded-lg  transition-all duration-150 ease-in-out'
                                  href={'/'}
                                >
                                  Back to Home
                                </a>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 border'
                              style={{ width: width / 2 + 'px' }}
                            >
                              <div className='flex flex-wrap justify-between'>
                                <div className='w-full justify-center flex flex-row mt-48'>
                                  Loading ...
                                  <span className='ml-2 self-center'>
                                    <SyncLoader color={'#339b84'} size={5} speedMultiplier={0.8} />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                      <div className='flex justify-between items-center sm:w-full md:w-full lg:w-full xl:w-full bg-vb_teal-300 p-4'>
                        <div className='text-2xl font-semibold py-1 px-2'>{totalRecords} Result(s)</div>
                        <div className=''>
                          <div className=''>
                            <button
                              className='relative bg-white hover:bg-vb_white-500 px-3 py-1 rounded-md shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-400 transition-all duration-150 ease-in-out'
                              type='button'
                              onClick={() => setSortByDisplay(!sortByDisplay)}
                            >
                              Sort by <i className='flaticon-filter-results-button'></i>
                            </button>
                            <ul
                              className={classNames('block absolute right-0 rounded-lg bg-white p-2 mt-1 z-[9]', {
                                hidden: sortByDisplay,
                              })}
                            >
                              <li className='bg-white hover:bg-vb_teal-200 rounded-md transition-all duration-150 ease-in-out'>
                                <button
                                  className='w-full h-full text-left px-2 py-1'
                                  onClick={() => {
                                    setColumn('price'), setOrder('ASC'), sortBy('price', 'ASC')
                                  }}
                                >
                                  Price(Low to High)
                                </button>
                              </li>
                              <li className='bg-white hover:bg-vb_teal-200 rounded-md transition-all duration-150 ease-in-out'>
                                <button
                                  className='w-full h-full text-left px-2 py-1'
                                  onClick={() => {
                                    setColumn('price'), setOrder('DESC'), sortBy('price', 'DESC')
                                  }}
                                >
                                  Price(High to Low)
                                </button>
                              </li>
                              <li className='bg-white hover:bg-vb_teal-200 rounded-md transition-all duration-150 ease-in-out'>
                                <button
                                  className='w-full h-full text-left px-2 py-1'
                                  onClick={() => {
                                    setColumn('beds'), setOrder('ASC'), sortBy('beds', 'ASC')
                                  }}
                                >
                                  Bedrooms
                                </button>
                              </li>
                              <li className='bg-white hover:bg-vb_teal-200 rounded-md transition-all duration-150 ease-in-out'>
                                <button
                                  className='w-full h-full text-left px-2 py-1'
                                  onClick={() => {
                                    setColumn('baths'), setOrder('ASC'), sortBy('baths', 'ASC')
                                  }}
                                >
                                  Bathrooms
                                </button>
                              </li>
                              <li className='bg-white hover:bg-vb_teal-200 rounded-md transition-all duration-150 ease-in-out'>
                                <button
                                  className='w-full h-full text-left px-2 py-1'
                                  onClick={() => {
                                    setColumn('area'), setOrder('ASC'), sortBy('area', 'ASC')
                                  }}
                                >
                                  Square Feet
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 w-full p-8 lg:p-16 xl:p-8'>
                        {propData?.map((prop) => {
                          const detailURL = getDetailURL(prop)
                          const images = JSON.parse(prop.images)
                          const propDetails = JSON.parse(prop.detail)
                          const propDetail = propDetails[0].description ?? ''
                          const propStatus = prop.availableStatus

                          return (
                            <Fragment key={uuidv4()}>
                              <div className='overflow-hidden rounded-xl shadow-md shadow-vb_gray-300 hover:shadow-lg hover:shadow-vb_gray-400 transition-all duration-150 ease-in-out'>
                                <div className='h-[450px] bg-white border-white border-8'>
                                  <ImageSwiper images={images} detailURL={detailURL} status={propStatus} />
                                  <div className='p-2'>
                                    <div className='relative'>
                                      <p className='text-lg font-bold mb-2'>${prop.price}/month</p>
                                      <p className='text-vb_gray-400 mb-1'>
                                        {prop.beds}bds {prop.baths}ba, {prop.area}sqft
                                      </p>
                                      <p className='text-vb_gray-400 mb-2'>
                                        {prop.address}, {prop.city}, {prop.state} {prop.zip}
                                      </p>
                                      {prop.detail != '"None"' && prop.detail != '' && prop.detail != 'None' ? (
                                        <p className='font-thin truncate'>{propDetail.substring(0, 70)}...</p>
                                      ) : (
                                        <p>
                                          This VineBrook Home is newly available or will be shortly. A full description
                                          is coming soon!
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                        })}
                      </div>
                      <div className='flex flex-wrap justify-between mx-20 my-5'>
                        {isLoading ? (
                          <p>Loading</p>
                        ) : (
                          <>
                            <button
                              className={`ms-2 text-white px-4 py-1 rounded-lg transition-all duration-150 ease-in-out ${
                                page == 1
                                  ? 'bg-vb_gray-100 hover:bg-vb_gray-600 '
                                  : 'bg-vb_blue-500 hover:bg-vb_blue-600 '
                              }`}
                              disabled={page == 1}
                              onClick={() => (setPage(page - 1), prevPage(page - 1))}
                            >
                              Prev
                            </button>
                            <button
                              className={`ms-2 text-white px-4 py-1 rounded-lg transition-all duration-150 ease-in-out ${
                                totalPage <= page
                                  ? 'bg-vb_gray-100 hover:bg-vb_gray-600 '
                                  : 'bg-vb_blue-500 hover:bg-vb_blue-600 '
                              }`}
                              disabled={totalPage <= page}
                              onClick={() => (setPage(page + 1), nextPage(page + 1))}
                            >
                              Next
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className='w-full lg:w-1/2 border' style={{ width: width / 2 + 'px' }}>
                  <div className='flex flex-wrap justify-between'>
                    <div className='w-full justify-center flex flex-row mt-48'>
                      Loading
                      <span className='ml-2 self-center'>
                        <SyncLoader color={'#339b84'} size={5} speedMultiplier={0.8} />
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className='flex flex-col justify-center my-4'>
              <div className='justify-center flex flex-row'>
                Loading
                <span className='ml-2 self-center'>
                  <SyncLoader color={'#339b84'} size={5} speedMultiplier={0.8} />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default FindHomes
