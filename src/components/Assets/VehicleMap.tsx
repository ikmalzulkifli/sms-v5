"use client";

import dynamic from 'next/dynamic';

const DynamicVehicleMap = dynamic(
  () => import('./VehicleMapInner').then((mod) => mod.VehicleMapInner),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="h-[700px] rounded-lg flex items-center justify-center">
          Loading map...
        </div>
      </div>
    ),
  }
);

export default function VehicleMap() {
  const vehicles = [
    {
      id: 'v1',
      vehicleId: 'GBT-1234',
      location: [3.6803, 101.5198], // Tanjong Malim
      status: 'on-route' as const,
      currentRoute: 'Route A',
      speed: 35,
    },
    // ... other vehicles
  ];

  const routes = [
    {
      id: 'r1',
      name: 'Route A',
      coordinates: [
        [3.6803, 101.5198],
        [3.6808, 101.5203],
        [3.6813, 101.5208],
      ] as [number, number][],
    },
  ];

  return <DynamicVehicleMap vehicles={vehicles} routes={routes} />;
} 