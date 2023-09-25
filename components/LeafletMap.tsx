'use client'
import { MapContainer, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import { Suspense, useContext, useRef, use } from 'react';

import awsExports from "./../src/aws-exports";
import Amplify from "@aws-amplify/core";
import { AppContext } from '@/app/ContextProvider';
import { API, DataStore, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { listSailingOrganizations } from '../graphql/queries';
import { SailingOrganization } from "@/src/models";

import {queryClubs} from '././../utils/utils'
import marker from '@/assets/location-dot-solid.svg';
import { Icon } from 'leaflet'

Amplify.configure(awsExports);

const center = [41, -72] as LatLngExpression
const zoom = 6

export default function LeafletMap({clubsPromise}:{clubsPromise:Promise<SailingOrganization[]>}) {
    
    const appContext = useContext(AppContext)
    const { setAllClubs, allClubs } = appContext;

    
    const map = useRef<L.Map>();
    const setMap = (ref: L.Map) => {
        map.current = ref;
    }

    // console.log('map', map.current)

    const myIcon = new Icon({
        iconUrl: marker.src,
        iconRetinaUrl: marker.src,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

    const clubs = use(clubsPromise)
    console.log(clubsPromise, clubs)
    return (
        <div id='map' className='overflow-hidden h-[500px] w-[90%] rounded-xl shadow'>
            <Suspense>
            <MapContainer
                center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: 500, width: "100%" }} ref={setMap}>
                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                {     clubs.map((Organizations:SailingOrganization) => {
                    return (
                        <Marker key={Organizations.id} 
                        position={[42.380805,-71.0365549]} icon={myIcon}
                        eventHandlers={{
                            click: (e) => {
                                appContext.setSelectedClub(Organizations.id);
                            },
                            mouseover: (e) => {
                                // console.log(`market mouseover ${Organizations.name}`, e)
                            }
                        }}>
                            <Popup>{Organizations.name ? Organizations.name: ''}</Popup>
                        </Marker>
                    )
                }) }
            </MapContainer>
            </Suspense>
        </div>
    )
}