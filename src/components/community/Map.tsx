import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import data from "../../../published.json";
import type { MakerSpace } from "../../interfaces/MakerSpace";
import { useState } from "react";
import Modal from "../spaces/Modal";

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
  const [selectedSpace, setSelectedSpace] = useState<MakerSpace | null>(null);
  spaces = data?.data?.maker_spaces;
  return (
    <>
      <section id="map-section">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
          <i className="fa-solid fa-map-location-dot mr-3 sbu-red"></i> Campus
          Map
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
                  key={m.name}
                  position={[m.location.lat, m.location.lon]}
                  icon={defaultIcon}
                  eventHandlers={{
                    click: () => {
                      setSelectedSpace(m);
                    },
                  }}
                >
                  <Popup>{m.text.headline}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
      {/*Modal*/}
      {selectedSpace && (
        <Modal
          isOpen={true}
          setIsOpen={(open: boolean) => {
            if (!open) {
              setSelectedSpace(null);
            }
          }}
          space={selectedSpace}
        />
      )}
    </>
  );
};
export default Map;
