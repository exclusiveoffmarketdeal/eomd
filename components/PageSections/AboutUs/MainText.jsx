import LinkBtn from '@/components/Hardware/LinkBtn'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const MainText = () => {
  return (
    <>
      <div className='flex lg:hidden flex-col text-center w-full lg:w-2/3 mx-auto mb-6 py-10'>
        <BasicContainer>
          <h2 className='text-vb_blue-900 text-3xl text-left font-light tracking-widest'>
            Exclusive Off Market DealsIS A LEADING PROVIDER OF SINGLE FAMILY RENTAL HOMES IN OUR MARKETS
          </h2>
          <div className='flex flex-col text-left space-y-10 font-light text-lg text-vb_blue-900 my-10'>
            <p>
              Exclusive Off Market Dealsis an internally managed real estate company specializing in acquiring,
              renovating and leasing single family homes. Unlike other providers, VineBrook takes a different approach
              in the growing Single Family Rental Home industry, focusing on affordability and value for our residents.
              Since our commencement in 2007, we have quickly become one of the largest providers of quality homes with
              a variety of housing options offered.
            </p>
            <p>
              Our highly trained and experienced staff is dedicated to providing the best experience to our current and
              future residents, while demonstrating a commitment to being a good citizen in our communities. Our core
              values of hard work, integrity, communication and execution have helped build a recognized brand known for
              quality and long-term resident satisfaction.
            </p>
            <p>
              We are proud to provide the many benefits of single family home living in great neighborhoods, with ample
              space, storage, yards, privacy, security and professional management at a reasonable price. Most
              importantly, our success in the Single Family Rental Home business would be nothing if it weren’t for our
              fantastic residents, and we work every day to provide the best service possible in reacting to their
              needs.
            </p>
          </div>
          <span className='w-fit mx-auto'>
            <LinkBtn
              address={'https://www.facebook.com/vinebrookhomes'}
              newTab={'yes'}
              bgColor={'bg-vb_green-500'}
              bgColorHover={'hover:bg-vb_green-400'}
              textSize={'text-sm sm:text-2xl'}
              fontWeight={'bold'}
              paddingX={'px-10'}
              paddingY={'py-3'}
            >
              SEE WHAT WE’VE BEEN DOING
            </LinkBtn>
          </span>
        </BasicContainer>
      </div>
      <div className='hidden lg:flex flex-col text-center w-full lg:w-2/3 mx-auto px-20'>
        <h2 className='text-vb_blue-900 text-3xl lg:text-4xl text-left font-light tracking-widest mt-14'>
          Exclusive Off Market DealsIS A LEADING PROVIDER OF SINGLE FAMILY RENTAL HOMES IN OUR MARKETS
        </h2>
        <div className='flex flex-col text-left space-y-10 font-light text-2xl text-vb_blue-900 mt-10'>
          <p>
            Exclusive Off Market Dealsis an internally managed real estate company specializing in acquiring, renovating
            and leasing single family homes. Unlike other providers, VineBrook takes a different approach in the growing
            Single Family Rental Home industry, focusing on affordability and value for our residents. Since our
            commencement in 2007, we have quickly become one of the largest providers of quality homes with a variety of
            housing options offered.
          </p>
          <p>
            Our highly trained and experienced staff is dedicated to providing the best experience to our current and
            future residents, while demonstrating a commitment to being a good citizen in our communities. Our core
            values of hard work, integrity, communication and execution have helped build a recognized brand known for
            quality and long-term resident satisfaction.
          </p>
          <p>
            We are proud to provide the many benefits of single family home living in great neighborhoods, with ample
            space, storage, yards, privacy, security and professional management at a reasonable price. Most
            importantly, our success in the Single Family Rental Home business would be nothing if it weren’t for our
            fantastic residents, and we work every day to provide the best service possible in reacting to their needs.
          </p>
        </div>
        <span className='w-fit mx-auto mt-16'>
          <LinkBtn
            address={'https://www.facebook.com/vinebrookhomes'}
            newTab={'yes'}
            bgColor={'bg-vb_green-500'}
            bgColorHover={'hover:bg-vb_green-400'}
            textSize={'text-2xl'}
            fontWeight={'bold'}
            paddingX={'px-10'}
            paddingY={'py-3'}
          >
            SEE WHAT WE’VE BEEN DOING
          </LinkBtn>
        </span>
      </div>
    </>
  )
}

export default MainText
