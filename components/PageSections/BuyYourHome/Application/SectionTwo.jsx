import OTPContact from '@/components/PageSections/OTP/OTPContact'

const SectionTwo = ({ 
  propertyId,
  setPropertyId,
  contactId,
  setContactId,
  contactType,
  setContactType,
  setSectionOneConfirmOn, 
  setSectionTwoConfirmOn 
}) => {
  return (
    <>
      <div className='my-8 w-full min-h-[60vh]'>
        <OTPContact 
          propertyId={propertyId}
          setPropertyId={setPropertyId} 
          contactId={contactId}
          setContactId={setContactId}
          contactType={contactType}
          setContactType={setContactType}
          setSectionOneConfirmOn={setSectionOneConfirmOn} 
          setSectionTwoConfirmOn={setSectionTwoConfirmOn} 
        />
      </div>
    </>
  )
}

export default SectionTwo
