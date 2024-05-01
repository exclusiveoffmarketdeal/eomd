import LinkBtn from '@/components/Hardware/LinkBtn'
import Image from 'next/image'

const SectionFive = ({user}) => {

  return (
    <>
      <div className='w-5/6 flex flex-col justify-center items-center my-12'>
				<h3 className="font-bold text-lg md:text-2xl my-4">Hi {user.name},</h3>
        <div>
					<Image 
            width={600}
            height={300}
            className='img-fluid' 
            src='/img/buy-your-home/ApplicationReceived.png' 
            alt='Application Received' />
				</div>
				<h2 className="uppercase text-center font-bold text-lg md:text-4xl my-6 max-w-2xl">We have received your inquiry and we will contact you soon!</h2>
        <LinkBtn
          bgColor={'bg-vb_green-500'}
          bgColorHover={'hover:bg-vb_green-600'}
          address={'/buy-your-home'}
          paddingX={'px-8'}
          paddingY={'py-2'}
          shadow={'yes'}
        >
          Back to Buy Your Home
        </LinkBtn>
      </div>
    </>
  )
}

export default SectionFive
