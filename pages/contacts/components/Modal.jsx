import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRef } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Btn from '@/components/Hardware/Btn'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ProspectiveResidentModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [screenWidth, screenHeight] = useWindowSize()
  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChanges',
    reValidateMode: 'onChange',
  })

  const MySwal = withReactContent(Swal)
  const recaptchaRef = useRef(null)

  const onSubmit = async (data) => {
    const recaptchaToken = recaptchaRef.current.getValue()
    const captchaRes = await verifyCaptcha(recaptchaToken)

    if (captchaRes) {
      try {
        await sendFormData(data)
        MySwal.fire({
          title: <strong>Thank you!</strong>,
          html: <i>We will answer you shortly!</i>,
          icon: 'success',
        })
      } catch (error) {
        MySwal.fire({
          title: <strong>Error</strong>,
          html: <i>There was an error processing your contact. Please, contact support</i>,
          icon: 'error',
        })
      }

      setIsOpen(false)
    } else {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>There was an error processing your contact. Please, contact support</i>,
        icon: 'error',
      })
    }
  }

  const verifyCaptcha = async (token) => {
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8081'
    const res = await fetch(`${backendUrl}/contacts/verifyCaptcha`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })

    return res.json()
  }

  const sendFormData = async (data) => {
    try {
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:8081'
      const res = await fetch(`${backendUrl}/contacts/saveProspectiveResidentForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      })

      reset()
      return res
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <span>
        <a
          href='#'
          className='underline text-blue-600 hover:text-blue-800'
          onClick={() => {
            setIsOpen(true)
          }}
        >
          Prospective Resident Inquiry Form
        </a>
      </span>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10 w-500'
          onClose={() => {
            clearErrors()
          }}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <span className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm'></span>
          </Transition.Child>

          <div className='fixed mt-52 inset-0 overflow-y-auto'>
            <BasicContainer>
              <div className='flex flex-col items-center justify-center my-10'>
                <div className='w-full bg-white bg-opacity-40 p-6 rounded-3xl shadow-md shadow-vb_gray-300'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='w-full bg-vb_white-500 py-6 px-4 rounded-2xl'>
                      <Dialog.Title
                        as='h3'
                        className='text-gray-900 text-3xl lg:text-4xl text-center font-black leading-tight mb-10'
                      >
                        SEND US A MESSAGE
                      </Dialog.Title>
                      <form className='w-full px-4' id='resident-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4'>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='name'
                              type='text'
                              placeholder='Your Name'
                              {...register('name', { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500 mb-2'>This field is required</span>}
                          </span>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='email'
                              type='email'
                              placeholder='Your Email'
                              {...register('email', { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500 mb-2'>This field is required</span>}
                          </span>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4'>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='phone-number'
                              type='number'
                              placeholder='Your Phone Number'
                              {...register('phone', { required: true })}
                            />
                            {errors.phone && <span className='text-sm text-red-500 mb-2'>This field is required</span>}
                          </span>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='location'
                              type='text'
                              placeholder='Location'
                              {...register('location', { required: true })}
                            />
                            {errors.location && (
                              <span className='text-sm text-red-500 mb-2'>This field is required</span>
                            )}
                          </span>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-0 sm:gap-x-4 lg:gap-y-4'>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='beds'
                              type='number'
                              placeholder='Beds'
                              {...register('beds', { required: true })}
                            />
                            {errors.beds && <span className='text-sm text-red-500 mb-2'>This field is required</span>}
                          </span>
                          <span className='flex flex-col'>
                            <input
                              className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                              id='rentPrice'
                              type='number'
                              placeholder='Desired Rent'
                              {...register('rentPrice', { required: true })}
                            />
                            {errors.rentPrice && (
                              <span className='text-sm text-red-500 mb-2'>This field is required</span>
                            )}
                          </span>
                          <span className='flex flex-col'>
                            <Controller
                              name='moveInDate'
                              control={control}
                              errors={errors}
                              onChange={([selected]) => {
                                return { value: selected }
                              }}
                              render={({ field }) => (
                                <DatePicker
                                  dateFormat='d MMM yyyy'
                                  minDate={new Date()}
                                  onChange={(date) => field.onChange(date)}
                                  selected={field.value}
                                  showTimeSelect={false}
                                  todayButton='Today'
                                  dropdownMode='select'
                                  isClearable
                                  placeholderText='Desired Move-in Date'
                                  shouldCloseOnSelect
                                  className='w-full bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                                />
                              )}
                              {...register('moveInDate', { required: true })}
                            />
                            {errors.moveInDate && (
                              <span className='text-sm text-red-500 mb-2'>This field is required</span>
                            )}
                          </span>
                        </div>
                        <div>
                          <textarea
                            className='w-full h-32 bg-white focus:bg-white leading-tight placeholder:text-black py-3 px-4 mb-3 rounded-md shadow-md shadow-vb_gray-200'
                            id='comments'
                            type='number'
                            placeholder='Questions/Comments'
                            {...register('comments', { required: true })}
                          />
                          {errors.comments && <span className='text-sm text-red-500 mb-2'>This field is required</span>}
                        </div>
                        <div className='flex justify-center sm:justify-start'>
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey='6Lc8pT0oAAAAALSX-_2dXlIZ-SxGbyQt4tIgBtyK'
                            size={screenWidth < 640 ? 'compact' : 'normal'}
                          />
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
                <span className='flex flex-row justify-center mt-10'>
                  <Btn
                    btnType={'submit'}
                    formName={'resident-form'}
                    bgColor={'bg-vb_green-500'}
                    bgColorHover={'hover:bg-vb_green-400'}
                    paddingX={'px-10'}
                    shadow={'yes'}
                  >
                    SUBMIT
                  </Btn>
                </span>
              </div>
            </BasicContainer>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ProspectiveResidentModal
