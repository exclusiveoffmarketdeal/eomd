import LinkBtn from '@/components/Hardware/LinkBtn'
import Btn from '@/components/Hardware/Btn'
import { useState } from 'react'

const AcknowledgeAndAddress = () => {
  let [addressOn, setAddressOn] = useState(false)
  let [confirmOn, setConfirmOn] = useState(false)
  return (
    <>
      {addressOn === false ? (
        <div className='flex flex-col items-center'>
          <p>
            You acknowledge and agree that providing personal information to VineBrook is entirely voluntary. VineBrook
            shall be free to use such personal information in connection with the Hardship Relief Program and other
            services provided to you. VineBrook may also share or disclose such personal information to its vendors,
            affiliates, agents, advisors or service providers. Unless prohibited by applicable law, you acknowledge and
            agree, and hereby waive and release VineBrook from any claims or liabilities arising from or in connection
            with the personal information, or with your application to participate in the Hardship Relief Program. You
            agree you shall not bring or participate in any class action or other class proceeding, including class
            arbitration, in connection with any dispute arising from or in connection with the Hardship Relief Program
            or the personal information disclosed.
          </p>
          <p className='text-center font-semibold mt-28'>Confirm by clicking next</p>
          <span className='w-3/5 flex flex-row justify-between mt-16'>
            <LinkBtn
              address={'/resident/hardship'}
              bgColor={'bg-vb_green-500'}
              bgColorHover={'hover:bg-vb_green-400'}
              paddingX={'px-12'}
              shadow={'yes'}
            >
              BACK
            </LinkBtn>
            <Btn
              handleClick={() => setAddressOn(true)}
              bgColor={'bg-vb_green-500'}
              bgColorHover={'hover:bg-vb_green-400'}
              paddingX={'px-12'}
              shadow={'yes'}
            >
              NEXT
            </Btn>
          </span>
        </div>
      ) : (
        <>
          {confirmOn === false ? (
            <div className='flex flex-col items-center'>
              <p className='font-semibold mb-4'>Please enter your address:</p>
              <form action='' className='flex flex-row justify-center w-full'>
                <input
                  type='text'
                  placeholder='Property Address'
                  className='w-1/2 placeholder-vb_gray-100 px-2 py-1 border-[1px] border-vb_gray-100 rounded-md shadow-md shadow-vb_gray-300'
                />
              </form>
              <span className='w-3/5 flex flex-row justify-between mt-28'>
                <Btn
                  handleClick={() => setAddressOn(false)}
                  bgColor={'bg-vb_green-500'}
                  bgColorHover={'hover:bg-vb_green-400'}
                  paddingX={'px-12'}
                  shadow={'yes'}
                >
                  BACK
                </Btn>
                <Btn
                  handleClick={() => setConfirmOn(true)}
                  btnType={'submit'}
                  bgColor={'bg-vb_green-500'}
                  bgColorHover={'hover:bg-vb_green-400'}
                  paddingX={'px-12'}
                  shadow={'yes'}
                >
                  NEXT
                </Btn>
              </span>
            </div>
          ) : (
            <div div className='flex flex-col items-center'>
              <h2>
                Please select the phone number or email you would like to use to receive a one-time passcode to verify
                your account.
              </h2>
              <p className='text-xs mt-12 mb-2'>Click here to update your resident contact information</p>
              <LinkBtn
                address={''}
                newTab={'yes'}
                bgColor={'bg-vb_green-500'}
                bgColorHover={'hover:bg-vb_green-400'}
                paddingX={'px-12'}
                shadow={'yes'}
              >
                UPDATE INFORMATION
              </LinkBtn>
              <p className='font-semibold mt-12'>I want to receive my one-time passcode on my:</p>

              <form action='' className='flex flex-col items-center w-3/5 mt-2'>
                <div className='flex flex-row justify-between w-1/2'>
                  <span className='w-full text-center'>
                    <input type='radio' value={'phone'} name='contactChoice' className='mr-2' />
                    <label htmlFor='phone'>Phone</label>
                  </span>

                  <span className='w-full text-center'>
                    <input type='radio' value={'email'} name='contactChoice' className='mr-2' />
                    <label htmlFor='email'>Email</label>
                  </span>
                </div>
                <table className='w-full bg-vb_gray-100 border-[1px] border-separate rounded-lg mt-8'>
                  <tr className='text-center'>
                    <th className='bg-white rounded-tl-md'>CHOOSE ONE</th>
                    <th className='bg-white'>PHONE</th>
                    <th className='bg-white rounded-tr-md'>EMAIL</th>
                  </tr>
                  <tr className='text-center'>
                    <td className='bg-white py-2 rounded-bl-md'>
                      <input type='radio' value={'chooseOne'} />
                    </td>
                    <td className='bg-white py-2'>111-111-1111</td>
                    <td className='bg-white py-2 rounded-br-md'>test.email@email.com</td>
                  </tr>
                </table>
              </form>
              <span className='w-3/5 flex flex-row justify-between mt-10'>
                <Btn
                  handleClick={() => setConfirmOn(false)}
                  bgColor={'bg-vb_green-500'}
                  bgColorHover={'hover:bg-vb_green-400'}
                  paddingX={'px-12'}
                  shadow={'yes'}
                >
                  BACK
                </Btn>
                <Btn
                  handleClick={''}
                  btnType={'submit'}
                  bgColor={'bg-vb_green-500'}
                  bgColorHover={'hover:bg-vb_green-400'}
                  paddingX={'px-12'}
                  shadow={'yes'}
                >
                  CONTINUE
                </Btn>
              </span>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default AcknowledgeAndAddress
