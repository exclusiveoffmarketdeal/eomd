import Link from 'next/link'

const LinkBtn = ({
  children,
  address,
  newTab = 'no',
  bgColor = 'bg-vb_green-400',
  bgColorHover = 'hover:bg-vb_green-500',
  fontWeight = '',
  textSize = 'text-base',
  paddingX = 'px-4',
  paddingY = 'py-2',
  shadow = '',
}) => {
  let choice
  if (newTab === 'yes') {
    choice = '_blank'
  } else {
    choice = ''
  }

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
      <Link
        className={` ${bgColor} ${bgColorHover} ${fontChoice} text-white ${textSize} ${paddingX} ${paddingY} rounded-lg ${shadowChoice} transition-all duration-150 ease-in-out`}
        href={address}
        target={`${choice}`}
      >
        {children}
      </Link>
    </>
  )
}

export default LinkBtn
