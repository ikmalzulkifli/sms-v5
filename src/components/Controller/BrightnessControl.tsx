"use client";

import { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

interface ZoneControl {
  id: string;
  name: string;
  brightness: number;
  autoMode: boolean;
}

export default function BrightnessControl() {
  const [zones, setZones] = useState<ZoneControl[]>([
    { id: 'zone1', name: 'Zone A', brightness: 80, autoMode: true },
    { id: 'zone2', name: 'Zone B', brightness: 60, autoMode: true },
    { id: 'zone3', name: 'Zone C', brightness: 70, autoMode: false },
  ]);

  const handleBrightnessChange = (zoneId: string, value: number[]) => {
    setZones(zones.map(zone => 
      zone.id === zoneId ? { ...zone, brightness: value[0] } : zone
    ));
  };

  const handleAutoModeToggle = (zoneId: string) => {
    setZones(zones.map(zone =>
      zone.id === zoneId ? { ...zone, autoMode: !zone.autoMode } : zone
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Brightness Control</h2>
      <div className="space-y-6">
        {zones.map((zone) => (
          <div key={zone.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{zone.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{zone.brightness}%</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Auto</span>
                  <Switch
                    checked={zone.autoMode}
                    onCheckedChange={() => handleAutoModeToggle(zone.id)}
                    className="data-[state=checked]:bg-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Slider
                value={[zone.brightness]}
                max={100}
                step={1}
                disabled={zone.autoMode}
                onValueChange={(value) => handleBrightnessChange(zone.id, value)}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 