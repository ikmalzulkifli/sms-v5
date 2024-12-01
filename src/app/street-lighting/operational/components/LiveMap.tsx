"use client";

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Mock data for streetlights
const mockStreetlights = [
  { id: 1, lat: 51.505, lng: -0.09, status: 'operational' },
  { id: 2, lat: 51.507, lng: -0.11, status: 'faulty' },
  { id: 3, lat: 51.503, lng: -0.08, status: 'maintenance' },
  // Add more streetlights as needed
];

// Custom marker icons
const getMarkerIcon = (status: string) => {
  const color = status === 'operational' ? '#22c55e' : 
                status === 'faulty' ? '#ef4444' : '#f59e0b';
  
  return L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 4px rgba(0,0,0,0.3);
      "></div>
    `,
    className: '',
  });
};

export function LiveMap() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockStreetlights.map((light) => (
          <Marker
            key={light.id}
            position={[light.lat, light.lng]}
            icon={getMarkerIcon(light.status)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">Streetlight #{light.id}</h3>
                <p className="text-sm capitalize">Status: {light.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}