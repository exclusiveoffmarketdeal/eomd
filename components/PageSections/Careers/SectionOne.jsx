import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionOne = () => {
  let careersBanner = `bg-[url('/img/pages/careers/careers-banner.jpg')]`
  return (
    <>
      <section
        className={`flex justify-center items-end w-full h-[400px] ${careersBanner} bg-cover bg-center bg-no-repeat py-4`}
      >
        <BasicContainer>
          <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center font-bold tracking-wide'>
            REAL CAREERS FOR REAL LIFE
          </h1>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionOne
