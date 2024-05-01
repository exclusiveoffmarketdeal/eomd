import Link from 'next/link'
import Image from 'next/image'
import arrowRightLink from '@/public/img/pages/NewsRoom/Arrow-Right-Link.png'

/**
 * All news button.
 *
 * @param {*} param0
 * @returns
 */
const AllNewsButton = ({ classes, linkclasses = '', linkText = 'SEE ALL NEWS' }) => {
  return (
    <>
      <div className={classes}>
        <Link
          href={'/newsroom/news'}
          className={
            linkclasses +
            ' flex flex-row items-center text-vb_green-500 hover:text-vb_green-400 text-2xl font-medium transition-all duration-150 ease-in-out'
          }
        >
          {linkText}
          <Image
            src={arrowRightLink}
            alt={'Arrow Right Link'}
            width={0}
            height={0}
            sizes={100}
            className='w-7 h-5 ml-2'
          />
        </Link>
      </div>
    </>
  )
}

export default AllNewsButton
