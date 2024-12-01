"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, Leaf, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart } from '@/components/Charts';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
  color: string;
  data: {
    daily: number[];
    weekly: number[];
    monthly: number[];
  };
  labels: {
    daily: string[];
    weekly: string[];
    monthly: string[];
  };
}

function MetricCard({ title, value, unit, icon, color, data, labels }: MetricCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get accent color class based on the background color
  const getAccentColor = (bgColor: string) => {
    if (bgColor.includes("amber")) return "border-l-4 border-l-amber-500";
    if (bgColor.includes("green")) return "border-l-4 border-l-green-500";
    if (bgColor.includes("blue")) return "border-l-4 border-l-blue-500";
    return "";
  };

  return (
    <Card className={`w-full bg-white dark:bg-gray-900 ${getAccentColor(color)} border-0`}>
      <CardContent className="p-4">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${color}`}>
              {icon}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">
                {value} <span className="text-sm font-normal">{unit}</span>
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily">
                <div className="h-[300px] mt-4">
                  <LineChart
                    data={data.daily}
                    labels={labels.daily}
                    yAxisLabel={unit}
                    tooltipPrefix={`${title}: `}
                    tooltipSuffix={` ${unit}`}
                  />
                </div>
              </TabsContent>
              <TabsContent value="weekly">
                <div className="h-[300px] mt-4">
                  <LineChart
                    data={data.weekly}
                    labels={labels.weekly}
                    yAxisLabel={unit}
                    tooltipPrefix={`${title}: `}
                    tooltipSuffix={` ${unit}`}
                  />
                </div>
              </TabsContent>
              <TabsContent value="monthly">
                <div className="h-[300px] mt-4">
                  <LineChart
                    data={data.monthly}
                    labels={labels.monthly}
                    yAxisLabel={unit}
                    tooltipPrefix={`${title}: `}
                    tooltipSuffix={` ${unit}`}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function MetricsPanel() {
  const metrics = [
    {
      title: "Energy Consumption",
      value: "245",
      unit: "kWh",
      icon: <Zap className="h-5 w-5 text-amber-600" />,
      color: "bg-amber-50 dark:bg-amber-900/20",
      data: {
        daily: [245, 238, 252, 235, 242, 248, 240],
        weekly: [1680, 1720, 1650, 1690],
        monthly: [6800, 7200, 6900, 7100, 7300, 6950],
      },
      labels: {
        daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        weekly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    },
    {
      title: "Carbon Emission",
      value: "123",
      unit: "kg CO₂",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      color: "bg-green-50 dark:bg-green-900/20",
      data: {
        daily: [123, 119, 126, 118, 121, 124, 120],
        weekly: [840, 860, 825, 845],
        monthly: [3400, 3600, 3450, 3550, 3650, 3475],
      },
      labels: {
        daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        weekly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    },
    {
      title: "Current Operating Cost",
      value: "320",
      unit: "RM",
      icon: <DollarSign className="h-5 w-5 text-blue-600" />,
      color: "bg-blue-50 dark:bg-blue-900/20",
      data: {
        daily: [320, 310, 325, 308, 315, 322, 312],
        weekly: [2240, 2280, 2200, 2260],
        monthly: [8800, 9200, 8900, 9100, 9300, 8950],
      },
      labels: {
        daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        weekly: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Title Section */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold">Performance Metrics</h2>
        <span className="text-sm text-muted-foreground mt-1">
          Real-time monitoring data
        </span>
      </div>

      {/* Metrics Cards */}
      <div className="space-y-4 overflow-y-auto flex-1">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
} 