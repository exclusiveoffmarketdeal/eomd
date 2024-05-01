import Head from 'next/head'
import SectionOne from '@/components/PageSections/Homepage/SectionOne'
import SectionTwo from '@/components/PageSections/Homepage/SectionTwo'
import SectionThree from '@/components/PageSections/Homepage/SectionThree'
import SectionFour from '@/components/PageSections/Homepage/SectionFour'
import SectionFive from '@/components/PageSections/Homepage/SectionFive'
import ApiClient from '@/utils/ApiClient'
import Loading from '@/components/Loading'
import { useState, useEffect } from 'react'

/**
 * Website Homepage.
 *
 * @returns
 */
const Home = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState()
  const [featureHomes, setFeatureHomes] = useState()

  useEffect(() => {
    const initialHomepageData = async () => {
      const data = await ApiClient.getRequest('/homepage')
      setData(data)
      setCities(data.cities)
      setFeatureHomes(data.featureHomes)
      setLoading(false)
    }
    initialHomepageData()
  }, [])
  return (
    <>
      <Head>
        <title>Houses & Properties For Rent By Owner In United States | Exclusive Off Market Deals</title>
        <meta
          name='description'
          content='Houses & Properties For Rent By Owner In United States | Exclusive Off Market Deals'
        />
      </Head>

      <SectionOne></SectionOne>
      <Loading loadingState={loading} itemLoading={'Feature Homes'}>
        <SectionTwo featureHomes={featureHomes}></SectionTwo>
      </Loading>
      <SectionThree></SectionThree>
      <Loading loadingState={loading} itemLoading={'Market Areas'}>
        <SectionFour cities={cities}></SectionFour>
      </Loading>
      <SectionFive></SectionFive>
    </>
  )
}

export default Home
