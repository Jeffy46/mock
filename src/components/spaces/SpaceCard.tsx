import type { MakerSpace } from "../../interfaces/MakerSpace";
import parse from "html-react-parser";
import mockLiveData from "../../../mockLiveData.json";
import type { MockLiveData } from "../../interfaces/maker_space_interfaces/MockLiveData";

interface props {
  space: MakerSpace;
}
let SpaceCard = ({ space }: props) => {
  const imageSrc = space.media.url.startsWith("//")
    ? `https:${space.media.url}`
    : space.media.url;
  const liveData = mockLiveData as MockLiveData;
  console.log(liveData[space.name].hours);
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <img
          src={imageSrc}
          alt="${slide.text.headline}"
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
            {liveData[space.name].hours}
          </div>
          <button
            data-id="${slide.id}"
            className="view-details-button text-sbu-red hover:text-red-800 dark:hover:text-red-400 font-semibold text-sm focus:outline-none text-white"
          >
            View Details <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpaceCard;
