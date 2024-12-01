"use client";

import { useState } from 'react';

interface ReportFilter {
  dateRange: string;
  reportType: string;
  zone: string;
}

export default function ReportSelector() {
  const [filters, setFilters] = useState<ReportFilter>({
    dateRange: 'weekly',
    reportType: 'all',
    zone: 'all',
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date Range</label>
          <select
            value={filters.dateRange}
            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Report Type</label>
          <select
            value={filters.reportType}
            onChange={(e) => setFilters({ ...filters, reportType: e.target.value })}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          >
            <option value="all">All Reports</option>
            <option value="performance">Performance</option>
            <option value="maintenance">Maintenance</option>
            <option value="energy">Energy Consumption</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Zone</label>
          <select
            value={filters.zone}
            onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2"
          >
            <option value="all">All Zones</option>
            <option value="zone-a">Zone A</option>
            <option value="zone-b">Zone B</option>
            <option value="zone-c">Zone C</option>
          </select>
        </div>
      </div>
    </div>
  );
} 