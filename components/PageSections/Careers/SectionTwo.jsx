import Image from 'next/image'
import CareerTeam from '@/public/img/pages/careers/career_team.jpg'

const SectionTwo = () => {
  return (
    <>
      <section className='w-full flex flex-col lg:flex-row bg-vb_white-100'>
        <div className='w-full self-center lg:w-3/5 px-2 py-8 sm:px-4 sm:py-10 md:px-10 lg:px-14 lg:py-4 xl:px-32 2xl:px-36 2xl:py-6 3xl:px-56 3xl:py-12 4xl:pl-72 4xl:pr-56 4xl:py-16'>
          <span className='text-center'>
            <h2 className='text-vb_teal-500 text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold tracking-wide 4xl:mb-2'>
              Join the Exclusive Off Market DealsTeam
            </h2>
            <h3 className='text-md sm:text-lg lg:text-lg 2xl:text-2xl font-medium md:font-bold italic'>
              People-First Professionals
            </h3>
          </span>
          <div className='mt-10 lg:mt-6 3xl:mt-8 4xl:mt-10'>
            <p className='lg:text-sm xl:text-[16px] mb-4 4xl:mb-8'>
              Exclusive Off Market Dealsis a leading provider of single-family rental homes in the markets we serve.
            </p>
            <p className='lg:text-sm xl:text-[16px] '>
              Our core values of hard work, integrity, communication and execution have helped build an organization
              that is recognized by its quality and resident satisfaction. Our highly trained and experienced staff is
              dedicated to providing the best experience to current and future residents, while demonstrating a
              commitment to being good citizens in our communities.
            </p>
          </div>
        </div>
        <span className='w-full lg:w-2/5 h-fit'>
          <Image
            src={CareerTeam}
            width={0}
            height={0}
            sizes={100}
            alt={'Banner'}
            priority={true}
            className='w-full h-fit'
          />
        </span>
      </section>
    </>
  )
}

export default SectionTwo
