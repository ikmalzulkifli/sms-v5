"use client";

import { useState } from 'react';

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span>Notifications</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Recent Notifications</h3>
            <div className="space-y-2">
              <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                <p className="text-sm">New complaint received from i-Tegur</p>
                <span className="text-xs text-gray-500">5 minutes ago</span>
              </div>
              {/* Add more notifications */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 