import Image from 'next/image'
import Link from 'next/link'

const PressKitCard = ({ pressImg, pressLink, pressTitle }) => {
  return (
    <>
      <Link
        href={pressLink}
        className=' relative col-span-1 rounded-[20px] [&>div>p]:hover:text-vb_green-300 hover:shadow-lg hover:shadow-vb_gray-300 transition-all duration-150 ease-in-out'
      >
        <Image src={pressImg} width={0} height={0} sizes={100} alt='' />
        <div className='absolute bottom-0 flex justify-center items-center w-full h-full sm:h-12 bg-vb_blue-800 bg-opacity-60 py-3 rounded-b-[10px] rounded-t-[10px] sm:rounded-t-[0px] sm:rounded-b-[16px] md:rounded-b-[16px] lg:rounded-b-[12px] xl:rounded-b-[18px] 2xl:rounded-b-[20px]'>
          <p className='text-white text-center text-base xl:text-2xl font-medium tracking-wider transition-all duration-150 ease-in-out'>
            {pressTitle}
          </p>
        </div>
      </Link>
    </>
  )
}

export default PressKitCard
