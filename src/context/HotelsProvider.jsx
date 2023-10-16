import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const HotelContext = createContext();
const HotelsProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const rooms = JSON.parse(searchParams.get("options"))?.rooms;
  const { data, error, loading } = useFetch(
    "http://localhost:3001/hotels",
    `city_like=${location || ""}&accommodates_gte=${rooms || 1}`
  );
  return (
    <HotelContext.Provider value={{ data, error, loading }}>
      {children}
    </HotelContext.Provider>
  );
};
export default HotelsProvider;

export const useHotels = () => {
  return useContext(HotelContext);
};
