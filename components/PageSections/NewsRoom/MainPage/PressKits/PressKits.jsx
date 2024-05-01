import pressKitOne from '@/public/img/pages/NewsRoom/Press-Kit-1.png'
import pressKitTwo from '@/public/img/pages/NewsRoom/Press-Kit-2.png'
import pressKitThree from '@/public/img/pages/NewsRoom/Press-Kit-3.png'
import pressKitFour from '@/public/img/pages/NewsRoom/Press-Kit-4.png'
import PressKitCard from './PressKitCard'

const PressKits = () => {
  return (
    <>
      <section className='w-full h-fit bg-vb_white-100'>
        <h2 className='text-vb_blue-800 text-4xl font-semibold pl-4 md:pl-20 mt-4'>PRESS KITS</h2>
        <div className='w-fit grid grid-cols-2 px-4 md:px-20 my-8 gap-8 mb-20'>
          <PressKitCard pressImg={pressKitOne} pressLink={'newsroom/homes-exterior'} pressTitle={'HOMES EXTERIOR'} />
          <PressKitCard pressImg={pressKitTwo} pressLink={'newsroom/homes-interior'} pressTitle={'HOMES INTERIOR'} />
          <PressKitCard pressImg={pressKitThree} pressLink={'newsroom/executive-team'} pressTitle={'EXECUTIVE TEAM'} />
          <PressKitCard
            pressImg={pressKitFour}
            pressLink={'newsroom/community-outreach'}
            pressTitle={'COMMUNITY OUTREACH'}
          />
        </div>
      </section>
    </>
  )
}

export default PressKits
