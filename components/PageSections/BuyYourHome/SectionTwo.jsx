import Image from 'next/image'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import icon1 from '@/public/img/pages/Buy-Your-Home/Buy-Your-Home-Icon-1.png'
import icon2 from '@/public/img/pages/Buy-Your-Home/Buy-Your-Home-Icon-2.png'
import icon3 from '@/public/img/pages/Buy-Your-Home/Buy-Your-Home-Icon-3.png'

const SectionTwo = () => {
  return (
    <>
      <section className='py-8'>
        <BasicContainer>
          <span className='flex flex-row justify-start items-center mb-10'>
            <Image src={icon1} alt={'Buy Your Home Icon 1'} width={0} height={0} sizes={100} className='w-20 h-20' />
            <p className='ml-8'>
              As a valued member of our community, we are offering a significant opportunity for you to acquire your
              current residence. This does not affect your existing lease agreement obligations in any way.
            </p>
          </span>
          <span className='flex flex-row justify-start items-center mb-10'>
            <Image src={icon2} alt={'Buy Your Home Icon 2'} width={0} height={0} sizes={100} className='w-20 h-20' />
            <p className='ml-8'>
              In the event you decide not to participate, or if an agreement cannot be reached, rest assured that
              Exclusive Off Market Dealshas absolutely no intention of selling your home before the conclusion of your
              tenancy.
            </p>
          </span>
          <span className='flex flex-row justify-start items-center'>
            <Image src={icon3} alt={'Buy Your Home Icon 3'} width={0} height={0} sizes={100} className='w-20 h-20' />
            <p className='ml-8'>
              Should you have any questions or wish to explore this opportunity further, do not hesitate to contact our
              dedicated team.
            </p>
          </span>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionTwo
