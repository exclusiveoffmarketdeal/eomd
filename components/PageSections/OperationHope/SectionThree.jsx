import Image from 'next/image'
import banner2 from '../../../public/img/pages/Operation-Hope/Operation-Hope-Banner-2.png'

const SectionThree = () => {
  return (
    <>
      <Image src={banner2} width={0} height={0} sizes={100} alt={'Operation-Hope-Banner-2'} className='mt-16' />
    </>
  )
}

export default SectionThree
