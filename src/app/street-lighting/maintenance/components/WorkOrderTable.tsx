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

interface WorkOrder {
  id: string;
  assetId: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved';
  assignedTeam: string;
  resolutionTime: string;
  createdAt: string;
  location: [number, number];
}

interface WorkOrderTableProps {
  type: 'corrective' | 'preventive';
}

export default function WorkOrderTable({ type }: WorkOrderTableProps) {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([
    {
      id: 'WO-001',
      assetId: 'SL-123',
      description: 'High resistance detected in circuit',
      status: 'pending',
      assignedTeam: 'Team A',
      resolutionTime: 'N/A',
      createdAt: '2024-03-20',
      location: [3.6803, 101.5198],
    },
    {
      id: 'WO-002',
      assetId: 'SL-124',
      description: 'Energy consumption spike detected',
      status: 'in-progress',
      assignedTeam: 'Team B',
      resolutionTime: '2 hours',
      createdAt: '2024-03-19',
      location: [3.6808, 101.5203],
    },
    // Add more sample data
  ]);

  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [assetFilter, setAssetFilter] = useState<string>('');
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | undefined>();

  const filteredOrders = workOrders.filter(order => {
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesAsset = !assetFilter || order.assetId.toLowerCase().includes(assetFilter.toLowerCase());
    const matchesDate = !dateRange || (
      new Date(order.createdAt) >= dateRange.from &&
      new Date(order.createdAt) <= dateRange.to
    );
    return matchesStatus && matchesAsset && matchesDate;
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Work Orders</h2>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
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
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Work Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Asset ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Assigned Team</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Resolution Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-3 whitespace-nowrap">{order.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.assetId}</td>
                <td className="px-4 py-3">{order.description}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{order.assignedTeam}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.resolutionTime}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() => {/* Handle update status */}}
                  >
                    Update Status
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {/* Handle view details */}}
                  >
                    View Details
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