import { useQuery, gql } from '@apollo/client'
import arrowRightLink from '@/public/img/pages/NewsRoom/Arrow-Right-Link.png'
import LatestNewsArticle from '@/components/PageSections/NewsRoom/MainPage/LatestNews/LatestNewsArticle'
import Image from 'next/image'
import AboutVB from '@/components/PageSections/NewsRoom/MainPage/AboutVB'
import BlogHomeButtton from '@/components/PageSections/NewsRoom/MainPage/BlogHomeButton'
import Loading from '@/components/Loading'
import { useState } from 'react'

const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
const QUERY = gql`
  query ${location}BlogArticles($limit: Int!, $page: Int!) {
    ${location}BlogArticles(pagination: { page: $page, pageSize: $limit }, sort: "createdAt:desc") {
      data {
        attributes {
          slug
          title
          body
          location
          cover_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`
const PAGE_SIZE = 10
/**
 * Articles list.
 *
 * @returns
 */
const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      limit: PAGE_SIZE,
      page: currentPage,
    },
    skip: !currentPage, // Skip the query if slug is falsy (undefined, null, etc.)
  })
  if (error) {
    console.error('Error fetching news article:', error)
    return <div>Error fetching news article</div>
  }

  if (loading) {
    return (
      <>
        <div className='w-full flex flex-row mt-10'>
          <Loading loadingState={loading} itemLoading={'Articles'}></Loading>
        </div>
      </>
    )
  } else {
    const articles = location === 'beta' ? 
      data?.betaBlogArticles?.data : 
      data?.prodBlogArticles?.data
    const totalArticles = location === 'beta' ? 
      data?.betaBlogArticles?.meta?.pagination?.total : 
      data?.prodBlogArticles?.meta?.pagination?.total
    return (
      <>
        <div className='w-full lg:flex lg:flex-row'>
          <div className='sticky lg:relative top-20 lg:top-0 block lg:hidden lg:w-1/3'>
            <AboutVB />
          </div>
          <div className='w-full lg:w-2/3 flex flex-col pr-10 my-10'>
            <ul className='w-full lg:w-11/12 mb-6'>
              {articles?.map((article, i) => {
                return (
                  <LatestNewsArticle
                    key={i}
                    articleSlug={article?.attributes?.slug}
                    articleImg={article?.attributes?.cover_image?.data?.attributes?.url}
                    articleTitle={article?.attributes?.title}
                    articleLocation={article?.attributes?.location}
                  />
                )
              })}
            </ul>
            <div className='w-full flex flex-row justify-between'>
              <BlogHomeButtton classes='ml-8' />
              {totalArticles > PAGE_SIZE && (
                <div className='flex flex-row'>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='flex ml-10 flex-row items-center text-vb_green-500 disabled:text-[#CCD4D8] hover:text-vb_green-400 text-2xl font-medium transition-all duration-150 ease-in-out'
                  >
                    PREVIOUS
                    <span className='mx-3'>|</span>
                  </button>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage * PAGE_SIZE > totalArticles - PAGE_SIZE}
                    className='flex flex-row items-center text-vb_green-500 disabled:text-[#CCD4D8] hover:text-vb_green-400 text-2xl font-medium transition-all duration-150 ease-in-out'
                  >
                    NEXT
                    {currentPage * PAGE_SIZE <= totalArticles - PAGE_SIZE && (
                      <Image
                        src={arrowRightLink}
                        alt={'Arrow Right Link'}
                        width={0}
                        height={0}
                        sizes={100}
                        className={'w-7 h-5 ml-2'}
                      />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={'hidden lg:block w-1/3'}>
            <AboutVB />
          </div>
        </div>
      </>
    )
  }
}

export default Articles
