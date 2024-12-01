"use client";

interface StatusMetric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export default function WorkforceStatus() {
  const metrics: StatusMetric[] = [
    {
      label: 'Active Vehicles',
      value: 12,
      unit: 'trucks',
      trend: 'stable',
    },
    {
      label: 'Collection Rate',
      value: 95,
      unit: '%',
      trend: 'up',
    },
    {
      label: 'Non-Compliance Practice Alerts',
      value: 8,
      unit: '',
      trend: 'down',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Workforce Status</h2>
      <div className="space-y-4">
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