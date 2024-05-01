import Link from 'next/link'
import Image from 'next/image'
import arrowRightLink from '@/public/img/pages/NewsRoom/Arrow-Right-Link.png'
import LatestNewsArticle from './LatestNewsArticle'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import ApiClient from '@/utils/ApiClient'

const NewsDetails = () => {
  if (loading) {
    return <h1>LOADING...</h1>
  } else {
    return (
      <>
        <section className='w-full h-fit bg-vb_white-100 py-10'>
          <h2 className='text-vb_blue-800 text-3xl font-semibold mb-6 pl-20'>LATEST NEWS</h2>

          <div>
            <Link
              href={''}
              className='flex flex-row items-center text-vb_green-500 hover:text-vb_green-400 text-2xl font-medium pl-20 transition-all duration-150 ease-in-out'
            >
              SEE ALL NEWS
              <Image
                src={arrowRightLink}
                alt={'Arrow Right Link'}
                width={0}
                height={0}
                sizes={100}
                className='w-7 h-5 ml-2'
              />
            </Link>
          </div>
        </section>
      </>
    )
  }
}

export default NewsDetails
