import React, { useEffect, useState, useCallback, Fragment } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const ImageSwiper = ({ images, detailURL, status }) => {
  return (
    <Fragment key={uuidv4()}>
      <Swiper spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className=''>
        {images?.map((image, i) => {
          if (i < 3) {
            const ImageURL = image.ImageURL
            return (
              <SwiperSlide key={uuidv4() + '_' + i} style={{ width: '263px', height: '263px' }}>
                <a className='position-absolute top-0 start-0 end-0 bottom-0' href={`/homes/${detailURL}`}>
                  {status === 'Y' ? (
                    <>
                      {ImageURL !== '' && ImageURL !== undefined ? (
                        <div className='p-1'>
                          <Image
                            src={ImageURL}
                            alt='Property Image'
                            width={0}
                            height={0}
                            sizes={100}
                            className='w-full h-[230px] object-cover rounded-xl'
                          />
                        </div>
                      ) : (
                        <div className='p-1'>
                          <Image
                            src={`/img/homepage/default.png`}
                            alt='Property Image'
                            width={0}
                            height={0}
                            sizes={100}
                            className='w-full h-[230px] object-cover rounded-xl'
                          />
                          <span className='inline-block absolute left-1 bg-opacity-95 rounded-r-2xl top-20 text-white bg-vb_orange-700 p-2 w-3/5 text-center'>
                            Photos Coming soon
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='p-1'>
                      <Image
                        src={ImageURL !== '' && ImageURL !== undefined ? `${ImageURL}` : `/img/homepage/default.png`}
                        alt='Property Image'
                        width={0}
                        height={0}
                        sizes={100}
                        className='w-full h-[230px] object-cover rounded-xl'
                      />
                      <span className='inline-block absolute left-1 bg-opacity-95 rounded-r-2xl top-20 text-white bg-vb_orange-700 p-2 w-3/5 text-center'>
                        Coming soon
                      </span>
                    </div>
                  )}
                </a>
              </SwiperSlide>
            )
          }
        })}
      </Swiper>
    </Fragment>
  )
}

export default ImageSwiper
