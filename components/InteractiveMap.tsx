import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/LeafletMap'), // replace '@components/map' with your component's location
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false // This line is important. It's what prevents server-side render
  }
) 

function InteractiveMap() {
  return <Map/>
}

export default InteractiveMap