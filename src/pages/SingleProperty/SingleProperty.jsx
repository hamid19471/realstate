import Map from "../../components/Map/Map";
import { useHotels } from "../../context/HotelsProvider";

const SingleProperty = () => {
  const { data, error, loading } = useHotels();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <div className="h-[600px] overflow-hidden">
        <Map />
      </div>
    </div>
  );
};
export default SingleProperty;
