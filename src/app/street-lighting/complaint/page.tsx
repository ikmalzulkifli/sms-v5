import ComplaintTabs from '@/components/Complaint/ComplaintTabs';
import NotificationPanel from '@/components/Complaint/NotificationPanel';

export default function ComplaintPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Complaint Management (OSC)</h1>
        <NotificationPanel />
      </div>
      <ComplaintTabs />
    </div>
  );
} 