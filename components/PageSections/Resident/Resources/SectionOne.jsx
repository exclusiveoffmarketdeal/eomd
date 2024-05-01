import banner from '@/public/img/pages/Resident/resources/resources-banner-green.png'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <>
      <section className='flex flex-col items-center w-full'>
        <Image src={banner} alt='Banner' priority={true} className='h-auto' width='0' height='0' sizes='100vw' />
      </section>
    </>
  )
}

export default SectionOne
