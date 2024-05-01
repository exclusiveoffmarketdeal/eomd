import Btn from '@/components/Hardware/Btn'
import LinkBtn from '@/components/Hardware/LinkBtn'
import Loading from '@/components/Loading'
import ApiClient from '@/utils/ApiClient'
import { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SectionFour = ({ contactId, propertyId, user, setSectionFourConfirmOn }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [mortgage, setMortgage] = useState()
  const [working, setWorking] = useState()
  const [isClicked, setIsClicked] = useState(false)
  const MySwal = withReactContent(Swal)
  const createSalesForceItemsRequest = async (formData) => {
    setLoading(true)
    setIsClicked(true)
    const data = await ApiClient.postRequest('/buy-your-home/create-sf-items', formData)
    if (data.success == true) {     
      setSectionFourConfirmOn(true)
    } else {        
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>There was an error sending this information.</i>,
        icon: 'error',
      })
    }
    setIsClicked(false)
    setLoading(false)
  }
  const createSalesForceItems = () => {
    // Prevent double clicks on submit.
    if (isClicked) return

    if (!working) {      
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please check if you are you working with an agent or broker.</i>,
        icon: 'error',
      })
      return false
    } else if (!mortgage) {      
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please check if you are you working with a mortgage company.</i>,
        icon: 'error',
      })
      return false
    } else {      
      createSalesForceItemsRequest({
        mortgage: mortgage, 
        working: working,         
        contactid: contactId,
        propertyId: propertyId
      })
    }
  }
  const handleMortgageChange = (e) => {
    setMortgage(e.target.value)
  }
  const handleWorkingChange = (e) => {
    setWorking(e.target.value)
  }
  return (
    <>
      <Loading loadingState={loading} itemLoading={'Sending'}>
        <form action='' className='md:w-1/2 px-4 flex flex-col flex-1 min-h-[30vh] justify-center items-center md:mt-10'>
          <h3 className='text-vb_teal-700 text-center font-bold mb-6'>Hi {user.name}, thank you for your interest!</h3>
          <p>Are you working with an agent or broker?</p>
          <div className='w-1/3 flex flex-row justify-around mt-2'>
            <span>
              <input 
                type='radio' 
                id='agentYes' 
                value='Yes' 
                name='working' 
                onChange={handleWorkingChange} />
              <label htmlFor='agentYes' className='ml-2'>
                Yes
              </label>
            </span>
            <span>
              <input 
                type='radio' 
                id='agentNo' 
                value='No' 
                name='working' 
                onChange={handleWorkingChange} />
              <label htmlFor='agentNo' className='ml-2'>
                No
              </label>
            </span>
          </div>
          <p className='mt-4'>Are you working with a mortgage company?</p>
          <div className='w-1/3 flex flex-row justify-around mt-2'>
            <span>
              <input 
                type='radio' 
                id='companyYes' 
                value='Yes' 
                name='mortgage'             
                onChange={handleMortgageChange} 
              />
              <label htmlFor='companyYes' className='ml-2'>
                Yes
              </label>
            </span>
            <span>
              <input 
                type='radio' 
                id='companyNo' 
                value='No' 
                name='mortgage'             
                onChange={handleMortgageChange} />
              <label htmlFor='companyNo' className='ml-2'>
                No
              </label>
            </span>
          </div>
        </form>
      </Loading>
      <div className='w-5/6 flex flex-row justify-around items-center mt-auto mb-12'>
        <LinkBtn
          bgColor={'bg-vb_red-100'}
          bgColorHover={'hover:bg-red-500'}
          address={'/buy-your-home'}
          paddingX={'px-8'}
          paddingY={'py-2'}
          shadow={'yes'}
        >
          Cancel
        </LinkBtn>
        <Btn
          handleClick={() => createSalesForceItems() }
          disabled={isClicked}
          btnType={'submit'} 
          paddingX={'px-7'} 
          shadow={'yes'}>
          Submit
        </Btn>
      </div>
    </>
  )
}

export default SectionFour
