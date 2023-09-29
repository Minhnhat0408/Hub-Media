'use client';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import PageTitle from '@/components/page-title';
import dynamic from 'next/dynamic'
 
// Client Components:

function ContactPage() {
    //
    return (
        <main className=" h-[1000px] w-full ">
            <PageTitle src='https://gaaga.wpengine.com/wp-content/uploads/2023/06/services-breadcrumb.jpg' title="Contact" />
            <MapContainer
                center={[21.02719909627587, 105.82105861353911]}
                zoom={18}
                className="h-[400px] w-full"
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[21.02719909627587, 105.82105861353911]}
                    icon={
                        new Icon({
                            iconUrl: '/images/marker.png',
                            shadowUrl: '/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            shadowSize: [40, 65],
                            shadowAnchor: [12, 65],
                        })
                    }
                >
                    <Popup className='!bg-gradient'>
                        <span className='super font-bold text-base'>Hub Building </span>
                        <br />
                        
                    </Popup>
                </Marker>
            </MapContainer>
        </main>
    );
}

export default ContactPage;
