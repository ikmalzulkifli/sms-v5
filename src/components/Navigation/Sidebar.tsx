"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  module: 'street-lighting' | 'waste-management';
}

const navItems = {
  'street-lighting': [
    { name: 'Monitoring Dashboard', path: '/dashboard' },
    { name: 'Maintenance', path: '/maintenance' },
    { name: 'Reporting', path: '/reporting' },
    { name: 'Complaint (OSC)', path: '/complaint' },
    { name: 'Smart Controller', path: '/controller' },
    { name: 'Operational Monitoring', path: '/monitoring' },
  ],
  'waste-management': [
    { name: 'Monitoring Dashboard', path: '/dashboard' },
    { name: 'Assets Monitoring', path: '/assets' },
    { name: 'Complaint (OSC)', path: '/complaint' },
    { name: 'Schedule Reporting', path: '/schedule' },
    { name: 'Waste Weight Management', path: '/weight' },
  ],
};

export default function Sidebar({ module }: SidebarProps) {
  const pathname = usePathname();
  const items = navItems[module];

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          {module === 'street-lighting' ? 'Smart Street Lighting' : 'Solid Waste Management'}
        </h2>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => {
              const fullPath = `/${module}${item.path}`;
              const isActive = pathname === fullPath;
              
              return (
                <li key={item.path}>
                  <Link
                    href={fullPath}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
} 