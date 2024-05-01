import LinkBtn from '@/components/Hardware/LinkBtn'
import Btn from '@/components/Hardware/Btn'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ApiClient from '@/utils/ApiClient'
import { useEffect, useState, useRef } from 'react'
import Loading from '@/components/Loading'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const OTPAddress = ({ setSectionOneConfirmOn, address, setAddress, propertyId, setPropertyId }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const recaptchaRef = useRef(null)
  const MySwal = withReactContent(Swal)
  const [isClicked, setIsClicked] = useState(false)
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ?? ''

  useEffect(() => {
    const initialAdressesData = async () => {
      const data = await ApiClient.getRequest('/otp')
      if (data === '') {
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>Please try again.</i>,
          icon: 'error',
        })
        return false
      }
      setData(data)
      setLoading(false)
    }
    initialAdressesData()
  }, [])

  const handleOnSelect = (item) => {
    setAddress(item.name)
    setPropertyId(item.propertyId)
  }

  const handleOnClear = () => {
    setAddress('')
    setPropertyId('')
  }

  const onSubmit = async () => {
    if (address === '' || propertyId === '') {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please add a valid address.</i>,
        icon: 'error',
      })
      return false
    }

    const recaptchaToken = recaptchaRef.current.getValue()
    const captchaRes = await verifyCaptcha(recaptchaToken)

    if (captchaRes) {
      try {
        setSectionOneConfirmOn(true)
      } catch (error) {
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>There was an error processing this address.</i>,
          icon: 'error',
        })
      }
    } else {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Please check the reCaptcha.</i>,
        icon: 'error',
      })
    }
  }

  const verifyCaptcha = async (token) => {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const res = await fetch(`${backendUrl}/contacts/verifyCaptcha`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })

    return res.json()
  }

  return (
    <>
      <div className='flex flex-col flex-1 items-center w-full h-full min-h-[50vh]'>
        <Loading loadingState={loading} itemLoading={'Properties Addresses'}>
          <p className='font-semibold mb-4'>Please enter your address:</p>
          <div className='w-full px-2 flex justify-center'>
            <ReactSearchAutocomplete
              items={data}
              name='propertyAddress'
              showIcon={false}
              placeholder='Enter Property Address'
              onSelect={handleOnSelect}
              onClear={handleOnClear}
              autoFocus
              className={'w-full md:w-1/2 placeholder-vb_gray-100 border-[1px] border-vb_gray-100 shadow-md shadow-vb_gray-300'}
              styling={{
                padding: '2px',
                height: '28px',
                borderRadius: '4px',
                zIndex: '1',
              }}
            />
          </div>
          <div className='flex justify-center sm:justify-start mt-8'>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              size={'normal'}
            />
          </div>
        </Loading>
        <span className='w-full md:w-3/5 px-4 flex flex-row justify-between mt-auto bottom-0'>
          <LinkBtn
            address={'/buy-your-home'}
            bgColor={'bg-vb_green-500'}
            bgColorHover={'hover:bg-vb_green-400'}
            paddingX={'px-12'}
            shadow={'yes'}
          >
            BACK
          </LinkBtn>
          <Btn 
            disabled={isClicked}           
            handleClick={() => onSubmit()}
            bgColor={'bg-vb_green-500'}
            bgColorHover={'hover:bg-vb_green-400'}
            paddingX={'px-12'}
            shadow={ address !== '' || propertyId !== '' ? 'yes' : null}
          >
            NEXT
          </Btn>
        </span>
      </div>
    </>
  )
}

export default OTPAddress
