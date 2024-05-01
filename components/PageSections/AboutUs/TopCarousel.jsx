import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import CommunityIntegrityImg from '@/public/img/pages/aboutus/community-integrity.jpg'
import ExperienceImg from '@/public/img/pages/aboutus/experience-stability.jpg'
import MaintenanceServiceImg from '@/public/img/pages/aboutus/maintenance-service.jpg'
import VarietyValueImg from '@/public/img/pages/aboutus/variety-value.jpg'

const TopCarousel = () => {
  return (
    <>
      <Swiper
        id='aboutUs-swiper'
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className='mySwiper w-screen h-full'
        style={{
          '--swiper-pagination-color': '#869791',
          '--swiper-pagination-bullet-inactive-color': '#eeeeee',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '10px',
          '--swiper-pagination-bullet-horizontal-gap': '7px',
        }}
      >
        <SwiperSlide>
          <Image
            className='w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover'
            alt='Variety Value'
            src={VarietyValueImg}
            width={0}
            height={0}
            size={100}
            priority={true}
          />
          <h1 className='absolute top-1/3 w-full text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-8 uppercase opacity-90'>
            VARIETY & VALUE
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover'
            alt='Community Integrity'
            src={CommunityIntegrityImg}
            width={0}
            height={0}
            size={100}
            priority={true}
          />
          <h1 className='absolute top-1/3 w-full text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-8 uppercase opacity-90'>
            COMMUNITY & INTEGRITY
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover'
            alt='Maintenance Service'
            src={MaintenanceServiceImg}
            width={0}
            height={0}
            size={100}
            priority={true}
          />
          <h1 className='absolute top-1/3 w-full text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-8 uppercase opacity-90'>
            MAINTENANCE & SERVICE
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover'
            alt='Experience'
            src={ExperienceImg}
            width={0}
            height={0}
            size={100}
            priority={true}
          />
          <h1 className='absolute top-1/3 w-full text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-8 uppercase opacity-90'>
            EXPERIENCE & STABILITY
          </h1>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default TopCarousel
