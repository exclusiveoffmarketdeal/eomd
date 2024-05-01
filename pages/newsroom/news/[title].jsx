import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import NewsBanner from '@/components/PageSections/NewsRoom/MainPage/NewsBanner'
import AboutVB from '@/components/PageSections/NewsRoom/MainPage/AboutVB'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Loading from '@/components/Loading'
import AllNewsButton from '@/components/PageSections/NewsRoom/MainPage/LatestNews/AllNewsButton'
import BlogHomeButtton from '@/components/PageSections/NewsRoom/MainPage/BlogHomeButton'

const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
const GET_NEWS_ARTICLE = gql`
  query ${location}BlogArticles($slug: String!) {
    ${location}BlogArticles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
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
    }
  }
`

/**
 * News article.
 *
 * @returns
 */
const NewsArticle = () => {
  const router = useRouter()
  const slug = router.query.title
  const { loading, error, data } = useQuery(GET_NEWS_ARTICLE, {
    variables: { slug },
    skip: !slug, // Skip the query if slug is falsy (undefined, null, etc.)
  })
  if (error) {
    console.error('Error fetching news article:', error)
    return <div>Error fetching news article</div>
  }

  if (loading) {
    return (
      <>
        <div className='w-full flex flex-row mt-10'>
          <Loading loadingState={loading} itemLoading={'Article'}></Loading>
        </div>
      </>
    )
  } else {
    const article = location === 'beta' ? 
      data?.betaBlogArticles?.data[0]?.attributes : 
      data?.prodBlogArticles?.data[0]?.attributes
    return (
      <>
        <NewsBanner />
        <div className='w-full lg:flex lg:flex-row'>
          <div className='sticky z-50 lg:relative top-20 lg:top-0 block lg:hidden lg:w-1/3'>
            <AboutVB />
          </div>
          <div className='w-full lg:w-2/3 flex flex-col px-7 sm:pl-20 sm:pr-10 mb-10'>
            <h2 className='text-vb_blue-800 text-3xl mt-6 font-semibold mb-6 uppercase'>{article?.title}</h2>
            <h4 className='mb-6'>{article?.location}</h4>
            <ReactMarkdown>{article?.body}</ReactMarkdown>
            <div className='w-full flex flex-row justify-center items-center mt-10'>
              <BlogHomeButtton classes='w-full' />
              <AllNewsButton
                linkText={'ARTICLES'}
                classes='flex flex-row justify-end w-full'
                linkclasses='justify-end'
              ></AllNewsButton>
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

export default NewsArticle
