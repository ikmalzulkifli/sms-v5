"use client";

import { useState } from 'react';
import { zones } from '@/lib/zones';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusMetric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export default function WeightStats() {
  const metrics: StatusMetric[] = [
    {
      label: 'Total Collections',
      value: 48,
      unit: '',
      trend: 'stable',
    },
    {
      label: 'Total Weight',
      value: 24500,
      unit: 'kg',
      trend: 'up',
    },
    {
      label: 'Average Weight',
      value: 510,
      unit: 'kg',
      trend: 'up',
    },
    {
      label: 'Missed Collections',
      value: 2,
      unit: '',
      trend: 'down',
    }
  ];

  const [timeRange, setTimeRange] = useState("daily");
  const [selectedZone, setSelectedZone] = useState("all");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold">Collection Metrics</h2>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="w-full sm:w-[200px]">
            <Select 
              defaultValue="all" 
              onValueChange={(value) => setSelectedZone(value)}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select Zone" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {zones.map((zone) => (
                  <SelectItem 
                    key={zone.value} 
                    value={zone.value}
                    className="hover:bg-gray-50"
                  >
                    {zone.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-[150px]">
            <Select 
              defaultValue="daily" 
              onValueChange={(value) => setTimeRange(value)}
            >
              <SelectTrigger className="bg-white dark:bg-gray-800">
                <SelectValue placeholder="Select Range" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800">
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {metric.label}
              </span>
              <svg
                className={`w-4 h-4 ${
                  metric.trend === 'up' ? 'text-green-500 rotate-0' :
                  metric.trend === 'down' ? 'text-red-500 rotate-180' :
                  'text-gray-500 rotate-90'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="text-2xl font-bold">
              {metric.value}{metric.unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 