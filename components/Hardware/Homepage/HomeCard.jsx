import Link from 'next/link'
import PropertyImage from './PropertyImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

/**
 * Home card of Homepage.
 *
 * @returns
 */
const HomeCard = (data) => {
  const home = data.home
  return (
    <>
      <div
        key={home.id}
        className='item h-full shadow-md hover:shadow-lg hover:shadow-vb_gray-200 transition mb-4 rounded-xl'
      >
        <div className='relative bg-white h-[450px] xl:h-[410px] 2xl:h-[440px] 3xl:h-[420px] m-0 rounded-xl p-4 shadow-md'>
          <div className='featured-box'>
            <div>
              {home.images !== '' && home.gallery.length === 0 && (
                <PropertyImage
                  image={home.images}
                  gallery={false}
                  url={home.detailUrl}
                  desc={home.address}
                  status={home.availableStatus}
                />
              )}
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                style={{
                  '--swiper-pagination-color': '#869791',
                  '--swiper-pagination-bullet-inactive-color': '#eeeeee',
                  '--swiper-pagination-bullet-inactive-opacity': '1',
                  '--swiper-pagination-bullet-size': '10px',
                  '--swiper-pagination-bullet-horizontal-gap': '7px',
                }}
              >
                {home.gallery.length > 0 &&
                  home.gallery.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        height: 'auto',
                      }}
                    >
                      <PropertyImage
                        image={image}
                        gallery={true}
                        url={home.detailUrl}
                        desc={home.address}
                        status={home.availableStatus}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <h5 className='font-bold text-lg text-vb_gray-500 my-2'>${home.price}/month</h5>
            <div className='home_detail'>
              <h6 className='text-sm text-vb_gray-400 mb-1'>
                {home.beds}bds {home.baths}ba {home.area}sqft
              </h6>
              <h6 className='text-sm text-vb_gray-400 mb-1'>
                <Link
                  href={`https://maps.google.com/maps?q=${home.address}, ${home.city}, ${home.state}&amp;hl=en&amp;t=v&amp;hnear=${home.address}, ${home.city}, ${home.state}`}
                  target='_blank'
                >
                  {home.address}, {home.city}, {home.state}, {home.zip}
                </Link>
              </h6>
            </div>
            <p>
              <Link href={`/homes/${home.detailUrl}`} className='text-vb_gray-400 text-sm no-underline font-light'>
                {home.detail !== '"None"' &&
                home.detail !== '' &&
                home.detail !== 'None' &&
                home.detail !== undefined ? (
                  <p>{home.detail.replace(/"/g, '').substr(0, 85)}...</p>
                ) : (
                  'This VineBrook Home is newly available or will be shortly. A full description is coming soon!'
                )}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
