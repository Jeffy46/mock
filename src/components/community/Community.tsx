import Announcements from "./Announcements";
import Workshops from "./Workshops";

let Community = () => {
  return (
    <section className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Announcements></Announcements>
        <Workshops></Workshops>
      </div>
    </section>
  );
};
export default Community;
