import React, { useState } from 'react'

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Create columns without TypeScript type annotations
const columnHelper = createColumnHelper()

const columns = [
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
  const [data, _setData] = useState(() => [...properties])
  console.log(data, properties)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

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
    </div>
  )
}

export default PropertyTable
