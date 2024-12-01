import ModuleSidebar from '@/components/Layout/ModuleSidebar';

const streetLightingLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Maintenance', path: '/maintenance' },
  { name: 'Operational Monitoring', path: '/monitoring' },
  { name: 'Complaint (OSC)', path: '/complaint' },
  { name: 'Smart Controller', path: '/controller' },
  { name: 'Reporting', path: '/reporting' },
];

export default function StreetLightingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <ModuleSidebar module="street-lighting" links={streetLightingLinks} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
} 