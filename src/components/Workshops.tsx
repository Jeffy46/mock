import { HashLink } from "react-router-hash-link";

let Workshops = () => {
  return (
    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50">
      <div id="workshops">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <i className="fa-solid fa-calendar-day mr-3 sbu-red"></i> Upcoming
              Workshops
            </h2>
          </div>
          <div className="text-1xl font-bold text-blue-200 mb-6 flex items-center no-underline hover:underline">
            <HashLink to="/workshops">Learn More &gt;</HashLink>
          </div>
        </div>


        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2 pt-2">

            {/* Intro to Laser Cutting */}
            <div className="w-56 shrink-0 aspect-square bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col overflow-hidden">
              <div className="bg-sbu-red text-white px-4 py-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                    Today
                  </div>
                  <div className="text-lg font-bold leading-tight">2:00 PM</div>
                </div>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Full
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base leading-snug">
                  Intro to Laser Cutting
                </h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <i className="fa-solid fa-location-dot mr-1.5"></i>
                  Innovation Lab
                  <a href="https://example.com" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition ml-auto">RSVP</a>
                </div>
              </div>
            </div>

            {/* VR Development Unity */}
            <div className="w-56 shrink-0 aspect-square bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col overflow-hidden">
              <div className="bg-sbu-red text-white px-4 py-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                    Nov 12
                  </div>
                  <div className="text-lg font-bold leading-tight">4:00 PM</div>
                </div>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Open
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base leading-snug">
                  VR Development Unity
                </h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <i className="fa-solid fa-location-dot mr-1.5"></i>
                  Teaching & Learning Lab
                  <a href="https://example.com" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition ml-auto">RSVP</a>
                </div>
              </div>
            </div>

            {/* Arduino Basics */}
            <div className="w-56 shrink-0 aspect-square bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col overflow-hidden">
              <div className="bg-sbu-red text-white px-4 py-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                    Nov 14
                  </div>
                  <div className="text-lg font-bold leading-tight">5:30 PM</div>
                </div>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Open
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base leading-snug">
                  Arduino Basics
                </h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <i className="fa-solid fa-location-dot mr-1.5"></i>
                  The Space (CEAS)
                  <a href="https://example.com" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition ml-auto">RSVP</a>
                </div>
              </div>
            </div>

            {/* Textile Tech */}
            <div className="w-56 shrink-0 aspect-square bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col overflow-hidden">
              <div className="bg-sbu-red text-white px-4 py-2 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
                    Nov 18
                  </div>
                  <div className="text-lg font-bold leading-tight">1:00 PM</div>
                </div>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Limited
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 text-base leading-snug">
                  Textile Tech
                </h4>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <i className="fa-solid fa-location-dot mr-1.5"></i>
                  The 3rd Space
                  <a href="https://example.com" target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition ml-auto">RSVP</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Workshops;
{/*<table className="min-w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
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
          </table> */}