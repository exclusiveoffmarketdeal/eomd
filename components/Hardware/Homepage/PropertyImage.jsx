import Image from 'next/image'
import Link from 'next/link'

/**
 * Property images from Homepage.
 *
 * @returns
 */
const PropertyImage = ({ image, url, desc, gallery, status }) => {
  const cropSize = '?crop=(0,0,350,242)&cropxunits=350&cropyunits=242&width=350'
  return (
    <>
      <Link className='img-link' href={`/homes/${url}`}>
        <div className='item'>
          {status === 'Y' ? (
            <>
              {' '}
              {image !== '' && image !== undefined ? (
                <>
                  <Image
                    src={`${image}${cropSize}`}
                    alt={desc}
                    width={0}
                    height={0}
                    sizes={100}
                    className='w-full h-[230px] object-cover rounded-xl mx-auto'
                  />
                </>
              ) : (
                <>
                  {' '}
                  <Image
                    src={`/img/homepage/default.png`}
                    alt={desc}
                    width={0}
                    height={0}
                    sizes={100}
                    className='w-full h-[230px] object-cover rounded-xl mx-auto'
                  />
                  <span className='inline-block absolute left-0 opacity-7 w-3/4 md:w-3/5 rounded-r-2xl top-20 text-white bg-vb_orange-700 p-2 text-center'>
                    Photos Coming soon
                  </span>{' '}
                </>
              )}
            </>
          ) : (
            <>
              <Image
                src={image !== '' && image !== undefined ? `${image}${cropSize}` : `/img/homepage/default.png`}
                alt={desc}
                width={0}
                height={0}
                sizes={100}
                className='w-full h-[230px] object-cover rounded-xl mx-auto'
              />
              <span className='inline-block absolute left-0 opacity-7 rounded-r-2xl top-20 text-white bg-[#eca858] p-2 w-3/5 text-center'>
                Coming soon
              </span>
            </>
          )}
        </div>
      </Link>
    </>
  )
}

export default PropertyImage
