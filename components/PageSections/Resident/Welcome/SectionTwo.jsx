import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionTwo = () => {
  return (
    <>
      <section className='my-10 sm:my-16 md:my-20 w-full'>
        <BasicContainer>
          <h2 className='text-3xl sm:text-5xl text-center lg:tracking-widest font-bold'>WELCOME NEW RESIDENT</h2>
          <hr className='my-2' />
          <p className='text-md sm:text-lg text-center'>
            From all of us at Exclusive Off Market Dealswe are excited to welcome you to our rental home community and
            introduce ourselves as your new property management company. Rest assured, your residency is safe, and we
            want you to stay.
          </p>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionTwo
