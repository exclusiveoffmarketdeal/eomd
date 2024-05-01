import Image from 'next/image'
import { useQuery, gql } from '@apollo/client'
import Loading from '@/components/Loading'

const NewsBanner = () => {
  const { loading, error, data } = useQuery(BANNERQUERY)
  const newsBanner = location === 'beta' ? data?.betaBlogBanner?.data : data?.prodBlogBanner?.data

  if (loading) {
    return (
      <>
        <div className='w-full flex flex-row my-10'>
          <Loading loadingState={loading} itemLoading={'News Banner'}></Loading>
        </div>
      </>
    )
  } else {
    return (
      <>
        <section className='w-full'>
          <Image
            src={newsBanner?.attributes?.banner?.data?.attributes?.url}
            alt={'News Banner'}
            width={0}
            height={0}
            sizes={100}
            priority={true}
            className='w-full h-fit'
          />
        </section>
      </>
    )
  }
}

const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
const BANNERQUERY = gql`
    query {
      ${location}BlogBanner{
        data {
          attributes {
            banner{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
  `

export default NewsBanner
