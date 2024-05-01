import Image from 'next/image'
import WhyImg from '@/public/img/pages/aboutus/why.jpg'
import WhereImg from '@/public/img/pages/aboutus/where.png'
import EmployeeImg from '@/public/img/pages/aboutus/employee.jpg'
import CityImg from '@/public/img/pages/aboutus/city.jpg'
import SummerImg from '@/public/img/pages/aboutus/summer.jpg'

const Sidebar = () => {
  return (
    <aside className='flex flex-col items-center w-full lg:w-1/3 bg-vb_green-700 px-10 py-16 overflow-y-scroll scrollbar-thin scrollbar-track-vb_green-300 lg:scrollbar-track-vb_green-400 scrollbar-thumb-vb_gray-100 scrollbar-corner-md scrollbar-thumb-rounded-2xl'>
      <ul className='w-full h-full grid grid-flow-row gap-4 [&>li]:bg-vb_green-200 [&>li]:border-[16px] [&>li]:border-vb_green-200 [&>li]:rounded-3xl'>
        <li>
          <Image
            src={WhyImg}
            alt='Why Vinebrook'
            width={0}
            height={0}
            sizes={100}
            className='w-full h-full rounded-2xl'
          />
        </li>
        <li>
          <Image
            src={WhereImg}
            alt='Where is Vinebrook'
            width={0}
            height={0}
            sizes={100}
            className='w-full h-full rounded-2xl'
          />
        </li>
        <li>
          <Image
            src={SummerImg}
            alt='Summer Maintenance'
            width={0}
            height={0}
            sizes={100}
            className='w-full h-full rounded-2xl'
          />
        </li>
        <li>
          <Image src={CityImg} alt='City' width={0} height={0} sizes={100} className='w-full h-full rounded-2xl' />
        </li>
        <li>
          <Image
            src={EmployeeImg}
            alt='Vinebrook Employee Appreciation'
            width={0}
            height={0}
            sizes={100}
            className='w-full h-full rounded-2xl'
          />
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
