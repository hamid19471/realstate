import { useParams } from "react-router-dom";
import Map from "../../components/Map/Map";
import useFetch from "../../hooks/useFetch";

const SingleProperty = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/hotels/${id}`);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <div className="h-[600px] overflow-hidden">
        <Map />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default SingleProperty;
