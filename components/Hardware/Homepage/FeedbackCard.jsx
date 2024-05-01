import Image from 'next/image'

/**
 * Feedback Card from Homepage.
 *
 * @returns
 */
const FeedbackCard = ({ text, name }) => {
  return (
    <>
      <li className='w-fit h-80 bg-white rounded-3xl shadow-lg shadow-vb_gray-400 m-5'>
        <div className='item'>
          <div className='relative  py-2 px-6 m-2'>
            <div className='flex pb-2 justify-center'>
              <Image src='/img/homepage/star.svg' className='p-1' alt='' width={45} height={45} />
              <Image src='/img/homepage/star.svg' className='p-1' alt='' width={45} height={45} />
              <Image src='/img/homepage/star.svg' className='p-1' alt='' width={45} height={45} />
              <Image src='/img/homepage/star.svg' className='p-1' alt='' width={45} height={45} />
              <Image src='/img/homepage/star.svg' className='p-1' alt='' width={45} height={45} />
            </div>
            <div
              className='inline-flex items-center h-48'
              style={{
                background:
                  'url("/img/homepage/quote_right.png") no-repeat right bottom, url("/img/homepage/quote_left.png") no-repeat left top',
              }}
            >
              <p>{text}</p>
            </div>
            <div className='text-center border-t pt-4 border-vb_gray-500'>
              <h5 className='text-xl text-vb_gray-500 text-left sm:text-center font-normal sm:font-bold'>{name}</h5>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default FeedbackCard
