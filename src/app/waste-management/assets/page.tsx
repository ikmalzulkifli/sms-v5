import VehicleMap from '@/components/Assets/VehicleMap';
import VehicleList from '@/components/Assets/VehicleList';
import RouteAlerts from '@/components/Assets/RouteAlerts';

export default function AssetsMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Assets Monitoring</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Vehicle List and Alerts */}
        <div className="lg:col-span-1 space-y-6">
          <VehicleList />
          <RouteAlerts />
        </div>

        {/* Map Section */}
        <div className="lg:col-span-3">
          <VehicleMap />
        </div>
      </div>
    </div>
  );
} 