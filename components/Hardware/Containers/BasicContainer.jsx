const BasicContainer = ({ children, classnames = '' }) => {
  return (
    <>
      <div className={`${classnames} px-2 sm:px-4 md:px-10 lg:px-14 xl:px-32 2xl:px-36 3xl:px-56 4xl:px-72 content-center`}>
        {children}
      </div>
    </>
  )
}

export default BasicContainer
