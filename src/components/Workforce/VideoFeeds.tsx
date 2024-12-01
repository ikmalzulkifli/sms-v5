"use client";

import { Camera, WifiOff, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface CameraFeed {
  id: number;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
}

interface VideoFeedsProps {
  feeds: CameraFeed[];
}

export default function VideoFeeds({ feeds }: VideoFeedsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-500';
      case 'offline':
        return 'text-red-500';
      case 'maintenance':
        return 'text-amber-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <Camera className={`h-5 w-5 ${getStatusColor(status)}`} />;
      case 'offline':
        return <WifiOff className={`h-5 w-5 ${getStatusColor(status)}`} />;
      case 'maintenance':
        return <AlertTriangle className={`h-5 w-5 ${getStatusColor(status)}`} />;
      default:
        return <Camera className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Live Camera Feeds</h2>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Online
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            Offline
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            Maintenance
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {feeds.map((feed) => (
          <Card key={feed.id} className="overflow-hidden border-0 bg-gray-50 dark:bg-gray-800">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-900 relative">
                {/* Placeholder for video feed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {getStatusIcon(feed.status)}
                </div>
                {feed.status !== 'online' && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {feed.status.charAt(0).toUpperCase() + feed.status.slice(1)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3 flex justify-between items-center">
                <span className="font-medium text-sm">{feed.location}</span>
                <span className={`text-xs ${getStatusColor(feed.status)}`}>
                  ● {feed.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 