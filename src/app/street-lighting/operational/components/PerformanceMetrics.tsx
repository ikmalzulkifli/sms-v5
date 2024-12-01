"use client";

import { LineChart } from '@/components/Charts';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PerformanceMetrics() {
  const energyData = {
    data: [245, 238, 252, 235, 242, 248, 240], // kWh per day
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    target: 240,
  };

  const uptimeData = {
    data: [98.5, 99.1, 98.8, 99.2, 98.9, 99.0, 99.3], // Percentage
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    target: 99,
  };

  const responseData = {
    data: [12, 15, 10, 14, 11, 13, 12], // Minutes
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    target: 15,
  };

  return (
    <Tabs defaultValue="energy" className="space-y-4">
      <TabsList>
        <TabsTrigger value="energy">Energy Consumption</TabsTrigger>
        <TabsTrigger value="uptime">System Uptime</TabsTrigger>
        <TabsTrigger value="response">Response Time</TabsTrigger>
      </TabsList>

      <TabsContent value="energy" className="space-y-4">
        <div className="h-[400px]">
          <LineChart
            data={energyData.data}
            labels={energyData.labels}
            targetLine={energyData.target}
            yAxisLabel="kWh"
            tooltipPrefix="Energy: "
            tooltipSuffix=" kWh"
          />
        </div>
      </TabsContent>

      <TabsContent value="uptime" className="space-y-4">
        <div className="h-[400px]">
          <LineChart
            data={uptimeData.data}
            labels={uptimeData.labels}
            targetLine={uptimeData.target}
            yAxisLabel="%"
            tooltipPrefix="Uptime: "
            tooltipSuffix="%"
          />
        </div>
      </TabsContent>

      <TabsContent value="response" className="space-y-4">
        <div className="h-[400px]">
          <LineChart
            data={responseData.data}
            labels={responseData.labels}
            targetLine={responseData.target}
            yAxisLabel="Minutes"
            tooltipPrefix="Response Time: "
            tooltipSuffix=" min"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}