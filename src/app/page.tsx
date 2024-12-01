import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: 'url("/bg-home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability - reduced opacity */}
      <div className="absolute inset-0 bg-black/30" />

      <main className="flex flex-col items-center gap-12 relative z-10">
        {/* Header/Logo Section - increased transparency */}
        <div className="text-center mb-8 bg-black/20 p-8 rounded-xl backdrop-blur-sm">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Smart City Dashboard
          </h1>
          <p className="text-gray-100 text-lg drop-shadow">
            Select a module to monitor and manage
          </p>
        </div>

        {/* Module Cards - increased transparency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/street-lighting/dashboard"
            className="flex flex-col items-center p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-all hover:shadow-lg backdrop-blur-sm"
          >
            <div className="w-16 h-16 mb-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Smart Street Lighting</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Monitor and control street lighting infrastructure
            </p>
          </Link>

          <Link
            href="/waste-management/dashboard"
            className="flex flex-col items-center p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-all hover:shadow-lg backdrop-blur-sm"
          >
            <div className="w-16 h-16 mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Solid Waste Management</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Track and optimize waste collection operations
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
