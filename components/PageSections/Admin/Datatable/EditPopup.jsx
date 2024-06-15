import { useEffect, useState } from 'react'
import Btn from '../../../Hardware/Btn'
import ApiClient from '../../../../utils/ApiClient'
import Swal from 'sweetalert2'

const EditPopup = ({ visible, close, tableMeta, row, invoiceData, editedData, propertyData, vendorData }) => {
  const formData = row?.original

  const onChange = (e) => {
    tableMeta?.updateData(row.index, e.target.id, e.target.value, e.target.validity.valid)
    formData[`${e.target.id}`] = e.target.value
  }

  const submitData = async (event) => {
    event.preventDefault()
    const formdata = row?.original

    try {
      const updateData = await ApiClient.putRequest(`/properties/${row?.original?.id}`, formdata)

      if (updateData) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Updated data successfully',
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error while updating data',
        })
      }
    } catch (error) {
      console.error('Error during deleteRow:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error during update row operation',
      })
    }

    tableMeta?.setIsEditing(false)
    close()
  }

  const setEditedRows = async (e) => {
    tableMeta?.setIsEditing(false)
    tableMeta?.revertData(row.index, true)
    tableMeta?.setEditedRows((old) => ({
      ...old,
      [row.id]: !old[row.id],
    }))
  }

  if (!visible) {
    return null
  }

  return (
    <>
      <div className='z-50 fixed inset-0 backdrop-blur-md flex justify-center items-center'>
        <div className='justify-center items-center w-10/12 h-[90vh]'>
          <div className='bg-slate-100 rounded-md shadow-md shadow-vb_gray-500 h-full '>
            <div className='h-full'>
              <span className='flex justify-end p-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-8 h-8 text-vb_gray-300'
                  onClick={(e) => close(e)}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>

              <form
                id='saveData'
                onSubmit={(event) => submitData(event)}
                className='p-5 flex flex-col 2xl:gap-8 gap-4 justify-center'
              >
                <div className='flex flex-col gap-4 justify-center md:flex-row md:flex-wrap md:gap-4'>
                  <div className='flex flex-col w-full md:w-1/2'>
                    <label className='pb-3'>ID</label>
                    <span>{formData?.id}&nbsp;</span>
                  </div>
                  <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
                    <div className='w-full'>
                      <label>Address</label>
                      <input
                        name='address'
                        id='address'
                        type='text'
                        value={formData?.address}
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                      />
                    </div>
                  </div>
                </div>

                <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                  <div className='flex flex-col'>
                    <label>City</label>
                    <input
                      name='city'
                      id='city'
                      type='text'
                      value={formData?.city}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='pb-3'>State</label>
                    <input
                      name='state'
                      id='state'
                      type='text'
                      value={formData?.state}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='pb-3'>Zip</label>
                    <input
                      name='zip'
                      id='zip'
                      type='number'
                      value={formData?.zip}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='pb-3'>Market</label>
                    <input
                      name='market'
                      id='market'
                      type='text'
                      value={formData?.market}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                </div>
                <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                  <div className='flex flex-col'>
                    <label>Price</label>
                    <input
                      name='price'
                      id='price'
                      type='number'
                      value={formData?.price}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>ARV</label>
                    <input
                      name='arv'
                      id='arv'
                      value={formData?.arv}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Rehab</label>
                    <input
                      name='rehab'
                      id='rehab'
                      value={formData?.rehab}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                </div>

                <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                  <div className='flex flex-col'>
                    <label>Beds</label>
                    <input
                      name='beds'
                      id='beds'
                      type='number'
                      value={formData?.beds}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Baths</label>
                    <input
                      name='baths'
                      id='baths'
                      value={formData?.baths}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Build Area</label>
                    <input
                      name='area'
                      id='area'
                      value={formData?.area}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Lot Size</label>
                    <input
                      name='lot'
                      id='lot'
                      value={formData?.lot}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                </div>

                <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                  <div className='flex flex-col'>
                    <label>Latitude</label>
                    <input
                      name='latitude'
                      id='latitude'
                      type='number'
                      value={formData?.latitude}
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Longitude</label>
                    <input
                      name='longitude'
                      id='longitude'
                      value={formData?.longitude}
                      type='number'
                      onChange={(e) => onChange(e)}
                      className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label>Available Status</label>
                    <select
                      className='h-[38px] w-full bg-white placeholder-vb_gray-100 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                      onChange={(e) => onMultipleUtilitySelectChange(e, index)}
                      name='availableStatus'
                      id='availableStatus'
                      value={formData?.availableStatus}
                    >
                      <option key={'Yes'} value={'Y'}>
                        Yes
                      </option>
                      <option key={'No'} value={'N'}>
                        No
                      </option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-row justify-center gap-4 mb-5 mt-5'>
                  <Btn
                    label={'CLOSE'}
                    color={'bg-vb_gray-500'}
                    name='cancel'
                    colorHover={'hover:bg-vb_gray-400'}
                    textSize={'text-sm'}
                    mb={'mb-10'}
                    handleClick={(e) => {
                      close(e), setEditedRows(e)
                    }}
                  />
                  <Btn
                    label={'SAVE'}
                    color={'bg-vb_green-500'}
                    colorHover={'hover:bg-vb_green-400'}
                    textSize={'text-sm'}
                    mb={'mb-10'}
                    btnType={'submit'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPopup
