import { useEffect, useState } from 'react'
import Btn from '../../../Hardware/Btn'
import ApiClient from '../../../../utils/ApiClient'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Swal from 'sweetalert2'
import ToolTip from '../../../Hardware/ToolTip'
import { MdInfoOutline } from 'react-icons/md'
import { useMsal } from '@azure/msal-react'
import { FaTrashAlt } from 'react-icons/fa'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const EditPopup = ({ visible, close, tableMeta, row, invoiceData, editedData, propertyData, vendorData }) => {
  const [successMsg, setSuccessMsg] = useState(false)
  const [utilityMultiple, setUtilityMultiple] = useState(false)
  const { accounts } = useMsal()
  const userName = accounts[0]?.name

  const formData = row?.original
  const [utilityMultipleCount, setUtilityMultipleCount] = useState(1)
  const [utilityDetails, setUtilityDetails] = useState({})

  useEffect(() => {
    setUtilityDetails(formData?.billItems)
  }, [formData?.billItems])

  useEffect(() => {
    setUtilityMultipleCount(utilityDetails?.length)
  }, [utilityDetails?.length])

  //property dropdown select
  const onPropertySelectChange = (e) => {
    tableMeta?.updateData(row.index, 'PropertyAddress', e.PropertyAddress, true)
    tableMeta?.updateData(row.index, 'propertyID', e.PropertyID, true)
    tableMeta?.updateData(row.index, 'Region', e.Region, true)
    tableMeta?.updateData(row.index, 'Market', e.Market, true)

    formData.PropertyAddress = e.PropertyAddress
    formData.propertyID = e.PropertyID
    formData.Region = e.Region
    formData.Market = e.Market

    if (formData?.UtilityType) {
      const vendorID = vendorData.find(
        (data) => data.PropertyID === e.PropertyID && data.UtilityType === formData?.UtilityType
      )
      tableMeta?.updateData(row.index, 'vendorID', vendorID?.VendorID, true)
      tableMeta?.updateData(row.index, 'Vendor_Name_Actual', vendorID?.CompanyName, true)

      formData.vendorID = vendorID?.VendorID
      formData.Vendor_Name_Actual = vendorID?.CompanyName
    }
  }

  const onUtilitySelectChange = (e) => {
    tableMeta?.updateData(row.index, 'UtilityType', e.target.value, true)
    formData.UtilityType = e.target.value

    if (formData?.propertyID) {
      const vendorID = vendorData.find(
        (data) => data.PropertyID === formData?.propertyID && data.UtilityType === e.target.value
      )
      tableMeta?.updateData(row.index, 'vendorID', vendorID?.VendorID, true)
      tableMeta?.updateData(row.index, 'Vendor_Name_Actual', vendorID?.CompanyName, true)

      formData.vendorID = vendorID?.VendorID
      formData.Vendor_Name_Actual = vendorID?.CompanyName
    }
  }

  const onPropertyClear = (e) => {
    tableMeta?.updateData(row.index, 'PropertyAddress', '', true)
    tableMeta?.updateData(row.index, 'propertyID', '', true)
    tableMeta?.updateData(row.index, 'Region', '', true)
    tableMeta?.updateData(row.index, 'Market', '', true)
    tableMeta?.updateData(row.index, 'vendorID', '', true)
    tableMeta?.updateData(row.index, 'Vendor_Name_Actual', '', true)

    formData.PropertyAddress = ''
    formData.propertyID = ''
    formData.Region = ''
    formData.Market = ''
    formData.vendorID = ''
    formData.Vendor_Name_Actual = ''
  }

  const onChange = (e) => {
    tableMeta?.updateData(row.index, e.target.id, e.target.value, e.target.validity.valid)
    formData[`${e.target.id}`] = e.target.value
  }

  //toggle for expand/colapse multiple utility
  const toggleUtilityMultiple = (e) => {
    e.preventDefault()
    setUtilityMultiple(!utilityMultiple)
  }

  //add row in multiple utility
  const handleAddClick = (e, Id) => {
    e.preventDefault()
    setUtilityMultipleCount(utilityMultipleCount + 1)

    const UtilityDetails = {
      BillID: Id,
      UtilityType: 'Electric',
      UtilityAmount: null,
    }
    const newBillItems = utilityDetails ? [...utilityDetails, UtilityDetails] : [UtilityDetails]
    setUtilityDetails(newBillItems)
  }

  //utility type-multiple utility
  const onUtilityAmountChange = (e, index) => {
    const updatedBillItems = [...utilityDetails]
    updatedBillItems[index] = {
      ...updatedBillItems[index],
      UtilityAmount: e.target.value,
    }
    setUtilityDetails(updatedBillItems)
  }

  //utility amount-multiple utility
  const onMultipleUtilitySelectChange = (e, index) => {
    const updatedBillItems = [...utilityDetails]
    updatedBillItems[index] = {
      ...updatedBillItems[index],
      UtilityType: e.target.value,
    }
    setUtilityDetails(updatedBillItems)
  }

  //delete row from multiple utility
  const deleteUtilityRow = (e, DetailID, index) => {
    e.preventDefault()
    const updatedBillItems = [...utilityDetails]
    updatedBillItems?.splice(index, 1)
    setUtilityDetails(updatedBillItems)
  }

  const options = [
    { value: 'Electric', label: 'Electric' },
    { value: 'Water', label: 'Water' },
    { value: 'Sewer', label: 'Sewer' },
    { value: 'Trash', label: 'Trash' },
    { value: 'Gas', label: 'Gas' },
  ]

  const submitData = async (event) => {
    event.preventDefault()

    const formData = row?.original
    const duplicateInvoices = invoiceData.filter((invoice) => invoice.Invoice_Number === formData.Invoice_Number)
    try {
      const isDifferent = JSON.stringify(utilityDetails) !== JSON.stringify(formData?.billItems)
      if (isDifferent) {
        utilityDetails.forEach(async (item) => {
          const existingItem = formData?.billItems?.find((existingItem) => existingItem.DetailID === item.DetailID)

          if (existingItem) {
            const updateData = await ApiClient.putRequest('/utility-bill/update-utility-details', item)
          }
        })
      }

      //logic for delete and add utility type
      if (utilityDetails !== formData?.billItems) {
        const newUtilityRows = utilityDetails.filter((item) => item.DetailID === undefined)
        newUtilityRows?.forEach(async (formData) => {
          const insertData = await ApiClient.postRequest('/utility-bill/insert-utility-details', formData)
        })

        //delete utility
        const billItemDetailIDs = utilityDetails?.map((item) => item.DetailID)?.filter(Boolean)
        const ExistingDeatailIDs = formData?.billItems?.map((item) => item.DetailID)?.filter(Boolean)
        const deletedUtilityRows = ExistingDeatailIDs?.filter((id) => !billItemDetailIDs?.includes(id))

        deletedUtilityRows?.forEach(async (id) => {
          const payload = { ID: id }
          const deleteData = await ApiClient.deleteRequest('/utility-bill/delete-utility-details', payload)
        })
      }
    } catch (error) {
      console.error('Error while adding or deleting utility details:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error while adding or deleting utility details',
      })
    }

    formData.LastUser = userName
    delete formData.CreatedDate
    delete formData.Region
    delete formData.Market
    delete formData.billItems

    if (duplicateInvoices.length > 0 && duplicateInvoices.filter((invoice) => invoice.ID === formData.ID).length < 1) {
      formData.AIStatus = 'Duplicate'
      formData.AIComments = `Duplicate invoice number: ${formData.Invoice_Number}`
      delete formData.UpdateSF
      formData.UpdateSF = 2

      try {
        const updateData = await ApiClient.putRequest('/utility-bill/update-row-data', formData)

        if (updateData) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Duplicate Invoice Number',
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
    } else {
      if (!Object.values(formData).includes(null)) {
        formData.AIStatus = 'Pending'
        formData.AIComments = 'None'
        delete formData.UpdateSF
        formData.UpdateSF = 1
        //send POST request to azure function to update ptah of doc
        const jsonData = {
          Id: formData?.ID,
          docURL: formData?.docURL,
          remove: false,
          propertyID: formData?.propertyID,
        }

        try {
          const updateData = await ApiClient.putRequest('/utility-bill/update-row-data', formData)
          const updateFunctionResponse = await ApiClient.functionPostRequest(jsonData)

          if (updateData && updateFunctionResponse?.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Updated data successfully',
            })
          } else if (updateFunctionResponse?.status === 500) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error while moving file',
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error while updating data',
            })
          }
        } catch (error) {
          console.error('Error during update row:', error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error during update row operation',
          })
        }
      } else {
        try {
          const updateData = await ApiClient.putRequest('/utility-bill/update-row-data', formData)

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
      }
    }

    tableMeta?.setIsEditing(false)
    close()
    tableMeta?.onRefresh()
  }

  const setEditedRows = async (e) => {
    tableMeta?.setIsEditing(false)
    tableMeta?.revertData(row.index, true)
    // setUtilityDetails(formData?.billItems)
    setUtilityMultiple(false)
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
          <div className='bg-slate-100 rounded-md shadow-md shadow-vb_gray-500 h-full flex flex-row'>
            <div className='rounded-md shadow-md shadow-vb_gray-500 w-1/2'>
              <iframe
                // src={`https://docs.google.com/viewer?url=${encodeURIComponent(formData?.docURL)}&embedded=true`}
                src={formData?.docURL}
                type='application/pdf'
                width='100%'
                height='100%'
                style={{ border: 'none' }}
              />
            </div>
            <div className='flex justify-center flex-col w-1/2 overflow-x-auto'>
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
                      <label>Invoice Number</label>
                      <input
                        name='Invoice_Number'
                        id='Invoice_Number'
                        value={formData?.Invoice_Number}
                        type='number'
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px] hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out'
                      />
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
                      <label>Due Date</label>
                      <input
                        name='Due_Date'
                        id='Due_Date'
                        type='date'
                        value={formData?.Due_Date}
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px] hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out'
                      />
                    </div>

                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
                      <label>Start Date</label>
                      <input
                        name='Service_Start_Date'
                        id='Service_Start_Date'
                        value={formData?.Service_Start_Date}
                        type='date'
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px] hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out'
                      />
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/4'>
                      <label>End Date</label>
                      <input
                        name='Service_End_Date'
                        id='Service_End_Date'
                        value={formData?.Service_End_Date}
                        type='date'
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px] hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out'
                      />
                    </div>
                  </div>

                  <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                    <div className='flex flex-col'>
                      <label>Type</label>
                      <select
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                        onChange={onUtilitySelectChange}
                        value={formData?.UtilityType}
                      >
                        {options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='flex flex-col'>
                      <label className='pb-3'>Vendor ID</label>
                      <span className='pb-2'>{formData?.vendorID}&nbsp;</span>
                    </div>
                    <div className='flex flex-col'>
                      <label className='pb-3'>Vendor Name</label>
                      <ToolTip text={formData?.Vendor_Name}>
                        <span className='flex flex-row justify-between items-center pb-2'>
                          <p className='w-full truncate'>{formData?.Vendor_Name}&nbsp;</p>
                          <MdInfoOutline className='text-vb_teal-600' />
                        </span>
                      </ToolTip>
                    </div>
                    <div className='flex flex-col'>
                      <label className='pb-3'>Market</label>
                      <span>{formData?.Market}&nbsp;</span>
                    </div>
                    <div className='flex flex-col'>
                      <label className='pb-3'>Region</label>
                      <span>{formData?.Region}&nbsp;</span>
                    </div>
                  </div>
                  <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                    <div className='w-1/3'>
                      <label>Property Address</label>
                      <ReactSearchAutocomplete
                        items={propertyData}
                        id='propertyAddress'
                        name='propertyAddress'
                        showIcon={false}
                        onSelect={onPropertySelectChange}
                        onClear={onPropertyClear}
                        value={formData?.PropertyAddress}
                        placeholder={formData?.PropertyAddress ?? ''}
                        fuseOptions={{ keys: ['PropertyAddress'] }}
                        resultStringKeyName='PropertyAddress'
                        styling={{
                          padding: '2px',
                          height: '38px',
                          borderWidth: '1px',
                          borderRadius: '4px',
                          borderColor: '#ccd4d8',
                          // width: '100%',
                          zIndex: '1',
                        }}
                      />
                    </div>
                    <div className='flex flex-col w-1/3'>
                      <label className='pb-3'>Service Address</label>
                      <span className='flex flex-row justify-between items-center pb-2'>
                        <p className='w-full'>{formData?.Service_Address}&nbsp;</p>
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                    <div className='flex flex-col'>
                      <label>Total Balance</label>
                      <input
                        name='Total_Bill'
                        id='Total_Bill'
                        type='number'
                        value={formData?.Total_Bill}
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label>Previous Balance</label>
                      <input
                        name='Previous_Balance'
                        id='Previous_Balance'
                        value={formData?.Previous_Balance}
                        type='number'
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label>Utility Amount</label>
                      <input
                        name='Utility_Amount'
                        id='Utility_Amount'
                        value={formData?.Utility_Amount}
                        type='number'
                        onChange={(e) => onChange(e)}
                        className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-4 w-full justify-around bg-vb_gray-100'>
                    <button
                      onClick={(e) => toggleUtilityMultiple(e)}
                      id='expandUtilityMultiple'
                      className=' transition-all duration-150 ease-in-out'
                    >
                      <p className='text-4xl text-black p-[7px] transition-all duration-150 ease-in-out'>
                        {!utilityMultiple ? <CiCirclePlus /> : <CiCircleMinus />}
                      </p>
                    </button>
                    {!utilityMultiple ? null : (
                      <>
                        {Array.from({ length: utilityMultipleCount }).map((_, index) => (
                          <>
                            <div
                              key={index}
                              className='flex flex-row gap-4 w-full justify-around pb-2 bg-vb_gray-100 mt-5'
                            >
                              <div className='flex flex-row gap-8'>
                                <label>Utility Type</label>
                                <select
                                  className='h-[38px] w-full bg-white placeholder-vb_gray-100 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                                  onChange={(e) => onMultipleUtilitySelectChange(e, index)}
                                  name='Utility_Type'
                                  id={utilityDetails?.[index]?.DetailID}
                                  value={utilityDetails?.[index]?.UtilityType}
                                >
                                  {options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className='flex flex-row gap-8'>
                                <label>Amount</label>
                                <input
                                  name='Utility_Amount'
                                  id={utilityDetails?.[index]?.DetailID}
                                  type='number'
                                  value={utilityDetails?.[index]?.UtilityAmount}
                                  onChange={(e) => onUtilityAmountChange(e, index)}
                                  className='h-[38px] w-full bg-white placeholder-vb_gray-300 px-2 rounded-[4px]  hover:shadow-md border hover:shadow-vb_gray-200 transition-all duration-150 ease-in-out '
                                />
                              </div>

                              <button
                                onClick={(e) => deleteUtilityRow(e, utilityDetails?.[index]?.DetailID, index)}
                                name='removeUtilityRow'
                                id='removeUtilityRow'
                                className='shadow-sm  rounded-lg hover:shadow-md shadow-vb_red-300 bg-vb_gray-100 transition-all duration-150 ease-in-out'
                              >
                                <p className='text-xl text-vb_red-100 px-[7px] transition-all duration-150 ease-in-out'>
                                  <FaTrashAlt />
                                </p>
                              </button>
                            </div>
                          </>
                        ))}
                        <div className='flex flex-row justify-center gap-4'>
                          <Btn
                            label={'Add More Utility'}
                            color={'bg-vb_gray-500'}
                            name='addUtility'
                            width={'w-40'}
                            type={'button'}
                            colorHover={'hover:bg-vb_gray-400'}
                            textSize={'text-sm'}
                            handleClick={(e) => handleAddClick(e, formData?.ID)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className='flex flex-row gap-4 w-full justify-around pb-2'>
                    <div className='flex flex-col'>
                      <label className='pb-3'>AI Comments</label>
                      <span className='flex flex-row justify-between items-center'>
                        <p className='w-full'>{formData?.AIComments}&nbsp;</p>
                      </span>
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
                      type={'submit'}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditPopup
