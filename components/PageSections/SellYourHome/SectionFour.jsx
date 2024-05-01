import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import LinkBtn from '@/components/Hardware/LinkBtn'

const SectionFour = () => {
  return (
    <>
      <div className='mb-20'>
        <BasicContainer>
          <h3 className='text-3xl lg:text-4xl text-thin mb-10'>CURRENT INVESTMENT MARKETS</h3>
          <p className='text-lg lg:text-2xl text-thin mb-10'>
            Atlanta, Augusta, Birmingham, Cincinnati, Columbia, Columbus, Dayton, Greenville, Huntsville, Jackson,
            Kansas City, Little Rock, Memphis, Milwaukee, Montgomery, Omaha, Pensacola, Pittsburgh, Portales, Raeford,
            St. Louis, Triad and the surrounding metro areas.
          </p>
          <LinkBtn address={'https://vinebrookhomes.my.salesforce-sites.com/sellyour_home'} newTab={'yes'}>
            PROPERTY SALE INQUIRY FORM
          </LinkBtn>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionFour
