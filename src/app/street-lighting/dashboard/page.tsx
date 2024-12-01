"use client";

import { Lightbulb, CheckCircle, AlertTriangle, Wrench } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { LightingMap } from '@/components/Monitoring/LightingMap';
import MetricsPanel from '@/components/Monitoring/MetricsPanel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';

export default function StreetLightingDashboard() {
  const [selectedZone, setSelectedZone] = useState("all");
  const statusData = {
    total: 1250,
    operational: 1180,
    faulty: 45,
    maintenance: 25
  };

  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
    // Add your filtering logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Monitoring Dashboard</h1>
        
        {/* Zone Filter */}
        <div className="w-full sm:w-[200px]">
          <Select defaultValue="all" onValueChange={handleZoneChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Zones</SelectItem>
              <SelectItem value="north">North Zone</SelectItem>
              <SelectItem value="south">South Zone</SelectItem>
              <SelectItem value="east">East Zone</SelectItem>
              <SelectItem value="west">West Zone</SelectItem>
              <SelectItem value="central">Central Zone</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Streetlight Status Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">Streetlight Status</h2>
          <span className="text-sm text-muted-foreground mt-1">
            Real-time overview of all streetlights
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Lights */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Lights</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {statusData.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operational Lights */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/10 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">Operational</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {statusData.operational.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Faulty Lights */}
          <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/50 dark:to-red-800/50 border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-500/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">Faulty</p>
                  <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                    {statusData.faulty.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Under Maintenance */}
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/50 dark:to-amber-800/50 border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-500/10 rounded-full">
                  <Wrench className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400">Maintenance</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                    {statusData.maintenance.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Metrics and Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Metrics Section */}
        <div className="w-full h-[800px]">
          <Card className="bg-gray-50 dark:bg-gray-800 h-full border-0">
            <CardContent className="p-6 h-full">
              <MetricsPanel />
            </CardContent>
          </Card>
        </div>

        {/* Live Map Section */}
        <div className="w-full h-[600px]">
          <Card className="bg-gray-50 dark:bg-gray-800 h-full border-0">
            <CardContent className="p-6">
              <LightingMap />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 