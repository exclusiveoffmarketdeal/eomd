import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const libraries = ['places']
const Map = (props) => {
  const { setMap, defaultCenter, mapContainerStyle, options, zoom, children } = props
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
    libraries,
  })

  const renderMap = () => {
    const loadHandler = (map) => {
      setMap(map)
    }

    return (
      <GoogleMap
        id='circle'
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={defaultCenter}
        options={options}
        onLoad={loadHandler}
      >
        {children}
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>Loading...</div>
}

export default Map
