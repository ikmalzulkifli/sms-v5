"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Alert {
  id: string;
  assetId: string;
  type: string;
  message: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
}

export default function AlertsPanel() {
  const alerts: Alert[] = [
    {
      id: 'ALT-001',
      assetId: 'SL-123',
      type: 'Electrical',
      message: 'High resistance detected in circuit',
      timestamp: '2024-03-20T10:30:00',
      severity: 'high',
    },
    {
      id: 'ALT-002',
      assetId: 'SL-124',
      type: 'Energy',
      message: 'Energy consumption spike detected',
      timestamp: '2024-03-20T09:15:00',
      severity: 'medium',
    },
    // Add more alerts as needed
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border ${
                alert.severity === 'high' ? 'bg-red-50 border-red-200 dark:bg-red-900/10' :
                alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/10' :
                'bg-blue-50 border-blue-200 dark:bg-blue-900/10'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{alert.assetId}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {alert.severity}
                </span>
              </div>
              <p className="text-sm mb-2">{alert.message}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{alert.type}</span>
                <span>{new Date(alert.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 