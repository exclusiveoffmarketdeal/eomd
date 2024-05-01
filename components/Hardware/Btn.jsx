import Link from 'next/link'

const LinkBtn = ({
  children,
  handleClick,
  btnType = '',
  formName = '',
  bgColor = 'bg-vb_green-400',
  bgColorHover = 'hover:bg-vb_green-500',
  fontWeight = '',
  paddingX = 'px-4',
  paddingY = 'py-2',
  shadow = '',
  disabled = false,
}) => {
  let shadowChoice
  if (shadow === 'yes') {
    shadowChoice = 'shadow-md hover:shadow-lg shadow-vb_gray-300 hover:shadow-vb_gray-200'
  } else {
    shadowChoice = ''
  }

  let fontChoice
  if (fontWeight === 'bold') {
    fontChoice = 'font-bold'
  } else {
    fontChoice = ''
  }
  return (
    <>
      <button
        className={` ${bgColor} ${bgColorHover} ${fontChoice} text-white ${paddingX} ${paddingY} rounded-lg ${shadowChoice} transition-all duration-150 ease-in-out`}
        onClick={handleClick}
        type={btnType}
        form={formName}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export default LinkBtn
