import Swal from 'sweetalert2'
import ApiClient from '../../../../utils/ApiClient'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'

const EditCell = ({ row, table }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  const meta = table.options.meta
  // console.log(row, table)
  const fetchData = async (e) => {
    const elName = e?.target?.parentElement?.id ?? e.target.id
    console.log(row?.original?.id)
    meta.setShowEditModal(true)
    meta.setRowData(row)

    if (elName === 'edit' && meta?.isEditing) {
      return
    } else if (elName === 'edit' && !meta?.isEditing) {
      meta?.setIsEditing(true)
    }
    meta?.setEditedRows((old) => ({
      ...old,
      [row.id]: !old[row.id],
    }))
  }

  const deleteRow = async () => {
    try {
      const deleteRowResponse = await ApiClient.deleteRequest(`/properties/${row?.original?.id}`)
      console.log(deleteRowResponse)
      if (deleteRowResponse.message == 'Property deleted successfully') {
        setIsDeleted(true)
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
        text: 'Error during delete row operation',
      })
    }
  }

  return (
    <span className='w-11 flex flex-row justify-center'>
      <button
        onClick={(e) => {
          fetchData(e)
        }}
        name='edit'
        id='edit'
        disabled={isDeleted}
        className={` ${
          isDeleted ? 'cursor-not-allowed bg-gray-200 ' : 'hover:bg-yellow-600 bg-yellow-500 hover:shadow-vb_gray-400'
        } rounded-l-full shadow-sm hover:shadow-md shadow-vb_gray-300  transition-all duration-150 ease-in-out`}
      >
        <p className='text-xl text-white px-[3px] rotate-90 transition-all duration-150 ease-in-out'>✐</p>
      </button>
      <button
        onClick={deleteRow}
        name='remove'
        id='remove'
        disabled={isDeleted}
        className={`  ${
          isDeleted ? 'cursor-not-allowed bg-gray-200' : 'hover:bg-red-600 bg-red-500 hover:shadow-vb_gray-400'
        }  rounded-r-full shadow-sm hover:shadow-md shadow-vb_gray-300  transition-all duration-150 ease-in-out`}
      >
        <p className='text-lg text-white px-[7px] transition-all duration-150 ease-in-out'>
          <FaTrashAlt />
        </p>
      </button>
    </span>
  )
}

export default EditCell
