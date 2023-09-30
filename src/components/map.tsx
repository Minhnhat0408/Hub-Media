'use client';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
    return <MapContainer
        center={[21.02719909627587, 105.82105861353911]}
        zoom={18}
        className="h-[400px] w-full my-20"
        scrollWheelZoom={false  }
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
            <Popup className="!bg-gradient">
                <span className="super text-base font-bold">Hub Building </span>
                <br />
            </Popup>
        </Marker>
    </MapContainer>;
}