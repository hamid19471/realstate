import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useFetch from "../../hooks/useFetch";
import PropertySingleCard from "./PropertySingleCard/PropertySingleCard";
const PropertyList = () => {
  const {
    data: hotels,
    loading,
    error,
  } = useFetch("http://localhost:3001/hotels");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <div className="flex items-center justify-between mb-16 mt-24">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          Some Hotels to Reseve
        </h1>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <p>See all</p>
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4 mb-36">
        {hotels
          ?.map((hotel) => {
            return <PropertySingleCard key={hotel.id} hotel={hotel} />;
          })
          .slice(0, 6)}
      </div>
    </div>
  );
};
export default PropertyList;
