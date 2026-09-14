import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { MakerSpace } from "../../interfaces/MakerSpace";
import parse from "html-react-parser";
import type { MockLiveData } from "../../interfaces/maker_space_interfaces/MockLiveData";
import mockLiveData from "../../../mockLiveData.json";

interface props {
  space: MakerSpace;
  setIsOpen: any;
  isOpen: any;
}
let Modal = ({ isOpen, setIsOpen, space }: props) => {
  const imageSrc = space.media.url.startsWith("//")
    ? `https:${space.media.url}`
    : space.media.url;
  const liveData = mockLiveData as MockLiveData;
  const spaceLiveData = liveData[space.name];

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
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
  );
};
export default Modal;
