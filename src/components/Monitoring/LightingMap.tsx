"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LightPoint {
  id: string;
  location: [number, number];
  status: 'active' | 'inactive' | 'fault';
}

export function LightingMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Sample data - replace with actual data
  const lightPoints: LightPoint[] = [
    {
      id: 'L1',
      location: [3.6803, 101.5198], // Tanjong Malim
      status: 'active',
    },
    {
      id: 'L2',
      location: [3.6808, 101.5203],
      status: 'fault',
    },
  ];

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([3.6803, 101.5198], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add light points
    lightPoints.forEach(point => {
      const color = point.status === 'active' ? '#10B981' : 
                   point.status === 'fault' ? '#EF4444' : '#F59E0B';

      L.circleMarker(point.location, {
        radius: 8,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      })
      .bindPopup(`
        <div class="p-2">
          <h3 class="font-bold">Light ${point.id}</h3>
          <p>Status: ${point.status}</p>
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
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div ref={mapContainerRef} className="h-[500px] rounded-lg" />
    </div>
  );
} 