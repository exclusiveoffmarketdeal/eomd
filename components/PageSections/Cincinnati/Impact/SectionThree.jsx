import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Image from 'next/image'

const SectionThree = () => {
  return (
    <>
      <section>
        <span className='flex justify-start mb-8'>
          <Image
            src={'/img/pages/Cincinnati/Impact/Impact-21M.jpg'}
            alt={''}
            width={0}
            height={0}
            sizes={100}
            className='w-auto md:w-3/4 lg:w-3/5 xl:w-1/2 3xl:w-2/5 h-auto pr-4 sm:pr-8 md:pr-0'
          />
        </span>
        <BasicContainer>
          <h6 className='text-xl font-bold mb-4'>
            VineBrook purchases older homes and invests significantly in updating them and maintaining them.
          </h6>
          <p className='mb-12'>
            VineBrook purchases older homes, the majority of which are purchased from other investors, which often
            require extensive renovation. The median year built for homes owned by VineBrook is 1957. From 2019-2022,
            VineBrook spent $27,000 on average to renovate systems, structure, and interiors on its homes. In 2021-22,
            VineBrook invested $21.1 million on rehabilitation, repairs, and maintenance locally. Since inception
            VineBrook has invested over $62.5 million in rehabilitation, repairs, and maintenance on their local housing
            stock. From 2017-2022 VineBrook has averaged 0.2 code violations per property per year, 99.6% of which are
            labeled as minor.
          </p>
        </BasicContainer>
        <span className='flex justify-end mb-8'>
          <Image
            src={'/img/pages/Cincinnati/Impact/Impact-400M.jpg'}
            alt={''}
            width={0}
            height={0}
            sizes={100}
            className='w-auto md:w-3/4 lg:w-3/5 xl:w-1/2 3xl:w-2/5 h-auto pl-4 sm:pl-8 md:pl-0'
          />
        </span>
      </section>
    </>
  )
}

export default SectionThree
