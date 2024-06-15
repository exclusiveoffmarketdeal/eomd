import Head from 'next/head'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import LeftNav from '@/components/PageSections/Admin/LeftNav'
import PropertyTable from '@/components/PageSections/Admin/PropertyTable'
import ApiClient from '@/utils/ApiClient'
import { useEffect, useState } from 'react'

const Properties = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const initialPropertiesData = async () => {
      try {
        const data = await ApiClient.getRequest('/properties')
        console.log('Fetched data:', data)
        setProperties(data)
      } catch (error) {
        console.error('Error fetching properties:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    initialPropertiesData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading properties</p>

  return (
    <>
      <div className='overflow-hidden'>
        <Head>
          <title>Admin</title>
        </Head>
        <div className='flex'>
          <div className='w-1/4'>
            <LeftNav />
          </div>
          <div className='w-3/4'>
            <section>
              <PropertyTable properties={properties} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Properties
