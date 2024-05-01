import Head from 'next/head'
import { useQuery, gql } from '@apollo/client'
import NewsBanner from '@/components/PageSections/NewsRoom/MainPage/NewsBanner'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import AboutVB from '@/components/PageSections/NewsRoom/MainPage/AboutVB'
import DownloadAllImagesButton from '@/components/Hardware/Homepage/DownloadAllImagesButton'
import BlogHomeButtton from '@/components/PageSections/NewsRoom/MainPage/BlogHomeButton'
import VBGallery from '@/components/Hardware/VBGallery'

const HomesInterior = () => {
  const { loading, error, data } = useQuery(IMAGEQUERY)
  const images =
    location === 'beta'
      ? data?.betaPresskitPage?.data?.attributes?.homes_interior_images?.data
      : data?.prodPresskitPage?.data?.attributes?.homes_interior_images?.data
  return (
    <>
      <Head>
        <title>Homes Interior</title>
        <meta name='description' content='Homes Interior | Exclusive Off Market Deals' />
      </Head>

      <div className=''>
        <NewsBanner />
        <div className='flex flex-col lg:flex-row justify-center'>
          <div className='sticky lg:relative top-20 lg:top-0 block lg:hidden lg:w-1/3 z-50'>
            <AboutVB />
          </div>
          <BasicContainer classnames={'xl:px-16 2xl:px-32 3xl:px-32 4xl:px-32 w-full lg:w-2/3'}>
            <div className='flex flex-col justify-center items-center mt-8 mb-4'>
              <div className='flex flex-row justify-between items-center my-4 w-full'>
                <h1 className='text-3xl lg:text-4xl text-vb_blue-800 font-bold mb-8 lg:mb-4'>Homes Interior</h1>
                {images && <DownloadAllImagesButton images={images} />}
              </div>
              {!loading && (
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mb-16'>
                  <VBGallery images={images} />
                </ul>
              )}
            </div>
            <BlogHomeButtton />
          </BasicContainer>
          <div className={'hidden lg:block w-1/3'}>
            <AboutVB />
          </div>
        </div>
      </div>
    </>
  )
}

const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
const IMAGEQUERY = gql`
  query {
    ${location}PresskitPage {
      data {
        attributes {
          homes_interior_images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default HomesInterior
