import { useState, useEffect } from "react";

export const useFetch = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await apiCall();
      setData(response.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return { data, loading };
};
