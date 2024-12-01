"use client";

import { Zap, Clock, Sun, TrendingDown } from "lucide-react";

interface PerformanceMetric {
  label: string;
  current: number;
  previous: number;
  unit: string;
  icon: React.ReactNode;
}

export default function PerformanceReport() {
  const metrics: PerformanceMetric[] = [
    {
      label: 'Energy Consumption',
      current: 2450,
      previous: 2600,
      unit: 'kWh',
      icon: <Zap className="h-5 w-5" />,
    },
    {
      label: 'Operating Hours',
      current: 310,
      previous: 300,
      unit: 'hours',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: 'Average Brightness',
      current: 75,
      previous: 80,
      unit: '%',
      icon: <Sun className="h-5 w-5" />,
    },
    {
      label: 'Energy Savings',
      current: 35,
      previous: 30,
      unit: '%',
      icon: <TrendingDown className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
      <div className="space-y-4">
        {metrics.map((metric, index) => {
          const trend = metric.current - metric.previous;
          const isPositive = metric.label === 'Energy Savings' ? trend > 0 : trend < 0;

          return (
            <div 
              key={index} 
              className={`p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 ${
                isPositive 
                  ? 'border-l-green-500' 
                  : 'border-l-red-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${
                  isPositive 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-500' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-500'
                }`}>
                  {metric.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{metric.label}</span>
                    <span className={`text-xl font-bold ${
                      isPositive 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {trend > 0 ? '+' : ''}{trend}{metric.unit}
                    </span>
                  </div>
                  <div className="text-2xl font-bold">
                    {metric.current}{metric.unit}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 