let Announcements = () => {
  return (
    <div id="announcements">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
        <i className="fa-solid fa-bullhorn mr-3 sbu-red"></i> Announcements
      </h2>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mb-4 rounded-r shadow-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <i className="fa-solid fa-exclamation-circle text-yellow-600 dark:text-yellow-400"></i>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700 dark:text-yellow-200">
              <span className="font-bold">Holiday Hours:</span> All labs will
              close at 4 PM this Friday for the holiday weekend.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            Oct 24, 2025
          </span>
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mt-1">
            New Resin Printers in The Space
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            We've just installed two new Formlabs resin printers. Training
            sessions start next week.
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            Oct 20, 2025
          </span>
          <h3 className="font-bold text-gray-800 dark:text-gray-200 mt-1">
            Guest Speaker: Sustainable Making
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Join us in the Innovation Lab for a talk by alumni engineer Sarah
            Chen on recycled filaments.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Announcements;
