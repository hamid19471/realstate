import { useHotels } from "../../context/HotelsProvider";

const Map = () => {
  const { data, error, loading } = useHotels();
  return <div>this is Map</div>;
};
export default Map;
