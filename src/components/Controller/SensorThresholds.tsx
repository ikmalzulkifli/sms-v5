"use client";

import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Threshold {
  id: string;
  name: string;
  type: 'motion' | 'lux';
  value: number;
  unit: string;
  description: string;
}

export default function SensorThresholds() {
  const [motionThresholds, setMotionThresholds] = useState<Threshold[]>([
    {
      id: 'motion1',
      name: 'Motion Sensitivity',
      type: 'motion',
      value: 70,
      unit: '%',
      description: 'Detection sensitivity level',
    },
    {
      id: 'min_lux',
      name: 'Minimum Light Level',
      type: 'lux',
      value: 20,
      unit: 'lux',
      description: 'Light level when no motion detected',
    },
    {
      id: 'max_lux',
      name: 'Maximum Light Level',
      type: 'lux',
      value: 80,
      unit: 'lux',
      description: 'Light level when motion detected',
    },
  ]);

  const [luxThresholds, setLuxThresholds] = useState<Threshold[]>([
    {
      id: 'ambient_sensitivity',
      name: 'Ambient Light Sensitivity',
      type: 'lux',
      value: 50,
      unit: 'lux',
      description: 'Surrounding light detection sensitivity',
    },
    {
      id: 'low_lux',
      name: 'Low Light Threshold',
      type: 'lux',
      value: 30,
      unit: 'lux',
      description: 'Light level in low ambient light',
    },
    {
      id: 'high_lux',
      name: 'High Light Threshold',
      type: 'lux',
      value: 90,
      unit: 'lux',
      description: 'Light level in bright ambient light',
    },
  ]);

  const handleMotionThresholdChange = (id: string, value: number[]) => {
    setMotionThresholds(motionThresholds.map(threshold =>
      threshold.id === id ? { ...threshold, value: value[0] } : threshold
    ));
  };

  const handleLuxThresholdChange = (id: string, value: number[]) => {
    setLuxThresholds(luxThresholds.map(threshold =>
      threshold.id === id ? { ...threshold, value: value[0] } : threshold
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Sensor Thresholds</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Motion-Based Panel */}
        <Card className="bg-white dark:bg-gray-900 border-0">
          <CardHeader>
            <CardTitle className="text-base font-medium">Motion-Based Lighting Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {motionThresholds.map((threshold) => (
              <div key={threshold.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{threshold.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{threshold.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{threshold.value} {threshold.unit}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[threshold.value]}
                    max={threshold.type === 'motion' ? 100 : 100}
                    min={0}
                    step={1}
                    onValueChange={(value) => handleMotionThresholdChange(threshold.id, value)}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Surrounding Lux-Based Panel */}
        <Card className="bg-white dark:bg-gray-900 border-0">
          <CardHeader>
            <CardTitle className="text-base font-medium">Surrounding Lux-Based Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {luxThresholds.map((threshold) => (
              <div key={threshold.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{threshold.name}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{threshold.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{threshold.value} {threshold.unit}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[threshold.value]}
                    max={100}
                    min={0}
                    step={1}
                    onValueChange={(value) => handleLuxThresholdChange(threshold.id, value)}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 