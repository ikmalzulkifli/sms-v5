"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";

interface Task {
  id: string;
  assetId: string;
  description: string;
  scheduledDate: string;
  assignedTeam: string;
  status: 'scheduled' | 'in-progress' | 'completed';
}

export function PreventiveTaskTable() {
  const [tasks] = useState<Task[]>([
    {
      id: 'PT-001',
      assetId: 'SL-123',
      description: 'Monthly Cleaning',
      scheduledDate: '2024-03-25',
      assignedTeam: 'Team A',
      status: 'scheduled',
    },
    // Add more tasks
  ]);

  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [assetFilter, setAssetFilter] = useState<string>('');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>();

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const matchesAsset = !assetFilter || task.assetId.toLowerCase().includes(assetFilter.toLowerCase());
    const matchesDate = !dateRange || (
      new Date(task.scheduledDate) >= dateRange.from &&
      new Date(task.scheduledDate) <= dateRange.to
    );
    return matchesStatus && matchesAsset && matchesDate;
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Preventive Tasks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Filter by Asset ID"
            value={assetFilter}
            onChange={(e) => setAssetFilter(e.target.value)}
          />

          <div className="md:col-span-2">
            <DatePickerWithRange 
              value={dateRange}
              onChange={setDateRange}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Asset ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Scheduled Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Assigned Team</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td className="px-4 py-3 whitespace-nowrap">{task.assetId}</td>
                <td className="px-4 py-3">{task.description}</td>
                <td className="px-4 py-3 whitespace-nowrap">{task.scheduledDate}</td>
                <td className="px-4 py-3 whitespace-nowrap">{task.assignedTeam}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() => {/* Handle update status */}}
                  >
                    Update Status
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 