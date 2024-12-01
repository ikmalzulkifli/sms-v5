"use client";

import { AlertTriangle, Clock, Shield, Activity } from "lucide-react";

interface MaintenanceMetric {
  label: string;
  value: number;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
}

export default function MaintenanceReport() {
  const metrics: MaintenanceMetric[] = [
    {
      label: 'Total Incidents',
      value: 15,
      status: 'good',
      trend: 'down',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      label: 'Average Response Time',
      value: 45,
      status: 'warning',
      trend: 'up',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: 'Preventive Maintenance',
      value: 95,
      status: 'good',
      trend: 'stable',
      icon: <Shield className="h-5 w-5" />,
    },
    {
      label: 'Equipment Health',
      value: 88,
      status: 'good',
      trend: 'stable',
      icon: <Activity className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Maintenance Overview</h2>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className={`p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 ${
              metric.status === 'good' 
                ? 'border-l-green-500' 
                : metric.status === 'warning' 
                ? 'border-l-yellow-500'
                : 'border-l-red-500'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${
                metric.status === 'good'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-500'
                  : metric.status === 'warning'
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-500'
              }`}>
                {metric.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{metric.label}</span>
                  <span className={`text-xl font-bold ${
                    metric.status === 'good' 
                      ? 'text-green-600 dark:text-green-400' 
                      : metric.status === 'warning' 
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {metric.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">
                    {metric.value}{metric.label.includes('Time') ? 'min' : '%'}
                  </div>
                  <svg
                    className={`w-4 h-4 ${
                      metric.trend === 'up' ? 'text-red-500 rotate-0' :
                      metric.trend === 'down' ? 'text-green-500 rotate-180' :
                      'text-gray-500 rotate-90'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 