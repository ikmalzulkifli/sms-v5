"use client";

import { useState } from 'react';

interface Complaint {
  id: string;
  source: string;
  category: string;
  description: string;
  location: string;
  status: 'new' | 'in-progress' | 'resolved';
  priority: 'high' | 'medium' | 'low';
  dateSubmitted: string;
}

interface ComplaintTableProps {
  source: string;
  module: 'street-lighting' | 'waste-management';
}

const wasteCategories = [
  'Missed Collection',
  'Bin Damage',
  'Illegal Dumping',
  'Spillage',
  'Schedule Issue',
  'Staff Conduct',
] as const;

const lightingCategories = [
  'Light Malfunction',
  'Pole Damage',
  'Wiring Issue',
  'Timer Problem',
  'Vandalism',
  'Installation Request',
] as const;

export default function ComplaintTable({ source, module }: ComplaintTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Sample data - replace with actual data fetching
  const complaints: Complaint[] = [
    {
      id: 'C001',
      source: 'i-Tegur',
      category: module === 'waste-management' ? 'Missed Collection' : 'Light Malfunction',
      description: module === 'waste-management' 
        ? 'Garbage not collected at scheduled time'
        : 'Street light not functioning at Jalan ABC',
      location: 'Jalan ABC',
      status: 'new',
      priority: 'high',
      dateSubmitted: '2024-03-20T10:30:00',
    },
    // Add more sample data
  ];

  const categories = module === 'waste-management' ? wasteCategories : lightingCategories;

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || complaint.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || complaint.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search complaints..."
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
        <div>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Priority</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="px-4 py-3 whitespace-nowrap">{complaint.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{complaint.category}</td>
                <td className="px-4 py-3">{complaint.description}</td>
                <td className="px-4 py-3">{complaint.location}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    complaint.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    complaint.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {complaint.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    complaint.priority === 'high' ? 'bg-red-100 text-red-800' :
                    complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {complaint.priority}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {new Date(complaint.dateSubmitted).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 