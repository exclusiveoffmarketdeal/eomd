import Btn from '@/components/Hardware/Btn'
import Loading from '@/components/Loading'
import ApiClient from '@/utils/ApiClient'
import { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

const OTPValidation = ({ contactId, propertyId, contactType, setUser, setSectionThreeConfirmOn, setSectionTwoConfirmOn }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]

  useEffect(() => {
    const sendOTP = async (formData) => {
      try {
        const responseData = await ApiClient.postRequest('/otp/send-otp-code', formData)
        setData(responseData)        
        setUser(responseData.user)
        setLoading(false)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error sending OTP.',
        })
      }
    }

    sendOTP({
      contactid: contactId,
      type: contactType,
      propertyId: propertyId
    })
  }, [])

  const handleInputChange = (index, e) => {
    const value = e.target.value

    // Check if the input value is a number
    if (/^\d*$/.test(value)) {
      if (index < 3 && value !== '') {
        inputRefs[index + 1].current.focus()
      }
    }
  }

  const handleOTPSubmit = async () => {
    const otpValues = inputRefs.map((ref) => ref.current.value)
    const otpString = otpValues.join('')
    const otp       = data.sessionOtp

    if (otpString.length < 4) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please, fill the passcode completely.',
      })
      return false
    }
  
    const payload = `otpcode=${otpString}&otp=${otp}`

    const responseData = await ApiClient.getRequest(`/otp/check-otp-code?${payload}`)
    if (responseData) {
      Swal.fire({
        icon: 'success',
        title: 'Well done!',
        text: 'The OTP is correct.',
      })
      setSectionThreeConfirmOn(true)
    } else {
      inputRefs.forEach((ref) => {
        ref.current.value = ''
      })
      inputRefs[0].current.focus()

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Enter correct OTP.',
      })
    }
  }

  return (
    <>
      <div className='flex flex-col flex-1 min-h-[60vh] justify-center items-center w-full h-full'>
        <Loading loadingState={loading} itemLoading={'Sending OTP'}>
          <p className='text-lg lg:text-3xl mx-4 font-medium mt-4 md:mt-10'>Please Enter the Passcode Below to Continue</p>
          <form action='' className='w-full mt-8'>
            <span className='w-5/6 flex flex-row justify-center mx-auto'>
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  ref={ref}
                  type='number'
                  className='w-12 h-10 mr-2 bg-vb_white-500 text-center text-2xl border-[1px] border-vb_gray-100 rounded-md'
                  inputMode='numeric'
                  maxLength={1}
                  onInput={(e) => handleInputChange(index, e)}
                />
              ))}
            </span>
          </form>
          <span className='w-full md:w-3/5 px-4 flex flex-row justify-between mt-auto bottom-0'>
            <Btn
              handleClick={() => {
                setSectionTwoConfirmOn(false)
              }}
              paddingX={'px-6'}
              paddingY={'py-2'}
              shadow={'yes'}
            >
              Resend OTP Code
            </Btn>
            <Btn
              handleClick={() => handleOTPSubmit()}
              bgColor={'bg-vb_green-500'}
              bgColorHover={'hover:bg-vb_green-400'}
              paddingX={'px-4'}
              shadow={'yes'}
            >
              Continue
            </Btn>
          </span>
        </Loading>
      </div>
    </>
  )
}

export default OTPValidation
