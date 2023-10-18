import { Link } from "react-router-dom";
import SearchCard from "../../components/SearchCard/SearchCard";
import { useHotels } from "../../context/HotelsProvider";
import Map from "../../components/Map/Map";
const SearchResult = () => {
  const { data, error, loading } = useHotels();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-between my-12 gap-20 md:gap-16 lg:gap-12">
      <div className="w-full md:h-[650px] md:overflow-scroll">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/hotel/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <SearchCard item={item} />
          </Link>
        ))}
      </div>
      <div className="bg-slate-100 rounded-2xl p-4 w-full ">
        <Map />
      </div>
    </div>
  );
};
export default SearchResult;
