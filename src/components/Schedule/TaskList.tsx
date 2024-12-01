"use client";

import { useState } from 'react';
import { Camera } from 'lucide-react';
import { zones } from '@/lib/zones';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Task {
  id: string;
  workerId: string;
  workerName: string;
  location: string;
  status: 'pending' | 'in-progress' | 'completed';
  scheduledTime: string;
  reportedTime?: string;
  verificationPhoto?: string;
}

export default function TaskList() {
  const [timeRange, setTimeRange] = useState('daily');
  const [selectedZone, setSelectedZone] = useState('all');

  const tasks: Task[] = [
    {
      id: 'T001',
      workerId: 'W001',
      workerName: 'Ahmad Razak',
      location: 'Ampang - Jalan Ampang',
      status: 'completed',
      scheduledTime: '2024-03-20T08:00:00',
      reportedTime: '2024-03-20T08:15:00',
      verificationPhoto: '/path/to/photo1.jpg',
    },
    {
      id: 'T002',
      workerId: 'W002',
      workerName: 'Tan Wei Ming',
      location: 'Bukit Bintang - Jalan Bukit Bintang',
      status: 'in-progress',
      scheduledTime: '2024-03-20T09:00:00',
    },
    {
      id: 'T003',
      workerId: 'W003',
      workerName: 'Kumar Raju',
      location: 'Cheras - Jalan Cheras',
      status: 'completed',
      scheduledTime: '2024-03-20T08:30:00',
      reportedTime: '2024-03-20T08:45:00',
      verificationPhoto: '/path/to/photo3.jpg',
    },
    {
      id: 'T004',
      workerId: 'W004',
      workerName: 'Ali Hassan',
      location: 'KL City Centre - Jalan Raja Laut',
      status: 'pending',
      scheduledTime: '2024-03-20T10:00:00',
    },
    {
      id: 'T005',
      workerId: 'W005',
      workerName: 'Lee Chong Wei',
      location: 'Titiwangsa - Jalan Tun Razak',
      status: 'in-progress',
      scheduledTime: '2024-03-20T09:30:00',
    },
    {
      id: 'T006',
      workerId: 'W006',
      workerName: 'Siti Aminah',
      location: 'Wangsa Maju - Jalan Genting Klang',
      status: 'completed',
      scheduledTime: '2024-03-20T08:15:00',
      reportedTime: '2024-03-20T08:30:00',
      verificationPhoto: '/path/to/photo6.jpg',
    },
    {
      id: 'T007',
      workerId: 'W007',
      workerName: 'Raj Kumar',
      location: 'Setiawangsa - Jalan Setiawangsa',
      status: 'in-progress',
      scheduledTime: '2024-03-20T09:45:00',
    },
    {
      id: 'T008',
      workerId: 'W008',
      workerName: 'Wong Kah Wai',
      location: 'Batu - Jalan Ipoh',
      status: 'completed',
      scheduledTime: '2024-03-20T08:45:00',
      reportedTime: '2024-03-20T09:00:00',
      verificationPhoto: '/path/to/photo8.jpg',
    },
    {
      id: 'T009',
      workerId: 'W009',
      workerName: 'Muthu Raja',
      location: 'Kepong - Jalan Kepong',
      status: 'pending',
      scheduledTime: '2024-03-20T10:30:00',
    },
    {
      id: 'T010',
      workerId: 'W010',
      workerName: 'Zainab Omar',
      location: 'Segambut - Jalan Segambut',
      status: 'in-progress',
      scheduledTime: '2024-03-20T09:15:00',
    }
  ];

  // Filter tasks based on selected zone
  const filteredTasks = tasks.filter(task => {
    if (selectedZone === 'all') return true;
    return task.location.toLowerCase().startsWith(zones.find(z => z.value === selectedZone)?.label.toLowerCase() || '');
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-[calc(100vh-8rem)]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold">Tasks List</h2>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Zone Filter */}
          <div className="w-full sm:w-[200px]">
            <Select 
              defaultValue="all" 
              onValueChange={setSelectedZone}
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

          {/* Time Range Filter */}
          <div className="w-full sm:w-[150px]">
            <Select 
              defaultValue="daily" 
              onValueChange={setTimeRange}
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

      <div className="space-y-4 h-[calc(100vh-14rem)] overflow-y-auto pr-2 mx-2 mb-4 border-b border-gray-200 dark:border-gray-700">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg border ${
              task.status === 'completed' ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20' :
              task.status === 'in-progress' ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-900/20' :
              'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700'
            }`}
          >
            <div className="flex justify-between items-start gap-6">
              <div className="flex-grow">
                <span className="font-medium">{task.workerName}</span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Location: {task.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Scheduled: {new Date(task.scheduledTime).toLocaleTimeString()}
                </p>
                {task.reportedTime && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Reported: {new Date(task.reportedTime).toLocaleTimeString()}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 overflow-hidden">
                  {task.verificationPhoto ? (
                    <img 
                      src={task.verificationPhoto} 
                      alt="Verification" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-400 mb-1" />
                      <span className="text-xs text-gray-400">No Photo</span>
                    </>
                  )}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {task.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 