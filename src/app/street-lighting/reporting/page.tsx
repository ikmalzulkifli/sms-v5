import ReportSelector from '@/components/Reporting/ReportSelector';
import PerformanceReport from '@/components/Reporting/PerformanceReport';
import MaintenanceReport from '@/components/Reporting/MaintenanceReport';
import ReportActions from '@/components/Reporting/ReportActions';

export default function ReportingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <ReportActions />
      </div>

      <ReportSelector />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceReport />
        <MaintenanceReport />
      </div>
    </div>
  );
} 