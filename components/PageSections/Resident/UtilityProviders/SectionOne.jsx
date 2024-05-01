import banner from '@/public/img/pages/Resident/UtilityProviders/Utility-Providers-Banner.png'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <>
      <section className='flex flex-col items-center w-full'>
        <Image src={banner} alt='Banner' width={0} height={0} sizes={100} priority={true} className='h-auto' />
      </section>
    </>
  )
}

export default SectionOne
