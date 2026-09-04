let Navbar = () => {
  return (
    // Navigation
    <nav className="bg-sbu-red text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <i className="fa-solid fa-tools text-2xl"></i>
          <span className="font-bold text-xl tracking-tight">
            SBU Maker Portal
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#spaces" className="hover:text-gray-200 transition">
            Spaces
          </a>
          <a href="#map-section" className="hover:text-gray-200 transition">
            Map
          </a>
          <a href="#workshops" className="hover:text-gray-200 transition">
            Workshops
          </a>
          <a href="#announcements" className="hover:text-gray-200 transition">
            Announcements
          </a>
          <a href="#leaderboard" className="hover:text-gray-200 transition">
            Top Makers
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
