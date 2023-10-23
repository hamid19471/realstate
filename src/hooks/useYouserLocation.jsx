import { useState } from "react";

const useYouserLocation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState({});

  const getUserLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setError("Your location is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.message);
        setLoading(false);
      }
    );
  };
  return { getUserLocation, userLocation, loading, error };
};

export default useYouserLocation;
