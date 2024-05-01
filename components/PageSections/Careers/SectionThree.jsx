import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import CareerIconRow from '@/public/img/pages/careers/Career_Icon_Row.png'

const SectionThree = () => {
  return (
    <>
      <section className='mt-8 sm:mt-6 xl:mt-10 text-center'>
        <BasicContainer>
          <h2 className='text-vb_orange-700 text-2xl md:text-3xl 2xl:text-4xl font-medium'>
            A PLACE TO BEGIN AND GROW YOUR CAREER
          </h2>
          <p className='w-full sm:w-3/4 lg:w-full xl:w-4/5 2xl:w-3/4 text-md mx-auto mt-2 sm:mt-4'>
            When you join Exclusive Off Market Deals, you join a diverse and growing team of more than 700 talented
            professionals, who are changing the property management industry.
          </p>
          <h3 className='w-full sm:w-3/4 lg:w-full xl:w-4/5 2xl:w-full text-vb_teal-500 text-lg 2xl:text-2xl font-semibold tracking-wider mx-auto mt-4 sm:mt-10'>
            In support and gratitude of our team members, we are proud to offer our employees
          </h3>
          <Image
            className='mt-6 sm:mt-12'
            src={CareerIconRow}
            width={0}
            height={0}
            sizes={100}
            alt={'Banner'}
            priority={true}
          />
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionThree
