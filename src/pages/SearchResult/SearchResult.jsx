import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get("location");
  const rooms = JSON.parse(searchParams.get("options"))?.rooms;
  const { data, error, loading } = useFetch(
    "http://localhost:3001/hotels",
    `host_location_like=${location}&name_like=${
      location || ""
    }&accommodates_gte=${rooms || 1}`
  );
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between my-12 gap-20 md:gap-16 lg:gap-12">
      <div className="w-full">{data.length}</div>
      <div className="bg-slate-100 rounded-2xl p-12 w-full">Map</div>
    </div>
  );
};
export default SearchResult;
