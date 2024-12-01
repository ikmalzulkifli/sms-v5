"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLink {
  name: string;
  path: string;
}

interface ModuleSidebarProps {
  module: 'street-lighting' | 'waste-management';
  links: SidebarLink[];
}

export default function ModuleSidebar({ module, links }: ModuleSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        {/* Home Button */}
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 mb-6 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </Link>

        <h2 className="text-xl font-semibold mb-4">
          {module === 'street-lighting' ? 'Smart Street Lighting' : 'Solid Waste Management'}
        </h2>
        <nav>
          <ul className="space-y-2">
            {links.map((link) => {
              const fullPath = `/${module}${link.path}`;
              const isActive = pathname === fullPath;
              
              return (
                <li key={link.path}>
                  <Link
                    href={fullPath}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.name}
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