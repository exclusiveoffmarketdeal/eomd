import Head from 'next/head'
import Image from 'next/image'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import ApiClient from '@/utils/ApiClient'
import CityCard from '@/components/Hardware/Homepage/CityCard'

/**
 *
 * @returns
 */
const Markets = () => {
  const [loading, setLoading] = useState(true)
  const [markets, setMarkets] = useState()

  useEffect(() => {
    const initialMarketsData = async () => {
      const data = await ApiClient.getRequest('/cities')
      setMarkets(data.cities)
      setLoading(false)
    }
    initialMarketsData()
  }, [])

  return (
    <>
      <Head>
        <title>Markets | Exclusive Off Market Deals</title>
        <meta name='Markets' content='Markets Page  | Exclusive Off Market Deals' />
      </Head>
      <section className='w-full my-10'>
        <BasicContainer>
          <h1 className='text-3xl md:text-[48px] font-extrabold text-center text-vb_gray-500 leading-10 mt-2'>
            EXPLORE OUR AVAILABLE RENTAL HOMES
          </h1>
        </BasicContainer>
      </section>
      <section>
        <BasicContainer>
          <Loading loadingState={loading} itemLoading={'Markets'}>
            {markets && Array.isArray(markets) ? (
              <ul className='grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-10 4xl:gap-14 mb-8'>
                {markets.map((city, index) => (
                  <CityCard key={index} city={city}></CityCard>
                ))}
              </ul>
            ) : (
              <p>No markets available.</p>
            )}
          </Loading>
        </BasicContainer>
      </section>
    </>
  )
}

export default Markets
