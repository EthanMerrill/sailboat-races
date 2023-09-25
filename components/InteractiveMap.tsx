import React from 'react'
import dynamic from 'next/dynamic'
import { queryClubs } from '@/utils/utils'

const Map = dynamic(() => import('@/components/LeafletMap'), // replace '@components/map' with your component's location
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false // This line is important. It's what prevents server-side render
  }
) 
const clubsPromise = queryClubs()

function InteractiveMap() {
  return <Map/>
}

export default InteractiveMap