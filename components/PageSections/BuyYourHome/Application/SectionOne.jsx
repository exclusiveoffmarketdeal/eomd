import OTPAddress from '@/components/PageSections/OTP/OTPAddress'

const SectionOne = ({ setSectionOneConfirmOn, address, setAddress, propertyId, setPropertyId }) => {
  return (
    <>
      <div className='my-8 w-full min-h-[50vh]'>
        <OTPAddress 
          setSectionOneConfirmOn={setSectionOneConfirmOn} 
          address={address} 
          setAddress={setAddress} 
          propertyId={propertyId} 
          setPropertyId={setPropertyId} 
        />
      </div>
    </>
  )
}

export default SectionOne
