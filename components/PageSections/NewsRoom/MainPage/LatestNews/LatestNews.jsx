import LatestNewsArticle from './LatestNewsArticle'
import { useQuery, gql } from '@apollo/client'
import Loading from '@/components/Loading'
import AllNewsButton from './AllNewsButton'

/**
 * Latest news.
 *
 * @returns
 */
const LatestNews = () => {
  const location = process.env.NEXT_PUBLIC_STRAPI_LOCATION || 'beta'
  const PAGEQUERY = gql`
    query {
      ${location}BlogArticles(pagination: { start: 0, limit: 5 }, sort: "createdAt:desc") {
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
      }
    }
  `
  const { loading, error, data } = useQuery(PAGEQUERY)
  const articles = location === 'beta' ? 
    data?.betaBlogArticles?.data : 
    data?.prodBlogArticles?.data

  if (loading) {
    return (
      <>
        <div className='w-full flex flex-row my-10'>
          <Loading loadingState={loading} itemLoading={'Latest News'}></Loading>
        </div>
      </>
    )
  } else {
    return (
      <>
        <section className='w-full h-fit bg-vb_white-100 py-10'>
          <h2 className='text-vb_blue-800 text-3xl font-semibold mb-6 pl-4 md:pl-20'>LATEST NEWS</h2>
          <ul className='w-11/12 mb-6'>
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
          <AllNewsButton classes={'ml-4 md:ml-20'} />
        </section>
      </>
    )
  }
}

export default LatestNews
