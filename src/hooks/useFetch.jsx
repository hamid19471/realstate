import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, query = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, query]);
  return { data, error, loading };
};

export default useFetch;
