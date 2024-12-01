"use client";

import { useState } from 'react';
import VideoFeeds from '@/components/Workforce/VideoFeeds';
import AnomalyAlerts from '@/components/Workforce/AnomalyAlerts';
import WorkforceStatus from '@/components/Workforce/WorkforceStatus';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WasteManagementDashboard() {
  const [selectedZone, setSelectedZone] = useState("all");

  // Mock camera feed data
  const cameraFeeds = [
    { id: 1, location: 'Jalan Ampang - City Center', status: 'online' },
    { id: 2, location: 'Jalan Bukit Bintang - Shopping District', status: 'online' },
    { id: 3, location: 'Jalan Sultan Ismail - Business Hub', status: 'offline' },
    { id: 4, location: 'Jalan Tun Razak - Commercial Area', status: 'online' },
    { id: 5, location: 'Jalan Imbi - Food Street', status: 'online' },
    { id: 6, location: 'Jalan Raja Chulan - Office District', status: 'online' },
    { id: 7, location: 'Jalan P Ramlee - Entertainment Hub', status: 'maintenance' },
    { id: 8, location: 'Jalan Conlay - Medical Center', status: 'online' },
    { id: 9, location: 'Jalan Kia Peng - Residential Area', status: 'online' },
    { id: 10, location: 'Jalan Pinang - Transit Hub', status: 'offline' },
    { id: 11, location: 'Jalan Stonor - Embassy Row', status: 'online' },
    { id: 12, location: 'Jalan Perak - Heritage District', status: 'online' },
  ];

  const zones = [
    { value: 'all', label: 'All Areas' },
    { value: 'city-center', label: 'City Center' },
    { value: 'shopping', label: 'Shopping District' },
    { value: 'business', label: 'Business Hub' },
    { value: 'commercial', label: 'Commercial Area' },
    { value: 'entertainment', label: 'Entertainment Hub' },
    { value: 'residential', label: 'Residential Area' },
  ];

  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
    // Add your filtering logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Waste Management Dashboard</h1>
        
        {/* Zone Filter */}
        <div className="w-full sm:w-[200px]">
          <Select defaultValue="all" onValueChange={handleZoneChange}>
            <SelectTrigger className="bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select Zone" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              {zones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Status and Alerts Panel */}
        <div className="lg:col-span-1 space-y-6">
          <WorkforceStatus />
          <AnomalyAlerts />
        </div>

        {/* Video Feeds Section */}
        <div className="lg:col-span-3">
          <VideoFeeds feeds={cameraFeeds} />
        </div>
      </div>
    </div>
  );
} 