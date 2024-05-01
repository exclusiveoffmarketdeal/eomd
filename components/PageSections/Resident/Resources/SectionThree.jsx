import { useState } from 'react'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'

const SectionThree = () => {
  const [selectedRegion, setSelectedRegion] = useState('nationwideInfo')
  const regionClick = (value) => {
    setSelectedRegion(value)
  }

  return (
    <>
      <section className='px-5 mt-10 sm:mt-16 w-full'>
        <BasicContainer>
          <div className='container mx-auto'>
            <div className='text-center'>
              <select
                className='w-full sm:w-3/4 lg:w-1/2 h-10 bg-gray-100 text-vb_blue-500 font-bold leading-6 px-6 mb-6 lg:mb-16 rounded-lg shadow-md shadow-vb_gray-200 hover:cursor-pointer'
                onChange={(e) => regionClick(e.target.value)}
              >
                <option value='nationwideInfo'>Nationwide</option>
                <option value='atlantaInfo'>Atlanta</option>
                <option value='augustaInfo'>Augusta</option>
                <option value='birminghamInfo'>Birmingham</option>
                <option value='cincinnatiInfo'>Cincinnati</option>
                <option value='columbiaInfo'>Columbia</option>
                <option value='columbusInfo'>Columbus</option>
                <option value='daytonInfo'>Dayton</option>
                <option value='greenvilleInfo'>Greenville</option>
                <option value='huntsvilleInfo'>Huntsville</option>
                <option value='indianapolisInfo'>Indianapolis</option>
                <option value='jacksonInfo'>Jackson</option>
                <option value='kansasCityInfo'>Kansas City</option>
                <option value='littleRockInfo'>Little Rock</option>
                <option value='memphisInfo'>Memphis</option>
                <option value='milwaukeeInfo'>Milwaukee</option>
                <option value='montgomeryInfo'>Montgomery</option>
                <option value='omahaInfo'>Omaha</option>
                <option value='pensacolaInfo'>Pensacola</option>
                <option value='pittsburghInfo'>Pittsburgh</option>
                <option value='portalesInfo'>Portales</option>
                <option value='raefordInfo'>Raeford</option>
                <option value='stLouisInfo'>St. Louis</option>
                <option value='triadInfo'>Triad</option>
              </select>
            </div>
            <div id='links' className='links mb-16'>
              <div className={selectedRegion === 'nationwideInfo' ? '' : 'hidden'} id='nationwideInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>Nationwide</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a
                        href='https://www.irs.gov/coronavirus/get-my-payment?mod=article_inline'
                        title='Get My Payment – CARES Act Stimulus Payments'
                        target='_blank'
                      >
                        Get My Payment – CARES Act Stimulus Payments
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.fool.com/the-ascent/research/where-find-financial-help-during-coronavirus-pandemic/'
                        title='The Ascent Nationwide Relief Options'
                        target='_blank'
                      >
                        The Ascent Nationwide Relief Options
                      </a>
                    </li>
                    <li>
                      <a href='https://www.hopeinsidecovid19.org/recovery' title='HOPE Inside' target='_blank'>
                        HOPE Inside
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.consumerfinance.gov/coronavirus/mortgage-and-housing-assistance/renter-protections/find-help-with-rent-and-utilities/?utm_source=vanity&utm_medium=outreach&utm_campaign=renthelp'
                        title='Find Rental Assistance Programs'
                        target='_blank'
                      >
                        Find Rental Assistance Programs
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>Student Loans</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a
                        href='https://studentaid.gov/announcements-events/coronavirus'
                        title='Student Loans'
                        target='_blank'
                      >
                        Student Loan Relief
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>Free Stimulus Registration</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a
                        href='https://blog.turbotax.intuit.com/tax-news/turbotax-to-help-millions-of-americans-get-their-stimulus-payments-with-launch-of-free-stimulus-registration-product-46736/'
                        title='Free Stimulus Registration'
                        target='_blank'
                      >
                        Free Stimulus Registration
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a href='http://www.211.org/services/covid19' title='Get Connected Get Help' target='_blank'>
                        Get Connected Get Help
                      </a>
                    </li>
                    <li>
                      <a href='https://www.salvationarmyusa.org/usn/covid19/' title='Salvation Army' target='_blank'>
                        Salvation Army
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.benefits.gov/categories/Financial%20Assistance'
                        title='Federal Benefits'
                        target='_blank'
                      >
                        Federal Benefits
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.hudexchange.info/housing-and-homeless-assistance/'
                        title='HUD Exchange'
                        target='_blank'
                      >
                        HUD Exchange
                      </a>
                    </li>
                    <li>
                      <a href='https://www.internetessentials.com/' title='Internet Essentials' target='_blank'>
                        Internet Essentials
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>Tax Relief</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a href='https://www.irs.gov/coronavirus' title='Internal Revenue Service'>
                        Internal Revenue Service
                      </a>
                    </li>
                    <li>
                      <a href='https://home.treasury.gov/news/press-releases/sm948' title='US Treasury'>
                        US Treasury
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>Employment</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a
                        href='https://www.dol.gov/newsroom/releases/whd/whd20200326'
                        title='US Labor Department'
                        target='_blank'
                      >
                        US Labor Department
                      </a>
                    </li>
                    <li>
                      <a href='https://www.usa.gov/unemployment' title='Unemployment Benefits' target='_blank'>
                        Unemployment Benefits
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className='font-bold text-2xl leading-10 text-black'>Small Business Assistance</h4>
                <div className='mb-4'>
                  <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                    <li>
                      <a
                        href='https://disasterloan.sba.gov/ela'
                        title='US Small Business Administration'
                        target='_blank'
                      >
                        US Small Business Administration
                      </a>
                    </li>
                    <li>
                      <a href='https://www.score.org/' title='SCORE Business Resources' target='_blank'>
                        SCORE Business Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.facebook.com/business/boost/grants?ref=alias'
                        title='Facebook Business Boost Program'
                        target='_blank'
                      >
                        Facebook Business Boost Program
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={selectedRegion === 'atlantaInfo' ? '' : 'hidden'} id='atlantaInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'augustaInfo' ? '' : 'hidden'} id='augustaInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://georgiarentalassistance.ga.gov/'
                      title='Georgia Development of Community Affairs'
                      target='_blank'
                    >
                      Georgia Development of Community Affairs
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'birminghamInfo' ? '' : 'hidden'} id='birminghamInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a href='https://www.jcceo.org/csbg' title='JCCEO CSBG Rental Assistance Program' target='_blank'>
                      JCCEO CSBG Rental Assistance Program
                    </a>
                  </li>
                  <li>
                    <a href='https://eraalabama.com' title='Emergency Rental Assistance Alabama' target='_blank'>
                      Emergency Rental Assistance Alabama
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'cincinnatiInfo' ? '' : 'hidden'} id='cincinnatiInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='http://jfs.ohio.gov/ouio/index.stm'
                      title='Ohio Dept. of Job and Family Services'
                      target='_blank'
                    >
                      Ohio Dept. of Job and Family Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.needhelppayingbills.com/html/cincinnati_rent_assistance.html'
                      title='Rental assistance in Cincinnati and Hamilton County Ohio'
                      target='_blank'
                    >
                      Rental assistance in Cincinnati and Hamilton County Ohio
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://513relief.org/housing-utility-relief/'
                      title='Housing Utility Relief'
                      target='_blank'
                    >
                      Housing Utility Relief
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.hcjfs.org/services/workforce-development/apply-for-cares/'
                      title='Rent and Utility Assistance'
                      target='_blank'
                    >
                      Rent and Utility Assistance
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.cincy-caa.org/what-we-do/supportive-services/caa-home-relief.html'
                      title='CAA Home Relief'
                      target='_blank'
                    >
                      CAA Home Relief
                    </a>
                  </li>
                  <li>
                    <a href='/files/Cincinnati-Area-Rental-Assistance-Programs.pdf' target='_blank'>
                      Cincinnati Area Rental Assistance Programs
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'columbiaInfo' ? '' : 'hidden'} id='columbiaInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a href='https://scthrive.org/' title='SC Thrive' target='_blank'>
                      SC Thrive
                    </a>
                  </li>
                  <li>
                    <a href='https://www.salvationarmycarolinas.org/columbia/' title='Salvation Army' target='_blank'>
                      Salvation Army
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1833-242-4673' title='IMPACT/ Hope Program' target='_blank'>
                      IMPACT/ Hope Program
                    </a>
                  </li>
                  <li>
                    <a href='https://www.wcai.org/' title='Wateree Community Action' target='_blank'>
                      Wateree Community Action
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'columbusInfo' ? '' : 'hidden'} id='columbusInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='http://jfs.ohio.gov/ouio/index.stm'
                      title='Ohio Dept. of Job and Family Services'
                      target='_blank'
                    >
                      Ohio Dept. of Job and Family Services
                    </a>
                  </li>
                  <li>
                    <a href='https://co.salvationarmy.org/' title='Columbus Salvation Army' target='_blank'>
                      Columbus Salvation Army
                    </a>
                  </li>
                  <li>
                    <a href='https://www.impactca.org/' title='IMPACT' target='_blank'>
                      IMPACT
                    </a>
                  </li>
                  <li>
                    <a href='https://handsoncentralohio.org/' title='Hands In Central Ohio' target='_blank'>
                      Hands In Central Ohio
                    </a>
                  </li>
                  <li>
                    <a href='https://www.vincentianvoice.org/' title='St. Vincent de Paul' target='_blank'>
                      St. Vincent de Paul
                    </a>
                  </li>
                  <li>
                    <a href='https://www.chninc.org/' title='Community Housing Network' target='_blank'>
                      Community Housing Network
                    </a>
                  </li>
                  <li>
                    <a href='https://bspc.org/' title='Broad Street Presbyterian Church' target='_blank'>
                      Broad Street Presbyterian Church
                    </a>
                  </li>
                  <li>
                    <a href='https://www.cul.org/' title='Columbus Urban League' target='_blank'>
                      Columbus Urban League
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1614-484-9111'>Phone: 614-484-9111</a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'daytonInfo' ? '' : 'hidden'} id='daytonInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.wdtn.com/news/local-news/covid-19-funding-available-to-qualified-families-in-montgomery-county/'
                      title='Montgomery County COVID19 Funding'
                      target='_blank'
                    >
                      Montgomery County COVID19 Funding
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://jfs.ohio.gov/ouio/index.stm'
                      title='Ohio Dept. of Job and Family Services'
                      target='_blank'
                    >
                      Ohio Dept. of Job and Family Services
                    </a>
                  </li>
                  <li>
                    <a href='https://dayton-unitedway.org/' title='Dayton United Way' target='_blank'>
                      Dayton United Way
                    </a>
                  </li>
                  <li>
                    <a href='https://stvincentdayton.org/' title='Dayton St. Vincent Depaul' target='_blank'>
                      Dayton St. Vincent Depaul
                    </a>
                  </li>
                  <li>
                    <a href='https://miamivalleycap.org/' title='Miami Valley Community Action' target='_blank'>
                      Miami Valley Community Action
                    </a>
                  </li>
                  <li>
                    <a href='https://www.wpafb.af.mil/afrf/' title='Wright Patterson AFB' target='_blank'>
                      Wright Patterson AFB
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.mcohio.org/social_services_and_income_support/emergency_aid.php'
                      title='Montgomery County Family Assistance'
                      target='_blank'
                    >
                      Montgomery County Family Assistance
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'greenvilleInfo' ? '' : 'hidden'} id='greenvilleInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='http://schousing.com/Home/Resources-for-Renters'
                      title='SC HOUSING RESOURCES FULL LIST FOR SC'
                      target='_blank'
                    >
                      SC HOUSING RESOURCES FULL LIST FOR SC
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.sharesc.org'
                      title='SHARE (Sunbelt Human Advancement Resources)'
                      target='_blank'
                    >
                      SHARE (Sunbelt Human Advancement Resources)
                    </a>
                  </li>
                  <li>
                    <a href='https://greerrelief.org/' title='Greer Relief and Resources' target='_blank'>
                      Greer Relief and Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://united-ministries.org/crisis-assistance/'
                      title='United Ministries'
                      target='_blank'
                    >
                      United Ministries
                    </a>
                  </li>
                  <li>
                    <a href='https://www.unitedwaygc.org/covid-19-response-0' title='United Way' target='_blank'>
                      United Way
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1833-242-4673' title='IMPACT/Hope Program' target='_blank'>
                      IMPACT/Hope Program
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.unitedhousingconnections.org/'
                      title='United Housing Connections, Greenville County Human Relations and SHARE'
                      target='_blank'
                    >
                      United Housing Connections, Greenville County Human Relations and SHARE
                    </a>
                    <a href='tel:+1866-242-9801'> Phone: 866-242-9801</a>ext. 115
                  </li>
                  <li>
                    <a
                      href='https://uwpiedmont.galaxydigital.com/agency/detail/?agency_id=111638'
                      title='Greater Spartanburg Ministries, United Way of the Piedmont'
                      target='_blank'
                    >
                      Greater Spartanburg Ministries, United Way of the Piedmont
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1864-585-9371'>Phone: 864-585-9371</a>
                  </li>
                  <li>
                    <a
                      href='mailto:upstatefamilyresourcecenter@outlook.com'
                      title='Upstate Family Resource Center'
                      target='_blank'
                    >
                      Upstate Family Resource Center
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1864-578-1379'>Phone: 864-578-1379</a>
                  </li>
                  <li>
                    <a href='tel:+1864-439-7760' title='Middle Tyger Community Center' target='_blank'>
                      Middle Tyger Community Center
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://uwpiedmont.galaxydigital.com/agency/detail/?agency_id=111638'
                      title='Piedmont Community Actions'
                      target='_blank'
                    >
                      Piedmont Community Actions
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1864-585-8183'>Phone: 864-585-8183</a>&nbsp;ext. 112
                  </li>
                  <li>
                    <a href='https://www.cdc.gov/csels/dhis/bios/hope.html' title='CDC/HOPE' target='_blank'>
                      CDC/HOPE
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'huntsvilleInfo' ? '' : 'hidden'} id='huntsvilleInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a href='https://eraalabama.com/' title='Emergency Rental Assistance' target='_blank'>
                      Emergency Rental Assistance
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'indianapolisInfo' ? '' : 'hidden'} id='indianapolisInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.in.gov/dwd/2362.htm'
                      title='Indiana Department of Workforce Development'
                      target='_blank'
                    >
                      Indiana Department of Workforce Development
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.needhelppayingbills.com/html/indianapolis_rent_assistance.html '
                      title='Rental assistance'
                      target='_blank'
                    >
                      Rental Assistance
                    </a>
                  </li>
                  <li>
                    <a href='https://www.indy.gov/agency/township-trustees' title='Township Trustees' target='_blank'>
                      Township Trustees
                    </a>
                  </li>
                  <li>
                    <a href='https://indyrent.org/' title='IndyRent Assistance' target='_blank'>
                      IndyRent Assistance
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1317-912-1260'>Phone: 317-912-1260</a>
                  </li>
                  <li>
                    <a href='https://in211.communityos.org/' title='Indiana 2-1-1' target='_blank'>
                      Indiana 2-1-1
                    </a>
                  </li>
                  <li>
                    <a href='tel:+866-211-9966'>Phone: 2-1-1 or 866-211-9966</a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'jacksonInfo' ? '' : 'hidden'} id='jacksonInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.mdes.ms.gov/unemployment-claims/'
                      title='MS Department of Employment Security'
                      target='_blank'
                    >
                      MS Department of Employment Security
                    </a>
                  </li>
                  <li>
                    <a href='http://www.211.org/services/covid19' title='Get Connected Help' target='_blank'>
                      Get Connected Help
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.mdhs.ms.gov/community-services/'
                      title='MS Department of Human Services'
                      target='_blank'
                    >
                      MS Department of Human Services
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1800-421-0762'>Phone: 800-421-0762</a>
                  </li>
                  <li>
                    <a href='https://www.muteh.org/' title='Mississippi United to End Homelessness' target='_blank'>
                      Mississippi United to End Homelessness
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1601-960-0557'>Phone: 601-960-0557</a>
                  </li>
                  <li>
                    <a href='https://hchra.org/resources/' title='Hinds County Human Resource Agency' target='_blank'>
                      Hinds County Human Resource Agency
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1601-923-3930'>Phone: 601-923-3930</a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'kansasCityInfo' ? '' : 'hidden'} id='kansasCityInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.getkansasbenefits.gov/Home.aspx'
                      title='Kansas Department of Labor'
                      target='_blank'
                    >
                      Kansas Department of Labor
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://midwestmusicfoundation.org/coronavirus/'
                      title='Midwest Music Foundation'
                      target='_blank'
                    >
                      Midwest Music Foundation
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.rentassistance.us/li/redemptorist_social_services_center_inc'
                      title='Rent Assistance'
                      target='_blank'
                    >
                      Rent Assistance
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1816-931-9942' target='_blank'>
                      Phone: 816-931-9942
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://northlandassistancecenter.org/'
                      title='Northland Assistance Center'
                      target='_blank'
                    >
                      Northland Assistance Center
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1816-421-2243'>Phone: 816-421-2243</a>
                  </li>
                  <li>
                    <a href='https://www.vfw.org/foundation' title='VFW Foundation' target='_blank'>
                      VFW Foundation
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1816-968-1128'>Phone: 816-968-1128</a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'littleRockInfo' ? '' : 'hidden'} id='littleRockInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'memphisInfo' ? '' : 'hidden'} id='memphisInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.tn.gov/workforce/unemployment.html'
                      title='Tennessee Department of Labor and Workforce Development'
                      target='_blank'
                    >
                      Tennessee Department of Labor and Workforce Development
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.mifa.org/emergencyassistanceeligibility'
                      title='Metropolitan Inter-Faith Association (MIFA)'
                      target='_blank'
                    >
                      Metropolitan Inter-Faith Association (MIFA)
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.ncclife.org/covid-19-emergency-support'
                      title='Neighborhood Christian Centers, Inc. (Mobile Pantry Sign-Up)'
                      target='_blank'
                    >
                      Neighborhood Christian Centers, Inc. (Mobile Pantry Sign-Up)
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.shelbycountycsa.org/covid-19-updates'
                      title='Community Services Agency (CSA)'
                      target='_blank'
                    >
                      Community Services Agency (CSA)
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://tn211.mycommunitypt.com/index.php'
                      title='Tennessee Community Services Help Line: Dial 2-1-1'
                      target='_blank'
                    >
                      Tennessee Community Services Help Line: Dial 2-1-1
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'milwaukeeInfo' ? '' : 'hidden'} id='milwaukeeInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a href='https://dwd.wisconsin.gov/ui/' title='WI Dept. of Workforce Development' target='_blank'>
                      WI Dept. of Workforce Development
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.needhelppayingbills.com/html/milwaukee_rental_assistance.html'
                      title='Need Help Paying Bills'
                      target='_blank'
                    >
                      Need Help Paying Bills
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://communityadvocates.net/what-we-do/rent-assistance.html'
                      title='Community Advocates'
                      target='_blank'
                    >
                      Community Advocates
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1414-270-4646'>Phone: 414-270-4646</a>
                  </li>
                  <li>
                    <a href='https://www.cr-sdc.org/' title='Social Development Commission' target='_blank'>
                      Social Development Commission
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1414-906-2700'>Phone: 414-906-2700</a>
                  </li>
                  <li>
                    <a href='https://dcf.wisconsin.gov/ea' title='Dept. of Children and Families' target='_blank'>
                      WI Dept. of Children and Families
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'montgomeryInfo' ? '' : 'hidden'} id='montgomeryInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a href='https://eraalabama.com/' title='Emergency Rental Assistance' target='_blank'>
                      Emergency Rental Assistance
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'omahaInfo' ? '' : 'hidden'} id='omahaInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'pensacolaInfo' ? '' : 'hidden'} id='pensacolaInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'pittsburghInfo' ? '' : 'hidden'} id='pittsburghInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://www.uc.pa.gov/unemployment-benefits/file/Pages/File%20an%20Initial%20Claim.aspx'
                      title='PA Office of Unemployment Compensation'
                      target='_blank'
                    >
                      PA Office of Unemployment Compensation
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.needhelppayingbills.com/html/pittsburgh_rental_assistance.html'
                      title='Need Help Paying Bills'
                      target='_blank'
                    >
                      Need Help Paying Bills
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.acba.org/yld-mvp/Financial-Food-Assistance'
                      title='Allegheny County Bar Association'
                      target='_blank'
                    >
                      Allegheny County Bar Association
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://ulpgh.org/programs/housing/rental-assistance/'
                      title='Urban League of Greater Pittsburgh'
                      target='_blank'
                    >
                      Urban League of Greater Pittsburgh
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://pitt.libguides.com/assistanceresources/housing'
                      title='Pitt and Community Assistance Resources'
                      target='_blank'
                    >
                      Pitt and Community Assistance Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://chscorp.org/housing-assistance-programs'
                      title='Community Human Services'
                      target='_blank'
                    >
                      Community Human Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://ulpgh.org/programs/housing/rental-assistance/'
                      title='Urban League of Greater Pittsburgh'
                      target='_blank'
                    >
                      Urban League of Greater Pittsburgh
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://unitedfamilynetwork.com/splash?type=b&amp;keyword=i%20need%20help%20paying%20rent&amp;group=Rent_Help&amp;utm_source=google&amp;utm_medium=search&amp;utm_campaign=1497004713&amp;utm_group=62703576607&amp;utm_content=330103279362&amp;utm_device=c&amp;utm_term=i%20need%20help%20paying%20rent&amp;gclid=CjwKCAjwguzzBRBiEiwAgU0FT8yHep-fBq7S84jJDHdTPYXoQEUV0VxIxCFKFqRJfRwmeBE8K-dZyhoCeUAQAvD_BwE'
                      title='United Family Network'
                      target='_blank'
                    >
                      United Family Network
                    </a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'portalesInfo' ? '' : 'hidden'} id='portalesInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'raefordInfo' ? '' : 'hidden'} id='raefordInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'></h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'></ul>
              </div>
              <div className={selectedRegion === 'stLouisInfo' ? '' : 'hidden'} id='stLouisInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://labor.mo.gov/unemployed-workers'
                      title='MO Department of Labor and Industrial Relations'
                      target='_blank'
                    >
                      MO Department of Labor and Industrial Relations
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.mercy.net/content/dam/mercy/en/images/utility_and_rent_-_st._louis_city_and_county_817.pdf'
                      title='Mercy Neighborhood Ministry'
                      target='_blank'
                    >
                      Mercy Neighborhood Ministry
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.needhelppayingbills.com/html/st__louis_rental_assistance.html'
                      title='Need Help Paying Bills'
                      target='_blank'
                    >
                      Need Help Paying Bills
                    </a>
                  </li>
                  <li>
                    <a href='https://www.rentassistance.us/ci/mo-saint_louis' title='Rent Assistance' target='_blank'>
                      Rent Assistance
                    </a>
                  </li>
                  <li>
                    <a href='https://stlcorona.com/' title='St. Louis County CARES' target='_blank'>
                      St. Louis County CARES
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1314-615-2660'>Phone: 314-615-2660</a>
                  </li>
                  <li>
                    <a
                      href='http://www.211helps.org/cares-apply/'
                      title='United Way of Greater St. Louis'
                      target='_blank'
                    >
                      United Way of Greater St. Louis
                    </a>
                  </li>
                  <li>
                    <a href='tel:+800-427-4626'>Phone: 2-1-1 or 800-427-4626</a>
                  </li>
                </ul>
              </div>
              <div className={selectedRegion === 'triadInfo' ? '' : 'hidden'} id='triadInfo'>
                <h4 className='font-bold text-2xl leading-10 text-black'>
                  Food, Housing Bills, and Essential Services
                </h4>
                <ul className='list-disc text-vb_blue-600 text-lg font-light leading-9 ml-8 underline'>
                  <li>
                    <a
                      href='https://greensborohousingcoalition.org/gso-covid19-relief/'
                      title='Greensboro Housing Coalition'
                      target='_blank'
                    >
                      Greensboro Housing Coalition
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1336-553-2657' title='Greensboro Urban Ministry' target='_blank'>
                      Phone: 336-553-2657
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://tn211.mycommunitypt.com/index.php'
                      title='Housing Opportunites & Previention of Eviction'
                      target='_blank'
                    >
                      2-1-1
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.cityofws.org/2673/COVID-19-Coronavirus-Information'
                      title='City of Winston-Salem Covid 19 Response Fund'
                      target='_blank'
                    >
                      City of Winston-Salem Covid 19 Response Fund
                    </a>
                  </li>
                  <li>
                    <a href='tel:+1336-724-7558' title='Sunnyside Ministry of the Moravian Church' target='_blank'>
                      Sunnyside Ministry of the Moravian Church
                    </a>
                  </li>
                  <li>
                    <a
                      href='tel:+1336-996-5401'
                      title='Kernersville & East Forsyth Emergency Asst./Crisis Control Ministry'
                      target='_blank'
                    >
                      Kernersville & East Forsyth Emergency Asst./Crisis Control Ministry
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.housingconsultantsgroup.org/calendar.cfm'
                      title='City of High Point/Housing Consultants Group'
                      target='_blank'
                    >
                      City of High Point/Housing Consultants Group
                    </a>
                  </li>
                  <li>
                    <a href='https://www.burlingtonnc.gov/' title='Burlington Community Developement' target='_blank'>
                      Burlington Community Developement
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionThree
