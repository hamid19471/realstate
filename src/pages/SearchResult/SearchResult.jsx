import { Link, useLocation } from "react-router-dom";
import PropertySingleCard from "../../components/PropertyList/PropertySingleCard/PropertySingleCard";
import { useHotels } from "../../context/HotelsProvider";
import { HomeIcon } from "@heroicons/react/24/solid";

const SearchResult = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.replace("/", "");
  const { data, error, loading } = useHotels();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col-reverse md:flex-col items-start justify-between my-12 gap-20 md:gap-16 lg:gap-12">
      <div className="flex flex-col gap-3 items-center justify-center bg-blue-100 py-12 mt-5 rounded-lg w-full mb-12">
        <h1 className="font-bold text-5xl uppercase">Rearch Result</h1>
        <div className="flex items-center justify-center">
          <Link to="/">
            <HomeIcon className="h-4 w-4 text-blue-500" />
          </Link>
          &nbsp;|&nbsp;
          <span>{currentPath}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/hotel/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <PropertySingleCard hotel={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchResult;
