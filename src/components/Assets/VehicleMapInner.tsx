"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  vehicles: Array<{
    id: string;
    vehicleId: string;
    location: [number, number];
    status: 'on-route' | 'deviated' | 'stopped';
    currentRoute: string;
    speed: number;
  }>;
  routes: Array<{
    id: string;
    name: string;
    coordinates: [number, number][];
  }>;
}

const createCustomIcon = (status: 'on-route' | 'deviated' | 'stopped') => {
  const markerColor = status === 'on-route' ? '#10B981' : 
                     status === 'deviated' ? '#EF4444' : '#F59E0B';

  const markerHtml = `
    <div class="relative">
      <div class="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
        <svg class="w-5 h-5" fill="${markerColor}" viewBox="0 0 24 24">
          <path d="M8.5 4h7a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 017 8.5v-3A1.5 1.5 0 018.5 4zM4 12h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z"/>
        </svg>
      </div>
      ${status === 'deviated' ? `
        <span class="absolute -top-1 -right-1 flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      ` : ''}
    </div>
  `;

  return L.divIcon({
    html: markerHtml,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

export function VehicleMapInner({ vehicles, routes }: Props) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([3.6803, 101.5198], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    routes.forEach(route => {
      L.polyline(route.coordinates, {
        color: '#2563eb',
        weight: 3,
        opacity: 0.7,
      }).addTo(mapRef.current!);
    });

    vehicles.forEach(vehicle => {
      L.marker(vehicle.location, { icon: createCustomIcon(vehicle.status) })
        .bindPopup(`
          <div class="p-2">
            <h3 class="font-bold">${vehicle.vehicleId}</h3>
            <p>Route: ${vehicle.currentRoute}</p>
            <p>Speed: ${vehicle.speed} km/h</p>
            <p>Status: ${vehicle.status}</p>
          </div>
        `)
        .addTo(mapRef.current!);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [vehicles, routes]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div ref={mapContainerRef} className="h-[700px] rounded-lg" />
    </div>
  );
} 