import Btn from '@/components/Hardware/Btn'
import { saveAs } from 'file-saver'

const DownloadAllImagesButton = ({ images }) => {
  /**
   * Download all images.
   */
  const downloadAllImages = () => {
    {images?.forEach((image, i) => {
      var save     = image?.attributes?.url
      var fileName = save.substring(save.lastIndexOf('/') + 1)
      saveAs(save, fileName, "image/png")
    })}
  }

  return (
    <span className='w-fit mb-8 lg:mb-4'>
      <Btn shadow={'yes'} handleClick={downloadAllImages} >DOWNLOAD ALL</Btn>
    </span>
  )
}

export default DownloadAllImagesButton