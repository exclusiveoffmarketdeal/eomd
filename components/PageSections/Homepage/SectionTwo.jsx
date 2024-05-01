import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import HomeCard from '@/components/Hardware/Homepage/HomeCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

/**
 * Section of Feature Homes.
 * @param {*} data
 * @returns
 */
const SectionTwo = (data) => {
  return (
    <>
      <section className='bg-vb_white w-full py-12 md:pb-36 md:pt-24 bg-[url("/img/homepage/pattern.svg")] bg-repeat bg-center'>
        <BasicContainer>
          <div className='text-center'>
            <h3 className='text-5xl text-vb_blue-800 font-extrabold mb-16'>EXPLORE OUR FEATURED HOMES</h3>
          </div>
        </BasicContainer>
        {data.featureHomes && Array.isArray(data.featureHomes) ? (
          <ul>
            <Swiper
              id='feature-homes-swiper'
              spaceBetween={20}
              modules={[Navigation]}
              navigation
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.50': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '@1.25': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                '@1.50': {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              style={{
                padding: '0 2rem',
                '--swiper-navigation-size': '20px',
                height: 'auto',
              }}
            >
              {data.featureHomes.map((home, index) => (
                <SwiperSlide key={index} style={{ marginBottom: '1rem' }}>
                  <HomeCard home={home}></HomeCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        ) : (
          <p>No Feature Homes available.</p>
        )}
      </section>
    </>
  )
}

export default SectionTwo
