import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionTwo = () => {
  return (
    <>
      <div className='mt-4 sm:mt-16'>
        <BasicContainer>
          <h2 className='text-vb_blue-800 text-3xl sm:text-4xl lg:text-5xl text-center font-black leading-snug sm:leading-none'>
            Exclusive Off Market DealsIS PARTNERED WITH OPERATION HOPE
          </h2>
          <div className='w-[90%] mx-auto my-8 px-4'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center font-light leading-snug sm:leading-none mb-6'>
              OFFERING FINANCIAL LITERACY & BUDGETING SERVICES TO OUR RESIDENTS
            </h3>
            <hr className='border-1 border-vb_gray-100' />
          </div>
          <p className='text-xl sm:text-2xl font-light mb-4'>
            The Exclusive Off Market Dealscommunity uplift program through our partnership with Operation HOPE strives
            to expand our communities economic opportunities and help provide financial well being through coaches and
            services to our residents.
          </p>
          <p className='text-xl sm:text-2xl font-light'>
            Operation HOPE is a nonprofit organization working to equip people with the knowledge and tools to create a
            secure financial future. Their focus is financial dignity and inclusion. They equip young people and adults
            with the financial tools and education to secure a better future-coaching them through their personal
            aspirations and life’s challenges, and facilitating their journey to financial independence.
          </p>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionTwo
