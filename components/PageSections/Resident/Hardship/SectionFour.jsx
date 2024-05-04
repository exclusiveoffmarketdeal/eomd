import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import LinkBtn from '@/components/Hardware/LinkBtn'

const SectionFour = () => {
  return (
    <>
      <div className='text-center my-36'>
        <BasicContainer>
          <p className='text-sm xl:text-xl font-normal mb-12'>
            If you meet the outlined qualifications, can provide the required documentation, and all lease holders are
            willing to sign an addendum to your existing lease, please submit your application for the Hardship Relief
            Program by clicking the button below:  
          </p>
          <LinkBtn address={'https://www.exclusive.com/resident/hardship_application'} newTab={'no'}>
            APPLY NOW
          </LinkBtn>
        </BasicContainer>
      </div>
    </>
  )
}

export default SectionFour
