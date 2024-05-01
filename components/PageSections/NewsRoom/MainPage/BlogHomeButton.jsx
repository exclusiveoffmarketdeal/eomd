import Link from 'next/link'
import Image from 'next/image'
import arrowRightLink from '@/public/img/pages/NewsRoom/Arrow-Right-Link.png'

/**
 * Blog Home Button.
 *
 * @param {*} param0
 * @returns
 */
const BlogHomeButton = ({ classes, linkText = 'BACK' }) => {
  return (
    <>
      <div className={`${classes}`}>
        <Link
          href={'/newsroom'}
          className='flex flex-row items-center text-vb_green-500 hover:text-vb_green-400 text-2xl font-medium transition-all duration-150 ease-in-out'
        >
          <Image
            src={arrowRightLink}
            alt={'Arrow Right Link'}
            width={0}
            height={0}
            sizes={100}
            className='w-7 h-5 mr-2 rotate-180 z-0'
          />
          {linkText}
        </Link>
      </div>
    </>
  )
}

export default BlogHomeButton
