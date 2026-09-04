let Hero = () => {
  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50">
      <div className="md:flex items-center">
        <div className="md:w-2/3 pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Innovate. Create. <span className="sbu-red">Make.</span>
          </h1>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            id="hero-text"
          >
            <span className="block">
              Welcome to Stony Brook University, a campus where curiosity meets
              creation. We believe the most powerful ideas are the ones you can
              build, test, and share. This tour is your guide to our vibrant and
              diverse network of makerspaces, innovation hubs, and creative
              studios—each with a unique purpose, but all united by a common
              goal: <strong>to empower you to bring your vision to life</strong>
              .
            </span>
            <span className="block">
              Across our campus, we've cultivated an ecosystem where any idea
              can find a home. Whether you're an engineer ready to prototype a
              new device, an artist merging technology with critical expression,
              an educator designing the next generation of digital learning
              tools, or an entrepreneur with a groundbreaking concept, there is
              a space here for you. From 3D printers and laser cutters to VR
              studios and electronics labs, these facilities provide the tools
              and support to turn your concepts into tangible reality.
            </span>
            <span className="block">
              Each stop on this tour will introduce you to a unique community of
              creators, thinkers, and innovators. We invite you to discover the
              tools, find your collaborators, and get inspired.
            </span>
            <span className="block">
              Your journey from idea to impact starts now.{" "}
              <strong>Begin the tour to explore our spaces.</strong>
            </span>
          </p>
          <div className="flex space-x-4">
            <a
              href="#spaces"
              className="bg-sbu-red hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow transition"
            >
              Find a Space
            </a>
            <a
              href="#workshops"
              className="bg-white border-2 border-sbu-red text-sbu-red hover:bg-red-50 dark:hover:bg-gray-800 font-bold py-3 px-6 rounded-lg transition"
            >
              Upcoming Workshops
            </a>
          </div>
        </div>
        {/*Stats / Quick Glance */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-4 border-b dark:border-gray-600 pb-2">
              Live Campus Status
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-sm text-white">
                  <i className="fa-solid fa-print mr-2 text-blue-600"></i>3D
                  Printers
                </span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                  12 Available
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-white">
                  <i className="fa-solid fa-bolt mr-2 text-yellow-600"></i>Laser
                  Cutters
                </span>
                <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded-full">
                  High Demand
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-white">
                  <i className="fa-solid fa-vr-cardboard mr-2 text-purple-600"></i>
                  VR Stations
                </span>
                <span className="text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded-full">
                  4 Available
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
