"use client";

import { useEffect, useState } from 'react';
import { VehicleMapInner } from './VehicleMapInner';

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

export function VehicleMapWrapper(props: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="h-[700px] rounded-lg flex items-center justify-center">
          Loading map...
        </div>
      </div>
    );
  }

  return <VehicleMapInner {...props} />;
} 