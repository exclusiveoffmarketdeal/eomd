import classNames from 'classnames'
import { useState } from 'react'

const NavBtn = ({ handleClick }) => {
  const [btnOpen, setBtnOpen] = useState(false)
  return (
    <>
      <div className='hover:cursor-pointer' onClick={() => setBtnOpen(!btnOpen)}>
        <div className='flex flex-col justify-between w-fit h-[21px] bg-vb_white-100' onClick={handleClick}>
          <span
            className={classNames('w-7 h-[3px] bg-vb_blue-800 transition-all duration-300 ease-in-out', {
              '-rotate-45 translate-y-[9px] transition-all duration-300 ease-in-out': btnOpen,
            })}
          ></span>
          <span
            className={classNames('w-7 h-[3px] bg-vb_blue-800 transition-all duration-300 ease-in-out', {
              'opacity-0 transition-all duration-300 ease-in-out': btnOpen,
            })}
          ></span>
          <span
            className={classNames('w-7 h-[3px] bg-vb_blue-800 transition-all duration-300 ease-in-out', {
              'rotate-45 -translate-y-[9px] transition-all duration-300 ease-in-out': btnOpen,
            })}
          ></span>
        </div>
      </div>
    </>
  )
}

export default NavBtn
