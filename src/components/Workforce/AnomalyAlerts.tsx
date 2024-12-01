"use client";

interface Alert {
  id: string;
  vehicleId: string;
  type: 'missed-collection' | 'improper-attire' | 'unauthorized-stop';
  timestamp: string;
  status: 'new' | 'reviewing' | 'resolved';
}

export default function AnomalyAlerts() {
  const alerts: Alert[] = [
    {
      id: 'alert-001',
      vehicleId: 'GBT-1234',
      type: 'missed-collection',
      timestamp: '2024-03-20T10:30:00',
      status: 'new',
    },
    {
      id: 'alert-002',
      vehicleId: 'GBT-5678',
      type: 'improper-attire',
      timestamp: '2024-03-20T10:25:00',
      status: 'reviewing',
    },
    {
      id: 'alert-003',
      vehicleId: 'GBT-9012',
      type: 'unauthorized-stop',
      timestamp: '2024-03-20T10:20:00',
      status: 'new',
    },
    {
      id: 'alert-004',
      vehicleId: 'GBT-3456',
      type: 'missed-collection',
      timestamp: '2024-03-20T10:15:00',
      status: 'reviewing',
    },
    {
      id: 'alert-005',
      vehicleId: 'GBT-7890',
      type: 'improper-attire',
      timestamp: '2024-03-20T10:10:00',
      status: 'new',
    },
    {
      id: 'alert-006',
      vehicleId: 'GBT-2345',
      type: 'unauthorized-stop',
      timestamp: '2024-03-20T10:05:00',
      status: 'reviewing',
    },
    {
      id: 'alert-007',
      vehicleId: 'GBT-6789',
      type: 'missed-collection',
      timestamp: '2024-03-20T10:00:00',
      status: 'new',
    },
    {
      id: 'alert-008',
      vehicleId: 'GBT-0123',
      type: 'improper-attire',
      timestamp: '2024-03-20T09:55:00',
      status: 'reviewing',
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">AI Anomaly Detection</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-red-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium">{alert.vehicleId}</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {alert.type.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                alert.status === 'new' ? 'bg-red-100 text-red-800' :
                alert.status === 'reviewing' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {alert.status}
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