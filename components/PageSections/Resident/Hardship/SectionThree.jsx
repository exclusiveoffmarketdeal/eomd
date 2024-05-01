import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
const SectionThree = () => {
  return (
    <>
      <div className='w-full bg-vb_blue-800 text-white py-14'>
        <BasicContainer>
          <h2 className='text-center text-3xl xl:text-4xl mb-6'>HARDSHIP RELIEF PROGRAM ELIGIBILITY</h2>
          <p className='text-sm xl:text-xl font-extralight mb-6'>
            Residents who find themselves unable to pay their balance in full due to unforeseen hardships may qualify
            for VineBrook Home's new Hardship Relief Program. To be eligible, residents must meet the criteria provided
            below and be prepared to furnish supporting documentation: 
          </p>
          <ul className='list-disc text-sm xl:text-xl font-normal leading-loose ml-8 sm:ml-10 md:ml-12 lg:ml-14 xl:ml-16 mb-6'>
            <li>You must be a current lease holder under a Exclusive Off Market Dealslease.</li>
            <li>
              You are not currently in eviction and you have less than 2 evictions with Exclusive Off Market Dealsin
              total.
            </li>
            <li>The amount of past-due rent should not exceed one month.</li>
            <li>You must not be enrolled in a current hardship program with Exclusive Off Market Deals.</li>
            <li>You must provide evidence of monthly income totaling at least three times the monthly rent.</li>
            <li>Qualifying residents must submit the proper documentation, including evidence of income.</li>
            <li>Residents can only be eligible for the program once every 12 months.</li>
          </ul>
          <p className='text-sm xl:text-xl font-extralight mb-6'>
            If your application is approved, all current lease holders will be required to sign an addendum to their
            existing lease, outlining the specific terms of the Hardship Relief Program.  
          </p>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionThree
