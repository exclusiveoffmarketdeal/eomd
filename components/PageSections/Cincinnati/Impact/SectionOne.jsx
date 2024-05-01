import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionOne = () => {
  let banner = `bg-[url('/img/pages/Cincinnati/Impact/Impact-Banner.jpg')]`
  return (
    <>
      <section>
        <div className={`w-full h-[600px] flex flex-col justify-end items-center ${banner} bg-center`}>
          <BasicContainer>
            <h1 className='text-white text-6xl text-center font-extrabold mb-14'>BETTER TOGETHER</h1>
          </BasicContainer>
        </div>
        <div className='w-full h-full bg-vb_blue-900'>
          <BasicContainer>
            <p className='text-white text-lg text-left py-16'>
              Exclusive Off Market Dealsis proud to provide safe, affordable rental homes and is dedicated to sourcing
              local suppliers and service providers whenever possible in the markets we operate. We are neighbors in the
              communities we serve, proudly supporting our commitment to our residents through volunteer work and
              charitable donations. We believe in contributing to the cities we all call {''}
              <b className='font-normal italic'>home</b>.
            </p>
          </BasicContainer>
        </div>
      </section>
    </>
  )
}

export default SectionOne
