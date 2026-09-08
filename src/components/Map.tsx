import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import data from "../../published.json";
import type { MakerSpace } from "../interfaces/MakerSpace";
// Bring back the classic Leaflet marker using stable CDN links
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
let Map = () => {
  let spaces: MakerSpace[];
  spaces = data?.data?.maker_spaces;
  console.log(spaces);
  return (
    <section
      id="map-section"
      className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
        <i className="fa-solid fa-map-location-dot mr-3 sbu-red"></i> Campus Map
      </h2>
      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
        <div id="map">
          <MapContainer
            center={[40.9145, -73.123]}
            zoom={16}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {spaces.map((m: MakerSpace) => (
              <Marker
                position={[m.location.lat, m.location.lon]}
                icon={defaultIcon}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
export default Map;
