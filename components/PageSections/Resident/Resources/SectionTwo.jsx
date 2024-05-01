import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionTwo = () => {
  return (
    <>
      <section className='bg-vb_gray-500 w-full'>
        <BasicContainer>
          <div className='py-8'>
            <p className='text-white text-center text-xl leading-relaxed tracking-wider'>
              At Exclusive Off Market Dealswe are always looking for ways to help our residents stay in their homes. The
              following is a list of Resident Resources that we have compiled to help our residents find the resources
              they may need to help them during a financial hardship. We do not endorse or provide any advice on which
              services are best to work with or might be right for any individual situation. If you see a listing on
              this page that is no longer valuable or if you have a resource that is not listed here that you think
              would be valuable, please contact us at:{' '}
              <a
                href='mailto:customerservice@vinebrookhomes.com'
                className='text-white hover:text-vb_green-400 break-words underline transition-all duration-150 ease-in-out'
              >
                customerservice@vinebrookhomes.com
              </a>
              .
            </p>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionTwo
