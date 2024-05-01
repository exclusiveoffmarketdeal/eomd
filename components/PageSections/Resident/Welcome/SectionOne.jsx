import Image from 'next/image'
import bannerImg from '../../../../public/img/pages/Resident/Welcome/Welcome-Banner.png'

const SectionOne = () => {
  return (
    <>
      <section>
        <Image
          src={bannerImg}
          alt={'Welcome Banner'}
          width={0}
          height={0}
          sizes={100}
          priority={true}
          className='w-full h-full'
        />
      </section>
    </>
  )
}

export default SectionOne
