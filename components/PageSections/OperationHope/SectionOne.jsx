import Image from 'next/image'
import banner1 from '../../../public/img/pages/Operation-Hope/Operation-Hope-Banner-1.png'

const SectionOne = () => {
  return (
    <>
      <Image src={banner1} width={0} height={0} sizes={100} alt={'Operation-Hope-Banner-1'} priority={true} />
    </>
  )
}

export default SectionOne
