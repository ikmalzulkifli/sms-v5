export default function StatusPanel() {
  const status = {
    total: 150,
    operational: 130,
    faulty: 15,
    maintenance: 5,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">System Status</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Lights</div>
            <div className="text-2xl font-bold">{status.total}</div>
          </div>
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
            <div className="text-sm text-green-600 dark:text-green-400">Operational</div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {status.operational}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
            <div className="text-sm text-red-600 dark:text-red-400">Faulty</div>
            <div className="text-2xl font-bold text-red-700 dark:text-red-300">
              {status.faulty}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
            <div className="text-sm text-yellow-600 dark:text-yellow-400">Maintenance</div>
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
              {status.maintenance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 