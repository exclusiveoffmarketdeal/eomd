import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'

const Modal = ({ visible, imageList, imgIndex, set_imgIndex, close }) => {
  if (!visible) {
    return null
  }

  return (
    <>
      <div className='z-50 fixed inset-0 backdrop-blur-md flex justify-center items-center'>
        <div className='flex justify-center items-center h-5/6 w-7/12'>
          <div className='bg-vb_gray-400 bg-opacity-80 rounded-md shadow-md shadow-vb_gray-500'>
            <span className='flex justify-end p-2'>
              <button
                className='w-fit bg-red-500 hover:bg-red-400 px-2 rounded-xl shadow-md hover:shadow-none shadow-vb_gray-500 transition-all duration-150 ease-in-out'
                onClick={close}
              >
                X
              </button>
            </span>
            <div className='flex flex-row justify-center px-20 pb-10'>
              <button
                className='text-6xl mx-4'
                onClick={() => (imgIndex === 0 ? set_imgIndex(imageList.length - 1) : set_imgIndex(imgIndex - 1))}
              >
                <MdKeyboardArrowLeft className='text-vb_white-100 hover:text-vb_teal-300 transition-all duration-150 ease-in-out' />
              </button>
              <span className='flex justify-center items-center w-[575px] h-[750px] p-6 rounded-md shadow-inner shadow-vb_gray-500'>
                <Image
                  className='rounded-md'
                  src={`https://vbrestapi.azurefd.net/images/gallery/${imageList[imgIndex].imageName}`}
                  alt=''
                />
              </span>
              <button
                className='text-6xl mx-4'
                onClick={() => (imgIndex === imageList.length - 1 ? set_imgIndex(0) : set_imgIndex(imgIndex + 1))}
              >
                <MdKeyboardArrowRight className='text-vb_white-100 hover:text-vb_teal-300 transition-all duration-150 ease-in-out' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  // )
}

export default Modal
