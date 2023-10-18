import { HomeIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import PropertySingleCard from "../../components/PropertyList/PropertySingleCard/PropertySingleCard";
import useFetch from "../../hooks/useFetch";
const Hotels = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.replace("/", "");
  const { data, error, loading } = useFetch("/hotels");
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center bg-blue-100 py-12 mt-5 rounded-lg">
        <h1 className="font-bold text-5xl uppercase">Hotels</h1>
        <div className="flex items-center justify-center">
          <Link to="/">
            <HomeIcon className="h-4 w-4 text-blue-500" />
          </Link>
          &nbsp;|&nbsp;
          <span>{currentPath}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {data.map((hotel) => {
          return (
            <div key={hotel.id} className="m-2">
              <PropertySingleCard hotel={hotel} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hotels;
