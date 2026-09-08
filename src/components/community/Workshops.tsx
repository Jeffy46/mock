let Workshops = () => {
  return (
    <div id="workshops">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
        <i className="fa-solid fa-calendar-day mr-3 sbu-red"></i> Upcoming
        Workshops
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-700/50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Event
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Location
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                Today, 2:00 PM
              </td>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100 font-medium">
                Intro to Laser Cutting
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                Innovation Lab
              </td>
              <td className="py-3 px-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Full
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                Nov 12, 4:00 PM
              </td>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100 font-medium">
                VR Development Unity
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                Teaching & Learning Lab
              </td>
              <td className="py-3 px-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Open
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                Nov 14, 5:30 PM
              </td>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100 font-medium">
                Arduino Basics
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                The Space (CEAS)
              </td>
              <td className="py-3 px-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Open
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">
                Nov 18, 1:00 PM
              </td>
              <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100 font-medium">
                Textile Tech
              </td>
              <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                The 3rd Space
              </td>
              <td className="py-3 px-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Limited
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Workshops;
