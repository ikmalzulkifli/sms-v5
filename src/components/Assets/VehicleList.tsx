"use client";

interface Vehicle {
  id: string;
  status: 'active' | 'idle' | 'maintenance';
  driver: string;
  route: string;
  lastUpdate: string;
}

export default function VehicleList() {
  const vehicles: Vehicle[] = [
    {
      id: 'GBT-1234',
      status: 'active',
      driver: 'Ahmad Razak',
      route: 'Route A1',
      lastUpdate: '2 mins ago'
    },
    {
      id: 'GBT-5678',
      status: 'active',
      driver: 'Tan Wei Ming',
      route: 'Route B2',
      lastUpdate: '5 mins ago'
    },
    {
      id: 'GBT-9012',
      status: 'active',
      driver: 'Kumar Raju',
      route: 'Route C3',
      lastUpdate: '3 mins ago'
    },
    {
      id: 'GBT-3456',
      status: 'idle',
      driver: 'Ali Hassan',
      route: 'Route D4',
      lastUpdate: '10 mins ago'
    },
    {
      id: 'GBT-7890',
      status: 'active',
      driver: 'Lee Chong Wei',
      route: 'Route E5',
      lastUpdate: '7 mins ago'
    },
    {
      id: 'GBT-2345',
      status: 'maintenance',
      driver: 'Muthu Raja',
      route: 'Route F6',
      lastUpdate: '15 mins ago'
    },
    {
      id: 'GBT-6789',
      status: 'active',
      driver: 'Wong Kah Wai',
      route: 'Route G7',
      lastUpdate: '4 mins ago'
    },
    {
      id: 'GBT-0123',
      status: 'active',
      driver: 'Siti Aminah',
      route: 'Route H8',
      lastUpdate: '6 mins ago'
    },
    {
      id: 'GBT-4567',
      status: 'active',
      driver: 'Raj Kumar',
      route: 'Route I9',
      lastUpdate: '8 mins ago'
    },
    {
      id: 'GBT-8901',
      status: 'active',
      driver: 'Chen Wei',
      route: 'Route J10',
      lastUpdate: '1 min ago'
    },
    {
      id: 'GBT-2345',
      status: 'active',
      driver: 'Zainab Omar',
      route: 'Route K11',
      lastUpdate: '9 mins ago'
    },
    {
      id: 'GBT-6789',
      status: 'active',
      driver: 'Lim Kah Hoe',
      route: 'Route L12',
      lastUpdate: '11 mins ago'
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Active Vehicles</h2>
      <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium">{vehicle.id}</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {vehicle.driver}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {vehicle.route}
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                vehicle.status === 'active' ? 'bg-green-100 text-green-800' :
                vehicle.status === 'idle' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {vehicle.status}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Last updated: {vehicle.lastUpdate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 