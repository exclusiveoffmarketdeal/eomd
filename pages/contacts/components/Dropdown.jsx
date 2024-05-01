import { Listbox, Transition } from '@headlessui/react'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'

const cities = [
  {
    name: 'Atlanta',
    address: 'Coming Soon!!',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Augusta',
    address: '2531 Center West Parkway, Suite 100, Augusta, GA 30907',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Birmingham',
    address: '201 London Parkway, Suite 500, Birmingham, Alabama 35211',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Cincinatti',
    address: '4856 Business Center Way, Cincinnati, OH 45246',
    phone: '+1(855)513-5678',
    fax: '513-297-5263',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Columbia',
    address: '400 Northeast Drive, Suite D, Columbia, SC 29203',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Columbus',
    address: '790 Morrison Rd. Gahanna, OH 43230',
    phone: '+1(855)513-5678',
    fax: '614-569-0248',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Dayton',
    address: '3500 Park Center Dr Suite 100, Dayton, OH 45414',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Greenville',
    address: 'Coming Soon!!',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Huntsville',
    address: 'Coming Soon!!',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Indianapolis',
    address: '9150 Harrison Park Court, Suite C, Indianapolis, IN 46216',
    phone: '+1(855)513-5678',
    fax: '317-252-0844',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Jackson',
    address: '100 Business Park Dr. Suite. G, Ridgeland, Mississippi 39157',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Kansas City',
    address: '6100 Connecticut Avenue, Kansas City, Missouri 64120',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Little Rock',
    address: 'Coming Soon!!',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Memphis',
    address: '4157 Willow Lake Blvd Memphis, TN 38118',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Milwaukee',
    address: '3415 N 127th St. Suite 300, Brookfield, WI 53005',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Montgomery',
    address: 'Coming Soon!!',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Omaha',
    address: '8710 F St Ste 118 Omaha, NE 68127',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Pensacola',
    address: '531 Carrier Dr, Pensacola FL 32506',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Pittsburgh',
    address: '2809 Banksville Rd Pittsburgh, PA 15216',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Portales',
    address: '1302 Cannon Blvd, Portales NM 88130',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Reaford',
    address: '300 Bellflower Circle, Raeford NC 28376',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'St. Louis',
    address: '149 Weldon Parkway, Suite 117, Maryland Heights, MO 63043',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
  {
    name: 'Triad',
    address: '3650 Patterson Avenue, Suite F Winston-Salem, North Carolina 27105',
    phone: '+1(855)513-5678',
    fax: '937-660-9431',
    payrollFax: '937-660-9430',
  },
]

const Dropdown = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0])
  let pinIcon = '/img/pages/contacts/pin.svg'
  let phoneIcon = '/img/pages/contacts/phone.svg'
  let faxIcon = '/img/pages/contacts/fax.svg'

  return (
    <div className='flex flex-col items-center w-full mt-10'>
      <div className='w-full sm:w-3/4 lg:w-1/2'>
        <Listbox className=' mb-20' as='div' value={selectedCity.name} onChange={setSelectedCity}>
          {({ open }) => (
            <>
              <div className='relative'>
                <span className='inline-block w-full'>
                  <Listbox.Button className='w-full bg-vb_white-100 text-blue-800 text-left font-bold tracking-wider pl-3 py-2 rounded-lg shadow-md shadow-vb_gray-200'>
                    <span className='block truncate'>{selectedCity.name}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                      <MdKeyboardArrowDown className='h-6 w-6 text-gray-500' aria-hidden='true' />
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave='transition ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-10 w-full h-56 bg-vb_white-100 text-md text-vb_blue-600 overflow-auto py-1 ring-1 ring-vb_gray-200 shadow-md shadow-vb_gray-200'>
                    {cities.map((city) => (
                      <Listbox.Option key={city.name} value={city}>
                        {({ active }) => (
                          <div
                            className={`relative px-4 py-2 cursor-pointer ${
                              active ? 'text-white bg-vb_blue-500' : 'text-vb_blue-600'
                            }`}
                          >
                            <span>{city.name}</span>
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
      <div className='self-center w-full sm:w-3/4 lg:w-1/2 mb-10'>
        <li className='flex flex-col'>
          <ul className='flex'>
            <Image src={pinIcon} width={0} height={0} sizes={100} alt={'pinIcon'} className='w-10 mr-2' />
            <p className='text-lg font-light leading-10 my-1'>{selectedCity.address}</p>
          </ul>
          <ul className='flex mt-2'>
            <Image src={phoneIcon} width={0} height={0} sizes={100} alt={'phoneIcon'} className='w-8 mr-2' />
            <p className='text-lg font-light leading-10 my-1 ml-2'>{selectedCity.phone}</p>
          </ul>
          <ul className='flex mt-2'>
            <Image src={faxIcon} width={0} height={0} sizes={100} alt={'faxIcon'} className='w-10 mr-2' />
            <p className='text-lg font-light leading-10 my-1'>Fax: {selectedCity.fax}</p>
          </ul>
          <ul className='flex mt-2'>
            <Image src={faxIcon} width={0} height={0} sizes={100} alt={'faxIcon'} className='w-10 mr-2' />
            <p className='text-lg font-light leading-10 my-1'>HR/Payroll Fax: {selectedCity.payrollFax}</p>
          </ul>
        </li>
      </div>
    </div>
  )
}

export default Dropdown
