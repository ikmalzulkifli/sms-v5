import React from 'react';
import MapView from '../../components/Map/MapView';
import StatusPanel from '../../components/Monitoring/StatusPanel';
import MetricsPanel from '../../components/Monitoring/MetricsPanel';

export default function Monitoring() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Operational Monitoring</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Status Panel */}
        <div className="lg:col-span-1">
          <StatusPanel />
        </div>

        {/* Map and Metrics Section */}
        <div className="lg:col-span-3 space-y-6">
          <MapView />
          <MetricsPanel />
        </div>
      </div>
    </div>
  );
}