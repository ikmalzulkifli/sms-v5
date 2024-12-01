import BrightnessControl from '@/components/Controller/BrightnessControl';
import SensorThresholds from '@/components/Controller/SensorThresholds';
import ControllerStatus from '@/components/Controller/ControllerStatus';

export default function ControllerPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Smart Controller</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status Panel */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Streetlight Configuration Status</h2>
            <ControllerStatus />
          </div>
        </div>

        {/* Control Panels */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Control Panel</h2>
            <BrightnessControl />
          </div>
          <SensorThresholds />
        </div>
      </div>
    </div>
  );
} 