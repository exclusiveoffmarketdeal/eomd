import Image from 'next/image'
import Link from 'next/link'

/**
 * City card.
 *
 * @returns
 */
const CityCard = (data, key) => {
  const city = data.city
  return (
    <>
      <li
        id={key}
        className='w-full h-full relative bg-[#eeeeee40] rounded-xl sm:rounded-2xl p-2 md:p-4 shadow-md hover:shadow-lg hover:shadow-vb_gray-400 hover:cursor-pointer transition duration-300 ease-in-out max-w-[12rem] md:max-w-xs max-h-32 md:max-h-64 [&>div>a>div]:hover:from-transparent'
      >
        <div className='relative'>
          <Link href={`/search?keywords=${city.city}&type=Market&value=Market`}>
            <Image
              src={`/img/cities/${city.urlKey}.jpg`}
              alt='Cities Image'
              className='w-full h-28 md:h-56 mx-auto rounded-xl sm:rounded-2xl'
              width={0}
              height={0}
              sizes={100}
              priority={true}
            />
          </Link>
          <Link href={`/search?keywords=${city.city}&type=Market&value=Market`}>
            <div className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-2 lg:p-4 text-white rounded-xl sm:rounded-2xl bg-gradient-to-t from-vb_gray-500 from-5% via-transparent via-50% to-transparent transition-all duration-300 ease-in-out'>
              <h5 className='font-bold text-base md:text-2xl'>{city.city}</h5>
              <h6 className='text-sm md:text-base'>{`${city.ct}+ Properties`}</h6>
            </div>
          </Link>
        </div>
      </li>
    </>
  )
}

export default CityCard
