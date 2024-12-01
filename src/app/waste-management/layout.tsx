import ModuleSidebar from '@/components/Layout/ModuleSidebar';

const wasteManagementLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Workforce Monitoring', path: '/workforce' },
  { name: 'Assets Monitoring', path: '/assets' },
  { name: 'Complaint (OSC)', path: '/complaint' },
  { name: 'Schedule Reporting', path: '/schedule' },
  { name: 'Waste Weight Management', path: '/weight' },
];

export default function WasteManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <ModuleSidebar module="waste-management" links={wasteManagementLinks} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
} 