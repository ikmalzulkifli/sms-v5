"use client";

import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Power, 
  Wifi, 
  SignalHigh, 
  Sun, 
  Activity, 
  Gauge
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ControllerStatus() {
  return (
    <div className="space-y-4">
      {/* Power Status */}
      <Card className="border-0 border-l-[6px] border-l-green-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-green-50/50 dark:bg-green-900/20 rounded-full">
              <Power className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Power Status</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">Online</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Network Status */}
      <Card className="border-0 border-l-[6px] border-l-blue-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-full">
              <Wifi className="h-5 w-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Network Status</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Connected</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signal Strength */}
      <Card className="border-0 border-l-[6px] border-l-purple-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-purple-50/50 dark:bg-purple-900/20 rounded-full">
              <SignalHigh className="h-5 w-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Signal Strength</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Excellent</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Luminescence Sensors */}
      <Card className="border-0 border-l-[6px] border-l-amber-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-amber-50/50 dark:bg-amber-900/20 rounded-full">
              <Sun className="h-5 w-5 text-amber-500" />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Luminescence Sensors</p>
                <p className="text-sm text-muted-foreground">Auto brightness control</p>
              </div>
              <Switch 
                defaultChecked 
                className="data-[state=checked]:bg-amber-500 data-[state=unchecked]:bg-gray-200"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Motion Detection */}
      <Card className="border-0 border-l-[6px] border-l-indigo-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full">
              <Activity className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Motion Detection</p>
                <p className="text-sm text-muted-foreground">Smart activation</p>
              </div>
              <Switch 
                defaultChecked 
                className="data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-gray-200"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operating Mode */}
      <Card className="border-0 border-l-[6px] border-l-rose-500 bg-gray-50 dark:bg-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-rose-50/50 dark:bg-rose-900/20 rounded-full">
              <Gauge className="h-5 w-5 text-rose-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Operating Mode</p>
              <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">Automatic</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 