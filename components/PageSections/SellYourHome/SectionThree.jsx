import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'
import house from '../../../public/img/pages/Sell-Your-Home/House-Sell-Your-Home.png'
import SectionThreeList from './SectionThreeList'

const SectionThree = () => {
  return (
    <>
      <div className='w-full bg-vb_white-500 mb-20'>
        <BasicContainer>
          <h3 className='text-3xl lg:text-4xl font-thin lg:tracking-wider my-8'>VINEBROOK INVESTMENT CRITERIA</h3>
          <div className='flex flex-col lg:flex-row justify-center lg:mb-8'>
            <ul className='w-full lg:w-1/2 mb-10 lg:mb-0'>
              <SectionThreeList bold={'Strategy:'} normal={'Rental'} />
              <SectionThreeList bold={'Type:'} normal={'Single Family, Duplex'} />
              <SectionThreeList bold={'Occupied/Vacant:'} normal={'We buy them both!'} />
              <SectionThreeList bold={'ARV:'} normal={'$90k-$200k'} />
              <SectionThreeList bold={'Rent:'} normal={'$850+'} />
              <SectionThreeList bold={'Beds:'} normal={'2+'} />
              <SectionThreeList bold={'Baths:'} normal={'1+'} />
              <SectionThreeList bold={'Square Feet:'} normal={'800+'} />
              <SectionThreeList bold={'Year Built:'} normal={'1950+'} />
              <SectionThreeList bold={'Flood:'} normal={'No flood zones'} />
              <SectionThreeList bold={'W&S:'} normal={'No septic/well'} />
            </ul>
            <span className='w-full lg:w-1/2 lg:h-1/2 lg:flex lg:flex-row lg:justify-center'>
              <Image src={house} alt='house' width={0} height={0} sizes={100} className='w-full' />
            </span>
          </div>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionThree
