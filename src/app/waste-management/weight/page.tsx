import WeightEntry from '@/components/Weight/WeightEntry';
import WeightHistory from '@/components/Weight/WeightHistory';
import WeightStats from '@/components/Weight/WeightStats';

export default function WeightManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Waste Weight Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Stats and Entry Panel */}
        <div className="space-y-6">
          {/* Weight Stats */}
          <WeightStats />
          
          {/* Weight Entry Mobile Panel */}
          <div className="w-full lg:w-[360px]">
            <WeightEntry />
          </div>
        </div>

        {/* Right Column - History */}
        <div>
          <WeightHistory />
        </div>
      </div>
    </div>
  );
} 