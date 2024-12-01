"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PreventiveAlert {
  id: string;
  assetId: string;
  taskType: string;
  daysOverdue: number;
  scheduledDate: string;
}

export function PreventiveAlerts() {
  const alerts: PreventiveAlert[] = [
    {
      id: 'PA-001',
      assetId: 'SL-123',
      taskType: 'Monthly Cleaning',
      daysOverdue: 5,
      scheduledDate: '2024-03-15',
    },
    // Add more alerts
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overdue Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="p-4 rounded-lg border bg-red-50 border-red-200 dark:bg-red-900/10"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{alert.assetId}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
                  {alert.daysOverdue} days overdue
                </span>
              </div>
              <p className="text-sm mb-2">{alert.taskType}</p>
              <div className="text-xs text-gray-500">
                Scheduled: {new Date(alert.scheduledDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 