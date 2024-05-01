const SectionThreeList = ({ bold, normal }) => {
  return (
    <>
      <li className='flex flex-row flex-wrap mb-2'>
        <strong className='text-2xl mr-2'>{bold}</strong>
        <p className='text-2xl'>{normal}</p>
      </li>
    </>
  )
}

export default SectionThreeList
