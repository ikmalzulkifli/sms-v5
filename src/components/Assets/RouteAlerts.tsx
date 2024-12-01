"use client";

interface RouteAlert {
  id: string;
  vehicleId: string;
  type: 'delay' | 'deviation' | 'speeding' | 'idle';
  message: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
}

export default function RouteAlerts() {
  const alerts: RouteAlert[] = [
    {
      id: 'ra-001',
      vehicleId: 'GBT-1234',
      type: 'delay',
      message: 'Vehicle behind schedule by 15 minutes',
      timestamp: '2024-03-20T10:30:00',
      severity: 'medium'
    },
    {
      id: 'ra-002',
      vehicleId: 'GBT-5678',
      type: 'deviation',
      message: 'Route deviation detected',
      timestamp: '2024-03-20T10:25:00',
      severity: 'high'
    },
    {
      id: 'ra-003',
      vehicleId: 'GBT-9012',
      type: 'speeding',
      message: 'Speed limit exceeded',
      timestamp: '2024-03-20T10:20:00',
      severity: 'high'
    },
    {
      id: 'ra-004',
      vehicleId: 'GBT-3456',
      type: 'idle',
      message: 'Extended idle time detected',
      timestamp: '2024-03-20T10:15:00',
      severity: 'low'
    },
    {
      id: 'ra-005',
      vehicleId: 'GBT-7890',
      type: 'delay',
      message: 'Vehicle behind schedule by 20 minutes',
      timestamp: '2024-03-20T10:10:00',
      severity: 'medium'
    },
    {
      id: 'ra-006',
      vehicleId: 'GBT-2345',
      type: 'deviation',
      message: 'Unauthorized area entry',
      timestamp: '2024-03-20T10:05:00',
      severity: 'high'
    },
    {
      id: 'ra-007',
      vehicleId: 'GBT-6789',
      type: 'speeding',
      message: 'Multiple speed violations',
      timestamp: '2024-03-20T10:00:00',
      severity: 'high'
    },
    {
      id: 'ra-008',
      vehicleId: 'GBT-0123',
      type: 'idle',
      message: 'Unexpected stop detected',
      timestamp: '2024-03-20T09:55:00',
      severity: 'medium'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Route Alerts</h2>
      <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 ${
              alert.severity === 'high' ? 'border-red-500' :
              alert.severity === 'medium' ? 'border-yellow-500' :
              'border-blue-500'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium">{alert.vehicleId}</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {alert.message}
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {alert.type}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              {new Date(alert.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 