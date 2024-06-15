import React, { useState } from 'react'
import EditCell from '@/components/PageSections/Admin/Datatable/EditCell'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

// Create columns without TypeScript type annotations
const columnHelper = createColumnHelper()

const columns = [
  columnHelper.display({
    id: 'edit',
    header: 'Action',
    cell: EditCell,
  }),
  columnHelper.accessor((row) => row.address, {
    id: 'address',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Address</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('city', {
    header: () => 'City',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('state', {
    header: () => <span>State</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('zip', {
    header: 'Zip',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('market', {
    header: () => <span>Market</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('beds', {
    header: 'Beds',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('baths', {
    header: 'Baths',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('area', {
    header: () => <span>Area</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('latitude', {
    header: 'Latitude',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('longitude', {
    header: 'Longitude',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('availableStatus', {
    header: 'Available Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('arv', {
    header: 'ARV',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('rehab', {
    header: 'Rehab cost',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lot', {
    header: 'Lot Size',
    footer: (info) => info.column.id,
  }),
]

const PropertyTable = ({ properties }) => {
  const [data, setData] = useState(() => [...properties])
  const [validRows, setValidRows] = useState({})
  const [editedRows, setEditedRows] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [rowData, setRowData] = useState([])
  const [editedData, setEditedData] = useState([])
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility: { ID: false },
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    autoResetAll: false,
    meta: {
      isEditing,
      setIsEditing,
      editedRows,
      setEditedRows,
      validRows,
      setValidRows,
      setShowEditModal,
      setRowData,
      revertData: (rowIndex, revert) => {
        setEditedData((old) => {
          if (revert) {
            return old.map((row, index) => (index === rowIndex ? initialData[rowIndex] : row))
          } else {
            return old.map((row, index) => (index === rowIndex ? editedData[rowIndex] : row))
          }
        })
      },
      updateData: (rowIndex, columnId, value, isValid) => {
        setEditedData((old) => {
          const updatedRow = {
            ...old[rowIndex],
            [columnId]: value,
          }
          return [...old.slice(0, rowIndex), updatedRow, ...old.slice(rowIndex + 1)]
        })
        setValidRows((old) => ({
          ...old,
          [rowIndex]: { ...old[rowIndex], [columnId]: isValid },
        }))
      },
    },
  })

  const closeEditModal = (e) => {
    setShowEditModal(false)
    table.options.meta?.setIsEditing(false)
  }

  return (
    <div className='p-4 bg-white shadow-md rounded-lg overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='hover:bg-gray-100'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='h-2' />
      <div className='flex items-center gap-2'>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button className='border rounded p-1' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className='flex items-center gap-1'>
          | Go to page:
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded w-16'
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{Object.keys(table.getRowModel().rowsById).length} Rows</div>
    </div>
  )
}

export default PropertyTable
