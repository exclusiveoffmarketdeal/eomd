import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import LinkBtn from '@/components/Hardware/LinkBtn'

const SectionFour = () => {
  let careersFooter = `bg-[url('/img/pages/careers/Career_Footer.png')]`
  return (
    <>
      <section
        className={`w-full h-[300px] flex justify-center items-center ${careersFooter} bg-no-repeat bg-cover flex justify-center content-center`}
      >
        <BasicContainer>
          <span className='flex flex-col justify-center items-center'>
            <h4 className='text-lg md:text-2xl xl:text-3xl text-vb_blue-800 text-center font-medium sm:font-extrabold 2xl:font-black leading-snug mb-12 sm:mb-14 lg:mb-12'>
              START YOUR NEW CAREER WITH Exclusive Off Market DealsTODAY!
            </h4>
            <LinkBtn
              address={
                'https://recruiting.ultipro.com/VIN1007VNB/JobBoard/0460746d-ef85-4c7a-b43c-e13eed1e48cf/?q=&o=postedDateDesc'
              }
              newTab={'yes'}
              bgColor={'bg-vb_green-500'}
              bgColorHover={'hover:bg-vb_green-400'}
            >
              SEARCH AVAILABLE JOBS
            </LinkBtn>
          </span>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionFour
