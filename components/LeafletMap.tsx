'use client'
import { MapContainer, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet'
import marker from '@/assets/location-dot-solid.svg';
import { Icon } from 'leaflet'
import { LatLngExpression } from 'leaflet';
import { useRef } from 'react';

const center = [41, -72] as LatLngExpression
const zoom = 6

export default function LeafletMap() {
    const map = useRef<L.Map>();
    const setMap = (ref: L.Map) => {
        map.current = ref;
    }

    console.log('map', map.current)


    const myIcon = new Icon({
        iconUrl: marker.src,
        iconRetinaUrl: marker.src,
        iconSize: [30, 30]
    })


    return (
        <div id='map' className='overflow-hidden h-[500px] w-[90%] rounded-xl shadow'>
            <MapContainer
                center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: 500, width: "100%" }} ref={setMap}>
                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <Marker eventHandlers={{
                    click: (e) => {
                        console.log('marker clicked', e)
                    },
                    mouseover: (e) => {
                        console.log('marker mouseover', e)
                    }
                }} position={[38.8737592, -77.002417]} icon={myIcon}>
                    <p>test</p>
                    <Popup>Popup for Marker</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}