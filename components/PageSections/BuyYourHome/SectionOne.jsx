import Image from 'next/image'
import LinkBtn from '@/components/Hardware/LinkBtn'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionOne = () => {
  let banner = `bg-[url('/img/pages/Buy-Your-Home/Buy-Your-Home-Banner.png')]`
  return (
    <>
      <section>
        <div className={`relative w-full h-[175px] sm:h-[250px] md:h-[300px] lg:h-[400px] ${banner} bg-no-repeat xl:mb-20 bg-contain xl:bg-cover`}>
          <BasicContainer classnames='flex justify-center'>
            <div className='absolute bottom-0 xl:bottom-[-75px] [&>a]:uppercase'>
              <LinkBtn address={'/buy-your-home/application'}>Request More Information</LinkBtn>
            </div>
          </BasicContainer>
        </div>
      </section>
    </>
  )
}

export default SectionOne
