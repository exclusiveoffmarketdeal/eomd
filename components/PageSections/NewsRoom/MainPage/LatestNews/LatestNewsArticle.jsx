import Link from 'next/link'
import Image from 'next/image'
import placeholderImg from '@/public/img/pages/NewsRoom/Placeholder-Img.png'
import arrowRightIcon from '@/public/img/pages/NewsRoom/Arrow-Right-Icon.png'

const LatestNewsArticle = ({
  articleImg = placeholderImg,
  articleSlug = 'title-of-press',
  articleImgAlt = 'Placeholder Img',
  articleTitle = 'Title of Press',
  articleLocation = 'Location of Press Release',
  articleLink = `/newsroom/news/${articleSlug}`,
}) => {
  return (
    <>
      <li className='my-2 [&>a]:hover:bg-vb_blue-600'>
        <Link
          href={articleLink}
          className='flex flex-row justify-between items-center bg-vb_blue-800 pl-4 md:pl-20 pr-4 py-4 rounded-r-full transition-all duration-150 ease-in-out'
        >
          <div className='flex flex-row items-center'>
            <Image
              src={articleImg}
              alt={articleImgAlt}
              width={0}
              height={0}
              sizes={100}
              className='w-16 lg:w-20 h-16 lg:h-20 mr-4 hidden sm:block object-cover rounded-xl'
            />
            <span className='flex flex-col justify-around h-full text-white'>
              <p className='text-sm sm:text-lg font-semibold my-1 md:my-2'>{articleTitle}</p>
              <p className='w-48 text-xs font-light my-1 md:my-2 truncate'>{articleLocation}</p>
            </span>
          </div>
          <span className='w-[20%] sm:w-[12%] lg:w-[16%] xl:w-[12%] 2xl:w-[10%] 4xl:w-[8%]'>
            <Image
              src={arrowRightIcon}
              alt={'Arrow Right'}
              width={0}
              height={0}
              sizes={100}
              className='w-full h-full'
            />
          </span>
        </Link>
      </li>
    </>
  )
}

export default LatestNewsArticle
