import TaskReporting from '@/components/Schedule/TaskReporting';
import TaskList from '@/components/Schedule/TaskList';
import TaskStats from '@/components/Schedule/TaskStats';

export default function ScheduleMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Schedule Monitoring</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Stats and Reporting Panel */}
        <div className="space-y-6">
          {/* Task Stats */}
          <TaskStats />
          
          {/* Task Reporting Mobile Panel */}
          <div className="w-full lg:w-[360px]">
            <TaskReporting />
          </div>
        </div>

        {/* Right Column - Task List */}
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
} 