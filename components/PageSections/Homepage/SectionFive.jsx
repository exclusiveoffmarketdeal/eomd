import Image from 'next/image'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import FeedbackCard from '@/components/Hardware/Homepage/FeedbackCard'

/**
 * Section of Residents Feedbacks.
 *
 * @returns
 */
const SectionFive = () => {
  return (
    <>
      <section className='w-full py-8 sm:py-12 bg-center bg-vb_green-300 bg-[url("/img/homepage/pattern.svg")]'>
        <BasicContainer>
          <div className='text-center'>
            <h3 className='text-xl sm:text-4xl text-white tracking-widest font-extrabold mb-2 md:mb-16'>
              WHAT OUR RESIDENTS ARE SAYING
            </h3>
          </div>
        </BasicContainer>
        <ul className='px-0 3xl:px-20 4xl:px-56'>
          <Swiper
            id='feedback-swiper'
            modules={[Navigation]}
            navigation
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.25': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              '@1.25': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              '@1.50': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            style={{
              '--swiper-navigation-size': '20px',
            }}
          >
            <SwiperSlide>
              <FeedbackCard
                text='This company has been so easy to work with. Everyone has been so responsive and made the renting experience exciting. so happy to be in my Vinebrook home!'
                name='Joe'
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard
                text='Vinebrook has made my rental experience seamless! Super informative and laid back!'
                name='Amanda'
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeedbackCard
                text='I am just blown away at the customer service and respect given by this company. Five Star!!!!'
                name='Sarah'
              />
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>
    </>
  )
}

export default SectionFive
