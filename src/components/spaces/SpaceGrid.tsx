import type { MakerSpace } from "../../interfaces/MakerSpace";
import SpaceCard from "./SpaceCard";
import data from "../../../published.json";

let SpaceGrid = () => {
  let spaces: MakerSpace[];
  spaces = data?.data?.maker_spaces;
  return (
    // <!-- Spaces Grid -->
    <section
      id="spaces"
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 flex items-center">
        <i className="fa-solid fa-building mr-3 sbu-red"></i> Our Spaces
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        id="spaces-container"
      >
        {spaces.map((s: MakerSpace) => (
          <SpaceCard space={s} />
        ))}
      </div>
    </section>
  );
};
export default SpaceGrid;
