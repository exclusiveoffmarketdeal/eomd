import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image from 'next/image'

const VBGallery = ({ images }) => {
  const options = {
    bgOpacity: .75,
    padding: { top: 100, bottom: 400, left: 100, right: 100 },
  }
  return (
    <Gallery withDownloadButton options={options}>
      {images?.map((image, i) => {
        return (
          <div
            key={`Image-${i}`}
            style={{
              display: 'grid',
              gridGap: 2,
            }}
          >
            <Item
              id={`Image-${i}`}
              original={image.attributes.url}
              thumbnail={image.attributes.url}
              width="1000"
              height="675"
              alt=""
            >
              {({ ref, open }) => (
                <Image
                  src={image?.attributes?.url}
                  ref={ref}
                  onClick={open}
                  alt={`Image-${i}`}
                  width={100}
                  height={100}
                  sizes={50}
                  priority={true}
                  className='w-full lg:w-fit h-fit rounded-lg shadow-md hover:shadow-lg shadow-vb_gray-300 hover:shadow-vb_gray-400 transition-all duration-300 ease-in-out cursor-pointer'
                />
              )}
            </Item>       
          </div>
        )
      })}   
    </Gallery>
  )
}

export default VBGallery