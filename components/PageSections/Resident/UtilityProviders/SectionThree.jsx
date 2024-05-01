import { useState } from 'react'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import AlabamaUtility from './States/AlabamaUtility'
import GeorgiaUtility from './States/GeorgiaUtility'
import IndianaUtility from './States/IndianaUtility'
import KansasUtility from './States/KansasUtility'
import KentuckyUtility from './States/KentuckyUtility'
import MissouriUtility from './States/MissouriUtility'
import MississippiUtility from './States/MississippiUtility'
import OhioUtility from './States/OhioUtility'
import SouthCarolinaUtility from './States/SouthCarolinaUtility'

const SectionThree = () => {
  const [selectedState, setSelectedState] = useState('alabamaInfo')
  const stateClick = (value) => {
    setSelectedState(value)
  }

  return (
    <>
      <section className='px-5 mt-10 sm:mt-16 w-full'>
        <BasicContainer>
          <div className='container mx-auto'>
            <div className='text-center'>
              <select
                className='w-full sm:w-3/4 lg:w-1/2 h-10 bg-gray-100 text-vb_blue-500 font-bold leading-6 px-6 mb-6 lg:mb-16 rounded-lg shadow-md shadow-vb_gray-200 hover:cursor-pointer'
                onChange={(e) => stateClick(e.target.value)}
              >
                <option value='alabamaInfo'>Alabama</option>
                <option value='georgiaInfo'>Georgia</option>
                <option value='indianaInfo'>Indiana</option>
                <option value='kansasInfo'>Kansas</option>
                <option value='kentuckyInfo'>Kentucky</option>
                <option value='missouriInfo'>Missouri</option>
                <option value='mississippiInfo'>Mississippi</option>
                <option value='ohioInfo'>Ohio</option>
                <option value='southCarolinaInfo'>South Carolina</option>
              </select>
            </div>
            <div id='links' className='links mb-16'>
              <div className={selectedState === 'alabamaInfo' ? '' : 'hidden'} id='alabamaInfo'>
                <AlabamaUtility />
              </div>
              <div className={selectedState === 'georgiaInfo' ? '' : 'hidden'} id='georgiaInfo'>
                <GeorgiaUtility />
              </div>
              <div className={selectedState === 'indianaInfo' ? '' : 'hidden'} id='indianaInfo'>
                <IndianaUtility />
              </div>
              <div className={selectedState === 'kansasInfo' ? '' : 'hidden'} id='kansasInfo'>
                <KansasUtility />
              </div>
              <div className={selectedState === 'kentuckyInfo' ? '' : 'hidden'} id='kentuckyInfo'>
                <KentuckyUtility />
              </div>
              <div className={selectedState === 'missouriInfo' ? '' : 'hidden'} id='missouriInfo'>
                <MissouriUtility />
              </div>
              <div className={selectedState === 'mississippiInfo' ? '' : 'hidden'} id='mississippiInfo'>
                <MississippiUtility />
              </div>
              <div className={selectedState === 'ohioInfo' ? '' : 'hidden'} id='ohioInfo'>
                <OhioUtility />
              </div>
              <div className={selectedState === 'southCarolinaInfo' ? '' : 'hidden'} id='southCarolinaInfo'>
                <SouthCarolinaUtility />
              </div>
            </div>
          </div>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionThree
