import type { MakerSpace } from "../../interfaces/MakerSpace";
import parse from "html-react-parser";
import mockLiveData from "../../../mockLiveData.json";
import type { MockLiveData } from "../../interfaces/maker_space_interfaces/MockLiveData";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface props {
  space: MakerSpace;
}

let SpaceCard = ({ space }: props) => {
  let [isOpen, setIsOpen] = useState(false);
  const imageSrc = space.media.url.startsWith("//")
    ? `https:${space.media.url}`
    : space.media.url;
  const liveData = mockLiveData as MockLiveData;
  const spaceLiveData = liveData[space.name];

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <img
          src={imageSrc}
          alt={space.text.headline}
          className="w-full h-48 object-cover"
        ></img>
        <div className=" dark:bg-green-900 absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Open Now
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">
          {space.text.headline}
        </h3>
        <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {parse(space.text.text)}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <i className="fa-solid fa-clock mr-1"></i>{" "}
            {spaceLiveData?.hours ?? "Hours unavailable"}
          </div>
          <button
            data-id={space.name}
            className="view-details-button text-sbu-red hover:text-red-800 dark:hover:text-red-400 font-semibold text-sm focus:outline-none text-white no-underline hover:underline"
            onClick={() => setIsOpen(true)}
          >
            View Details <i className="fa-solid fa-arrow-right ml-1 "></i>
          </button>
        </div>
      </div>
      {/*Modal*/}

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

        <div
          className="fixed inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col max-h-[90vh]">

            <div className="bg-sbu-red p-4 flex justify-between items-center text-white">
              <DialogTitle className="text-xl font-bold">
                {space.text.headline}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-times text-2xl"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>

                  <img
                    src={imageSrc}
                    alt={space.text.headline}
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                  />


                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-3">
                      Details
                    </h4>


                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <i className="fa-solid fa-clock mr-2 w-4"></i>
                      {spaceLiveData?.hours ?? "Hours unavailable"}
                    </p>


                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <i className="fa-solid fa-users mr-2 w-4"></i>
                      {spaceLiveData?.capacity ?? "Capacity unavailable"}
                    </p>


                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">
                        Live Availability
                      </h4>
                      {/* Place for data for machine avail*/}
                    </div>
                  </div>
                </div>


                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 border-b dark:border-gray-600 pb-2">
                    Description & Resources
                  </h4>


                  <div className="prose prose-sm text-gray-600 dark:text-gray-300 dark:prose-invert mb-6">
                    {parse(space.text.text)}
                  </div>


                  {space.resources && space.resources.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">
                        Resources
                      </h4>
                      <ul className="space-y-2">
                        {space.resources.map((resource, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                          >
                            <i className="fa-solid fa-check text-sbu-red mr-2 mt-1"></i>
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/*Footer*/}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 border-t dark:border-gray-600 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded transition"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default SpaceCard;
