import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useHotels } from "../../context/HotelsProvider";
import { useSearchParams } from "react-router-dom";
// import useYouserLocation from "../../hooks/useYouserLocation";

const Map = () => {
  const { data, error, loading } = useHotels();
  const [location, setLocation] = useState([20, 20]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // const {
  //   loading: positionLoading,
  //   userLocation,
  //   getUserLocation,
  // } = useYouserLocation();

  useEffect(() => {
    if (lat && lng) setLocation([lat, lng]);
  }, [lat, lng]);

  // useEffect(() => {
  //   if (userLocation?.lat && userLocation?.lng) {
  //     setLocation([userLocation?.lat, userLocation?.lng]);
  //   }
  // }, [userLocation]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="h-screen">
      <MapContainer
        className="rounded-lg"
        center={[lat || location[0], lng || location[1]]}
        zoom={13}
        scrollWheelZoom={true}
      >
        {/* <button
          onClick={getUserLocation}
          className="bg-blue-700 p-1 px-3 shadow-lg shadow-blue-500 rounded-lg text-white absolute bottom-0 left-0 z-[999] m-2"
        >
          {positionLoading ? "Loading..." : "Your Location"}
        </button> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {data.map((hotel) => {
          return (
            <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]}>
              <Popup>{hotel.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Map;
