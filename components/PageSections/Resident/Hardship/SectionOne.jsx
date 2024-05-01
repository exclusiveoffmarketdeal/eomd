import Image from 'next/image'
import banner from '@/public/img/pages/Resident/hardship/Hardship-Banner.png'

const SectionOne = () => {
  return (
    <>
      <Image src={banner} alt={'banner'} width={0} height={0} sizes={100} priority={true} />
    </>
  )
}

export default SectionOne
