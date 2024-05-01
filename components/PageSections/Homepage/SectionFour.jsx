import Link from 'next/link'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import CityCard from '../../Hardware/Homepage/CityCard'

/**
 * Section Market Areas of Homepage.
 *
 * @returns
 */
const SectionFour = (data) => {
  return (
    <>
      <section className='w-full bg-vb_white-500'>
        <BasicContainer>
          <div className='text-center mt-16'>
            <h3 className='text-4xl text-vb_blue-800 tracking-widest font-extrabold mb-16'>OUR MARKET AREAS</h3>
          </div>
          {data.cities && Array.isArray(data.cities) ? (
            <ul className='w-fit grid grid-cols-2 2xl:grid-cols-4 gap-8 mb-8 mx-auto'>
              {data.cities.map((city, index) => (
                <CityCard key={index} city={city}></CityCard>
              ))}
            </ul>
          ) : (
            <p>No cities available.</p>
          )}
          <div className='text-right mb-16'>
            <Link className='text-vb_green-400 text-lg font-bold tracking-wider' href={'/markets'}>
              More Cities
            </Link>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionFour
