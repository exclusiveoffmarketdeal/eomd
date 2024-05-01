import React, { useRef } from 'react'
import { StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api'

const PlaceComponent = () => {
  const inputRef = useRef()

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces()
  }

  return (
    <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
      <input type='text' className='p-3 rounded  w-[24rem]' placeholder='Address, City, Market, State, Zip' />
    </StandaloneSearchBox>
  )
}

export default PlaceComponent
