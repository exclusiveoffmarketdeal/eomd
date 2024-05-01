import LinkBtn from '@/components/Hardware/LinkBtn'
import Btn from '@/components/Hardware/Btn'
import Loading from '@/components/Loading'
import ApiClient from '@/utils/ApiClient'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const OTPContact = ({ 
  propertyId,
  setPropertyId, 
  contactId,
  setContactId,
  contactType,
  setContactType,
  setSectionOneConfirmOn, 
  setSectionTwoConfirmOn 
}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const MySwal = withReactContent(Swal)
  useEffect(() => {
    const initialContactData = async (formData) => {
      const data = await ApiClient.getRequest('/otp/get-contact-info-by-propertyid', formData)      
      if (data.error) {
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>There was an error processing this address.</i>,
          icon: 'error',
        })
        return false
      }
      setData(data)
      setLoading(false)
    }
    initialContactData({ propertyid: propertyId })
  }, [])

  const handleTypeChange = (e) => {
    setContactType(e.target.value)
  }

  const handleContactIdChange = (e) => {
    setContactId(e.target.value)
  }

  const onSubmit = async () => {
    if (contactType === '') {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please choose a valid OTP type.</i>,
        icon: 'error',
      })
      return false
    }
    if (contactId === '') {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please choose a valid contact.</i>,
        icon: 'error',
      })
      return false
    }
    setSectionTwoConfirmOn(true)    
  }

  return (
    <>
      <div className='flex flex-col px-4 flex-1 min-h-[60vh] justify-center items-center'>
        <h3 className='text-vb_blue-800 text-lg lg:text-3xl text-center font-bold md:mt-10 mx-4 md:mx-32'>
          Please select the phone number or email you would like to use to receive a one-time
           passcode to verify your
          account.
        </h3>
        <p className='mt-16'>Click here to update your resident contact information</p>
        <div className='[&>a]:uppercase my-8'>
          <LinkBtn 
            address={'https://vinebrook-reslisting.securecafe.com/residentservices/apartmentsforrent/userlogin.aspx'} 
            shadow={'yes'}
            newTab={'yes'}>
            update information
          </LinkBtn>
        </div>
        <Loading loadingState={loading} itemLoading={'Contacts information'}>
          <p className='font-medium mt-4'>I want to receive my one-time passcode on my:</p>
          <form action='' className='w-full flex flex-col justify-center items-center'>
            <div className='w-1/2 md:w-1/4 flex flex-row justify-around mt-2'>
              <span>
                <input
                  onChange={handleTypeChange}
                  type='radio' 
                  id='phone' 
                  value='phone' 
                  name='passcodeOption'/>
                <label htmlFor='phone' className='ml-2'>
                  Phone
                </label>
              </span>
              <span>
                <input
                  onChange={handleTypeChange}
                  type='radio' 
                  id='email' 
                  value='email'
                  name='passcodeOption' />
                <label htmlFor='email' className='ml-2'>
                  Email
                </label>
              </span>
            </div>
            <div className='my-4'>
              <table className='w-full bg-vb_gray-200 rounded-lg border-separate'>
                  <tr className='grid grid-cols-12 gap-[1px] mb-[1px] [&>th]:bg-white [&>th]:text-center [&>th]:px-1'>
                    <th className='col-span-3 rounded-tl-md'>Choose One</th>
                    <th className='col-span-3'>Phone</th>
                    <th className='col-span-6 rounded-tr-md'>Email</th>
                  </tr>
                {Array.isArray(data) && data?.map((item, index) => (
                  <tr key={index} className='grid grid-cols-12 border-b border-b-gray-300 gap-[1px] [&>td]:bg-white [&>td]:text-center [&>td]:px-1'>
                    {item.contactid && <td className='col-span-3 rounded-bl-md'>
                      <input 
                        type='radio' 
                        name='contactid' 
                        value={item.contactid}                  
                        onChange={handleContactIdChange} />
                    </td>}
                    {item.phone && <td className='col-span-3 break-all'>{item.phone}</td>}
                    {item.email && <td className='col-span-6 rounded-br-md break-all'>{item.email}</td>}
                  </tr>
                ))}
              </table>
            </div>
          </form>
        </Loading>
        <div className='w-full md:w-3/5 px-4 flex flex-row justify-between mt-auto bottom-0'>
          <Btn 
            handleClick={() => {
              setSectionTwoConfirmOn(false)
              setSectionOneConfirmOn(false)
              setPropertyId('')
            }}
            paddingX={'px-8'} 
            paddingY={'py-2'} 
            shadow={'yes'}
          >
            Back
          </Btn>
          <Btn
            handleClick={() => onSubmit()}
            paddingX={'px-8'} 
            paddingY={'py-2'} 
            shadow={'yes'}
            >
            Next
          </Btn>
        </div>
      </div>
    </>
  )
}

export default OTPContact
