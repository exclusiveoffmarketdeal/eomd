import Image from 'next/image'
import Link from 'next/link'
import highlightOne from '@/public/img/pages/NewsRoom/Highlight-1.png'
import highlightTwo from '@/public/img/pages/NewsRoom/Highlight-2.png'
import highlightThree from '@/public/img/pages/NewsRoom/Highlight-3.png'
import { useQuery, gql } from '@apollo/client'
import Loading from '@/components/Loading'
import arrowRightLink from '@/public/img/pages/NewsRoom/Arrow-Right.png'

const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
const QUERY = gql`
  query {
    ${location}BlogFavoriteArticles(sort: "order") {
      data {
        attributes {
          slug
          order
          BackgroundImage {
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
const Highlights = () => {
  const { loading, error, data } = useQuery(QUERY)
  const slugAdress = '/newsroom/news/'
  if (error) {
    console.error('Error fetching favorites article:', error)
    return <></>
  }

  if (loading) {
    return (
      <>
        <div className='w-full flex flex-row my-10'>
          <Loading loadingState={loading} itemLoading={'Highlights'}></Loading>
        </div>
      </>
    )
  } else {
    const favorites = location === 'beta' ? 
      data?.betaBlogFavoriteArticles?.data : 
      data?.prodBlogFavoriteArticles?.data
    return (
      <>
        <section className='w-full h-fit bg-vb_teal-500'>
          <div className='h-fit grid grid-cols-2'>
            {favorites?.map((favorite, i) => {
              return (
                <Link
                  key={i}
                  href={`${slugAdress}${favorite?.attributes?.slug}`}
                  className={
                    favorite.attributes.order === 1
                      ? 'col-span-2 relative [&>div]:hover:bg-opacity-20 max-h-96'
                      : 'col-span-1 relative [&>div]:hover:bg-opacity-20'
                  }
                >
                  <Image
                    src={favorite?.attributes?.BackgroundImage?.data?.attributes?.url}
                    alt={'Highlight One'}
                    width={0}
                    height={0}
                    sizes={100}
                    priority={true}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-0 flex flex-row justify-between w-full h-full bg-white bg-opacity-0 object-cover transition-all duration-150 ease-in-out'></div>
                  <Link
                    href={`${slugAdress}${favorite?.attributes?.slug}`}
                    className={
                      'absolute bottom-4 lg:bottom-10 flex w-42 sm:w-64 md:w-80 h-6 sm:h-10 bg-vb_green-500 hover:bg-vb_green-400 transition text-white text-[10px] sm:text-lg md:text-2xl ml-2 sm:ml-4 px-2 py-1 rounded-md'
                    }
                  >
                    <Image
                      src={arrowRightLink}
                      alt={'Arrow Right Link'}
                      width={0}
                      height={0}
                      sizes={100}
                      className='self-center w-4 sm:w-6 md:w-10 h-4 sm:h-6 md:h-10 mr-2'
                    />
                    VIEW PRESS RELEASE
                  </Link>
                </Link>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}

export default Highlights
