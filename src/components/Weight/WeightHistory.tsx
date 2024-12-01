"use client";

import { useState } from 'react';
import { Scale, Clock, MapPin, Eye } from 'lucide-react';

interface WeightRecord {
  id: string;
  vehicleId: string;
  grossWeight: number;
  tareWeight: number;
  netWeight: number;
  timestamp: string;
  location: string;
  photoUrl: string;
}

export default function WeightHistory() {
  const records: WeightRecord[] = [
    {
      id: 'W001',
      vehicleId: 'GBT-1234',
      grossWeight: 5600,
      tareWeight: 2100,
      netWeight: 3500,
      timestamp: '2024-03-20T10:30:00',
      location: 'Jalan Ampang - City Center',
      photoUrl: '/path/to/scale/photo1.jpg'
    },
    {
      id: 'W002',
      vehicleId: 'GBT-5678',
      grossWeight: 6200,
      tareWeight: 2100,
      netWeight: 4100,
      timestamp: '2024-03-20T09:45:00',
      location: 'Jalan Bukit Bintang',
      photoUrl: '/path/to/scale/photo2.jpg'
    },
    {
      id: 'W003',
      vehicleId: 'GBT-9012',
      grossWeight: 5800,
      tareWeight: 2100,
      netWeight: 3700,
      timestamp: '2024-03-20T09:15:00',
      location: 'Jalan Sultan Ismail',
      photoUrl: '/path/to/scale/photo3.jpg'
    },
    {
      id: 'W004',
      vehicleId: 'GBT-3456',
      grossWeight: 5900,
      tareWeight: 2100,
      netWeight: 3800,
      timestamp: '2024-03-20T08:45:00',
      location: 'Jalan Tun Razak',
      photoUrl: '/path/to/scale/photo4.jpg'
    },
    {
      id: 'W005',
      vehicleId: 'GBT-7890',
      grossWeight: 6100,
      tareWeight: 2100,
      netWeight: 4000,
      timestamp: '2024-03-20T08:15:00',
      location: 'Jalan Raja Chulan',
      photoUrl: '/path/to/scale/photo5.jpg'
    },
    {
      id: 'W006',
      vehicleId: 'GBT-2345',
      grossWeight: 5700,
      tareWeight: 2100,
      netWeight: 3600,
      timestamp: '2024-03-20T07:45:00',
      location: 'Jalan P Ramlee',
      photoUrl: '/path/to/scale/photo6.jpg'
    }
  ];

  const [selectedRecord, setSelectedRecord] = useState<WeightRecord | null>(null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Recent Records</h2>
      </div>

      <div className="space-y-4 h-[calc(100vh-14rem)] overflow-y-auto pr-2 mx-2 mb-4 border-b border-gray-200 dark:border-gray-700">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-lg">{record.vehicleId}</span>
                    <span className={`px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`}>
                      {record.netWeight} kg
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(record.timestamp).toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {record.location}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRecord(record)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center gap-2 text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Gross Weight</div>
                  <div className="font-semibold mt-1">{record.grossWeight} kg</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Tare Weight</div>
                  <div className="font-semibold mt-1">{record.tareWeight} kg</div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-green-600 dark:text-green-400">Net Weight</div>
                  <div className="font-semibold mt-1 text-green-600 dark:text-green-400">
                    {record.netWeight} kg
                  </div>
                </div>
              </div>

              <div className="mt-4 aspect-[4/1] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={record.photoUrl}
                  alt="Weight Scale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full m-4">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Weight Record Details</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedRecord.vehicleId} - {new Date(selectedRecord.timestamp).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Gross Weight</div>
                  <div className="font-semibold mt-1">{selectedRecord.grossWeight} kg</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Tare Weight</div>
                  <div className="font-semibold mt-1">{selectedRecord.tareWeight} kg</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                  <div className="text-sm text-green-600 dark:text-green-400">Net Weight</div>
                  <div className="font-semibold mt-1 text-green-600 dark:text-green-400">
                    {selectedRecord.netWeight} kg
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={selectedRecord.photoUrl}
                  alt="Weight Scale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 