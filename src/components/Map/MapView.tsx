"use client";

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const defaultCenter = {
    lat: 3.6803, // Tanjong Malim's latitude
    lng: 101.5198 // Tanjong Malim's longitude
  };

  return (
    <div className="h-[500px] w-full rounded-lg border bg-card">
      <MapContainer 
        center={[defaultCenter.lat, defaultCenter.lng]}
        zoom={14}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Map markers will be added here */}
      </MapContainer>
    </div>
  );
};

export default MapView; 