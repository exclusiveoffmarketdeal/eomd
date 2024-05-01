import OTPValidation from '@/components/PageSections/OTP/OTPValidation'

const PartThree = ({
  contactId,
  propertyId,
  setUser,
  contactType,
  setSectionThreeConfirmOn, 
  setSectionTwoConfirmOn
}) => {
  return (
    <>
      <div className='my-8 w-full min-h-[60vh]'>
        <OTPValidation 
          contactId={contactId}
          propertyId={propertyId}
          contactType={contactType}
          setUser={setUser}
          setSectionTwoConfirmOn={setSectionTwoConfirmOn} 
          setSectionThreeConfirmOn={setSectionThreeConfirmOn} 
        />
      </div>
    </>
  )
}

export default PartThree
