'use client'
import { MapContainer, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet'
import marker from '@/assets/location-dot-solid.svg';
import { Icon } from 'leaflet'
import L from 'leaflet';


export default function LeafletMap() {

    const myIcon = new Icon({
        iconUrl: marker.src,
        iconRetinaUrl: marker.src,
        iconSize: [30, 30]
    })


    return (
        <div id='map' className='overflow-hidden h-[500px] w-[90%] rounded-xl shadow my-10 '>
            <MapContainer
                center={[42, -72]} zoom={6} scrollWheelZoom={true} style={{ height: 500, width: "100%" }}>
                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <Marker eventHandlers={{
                    click: (e) => {
                        console.log('marker clicked', e)
                    },
                }} position={[38.8737592, -77.002417]} icon={myIcon}>
                    <p>test</p>
                    <Popup>Popup for Marker</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}