import { useState, useEffect } from "react";

export const useFetch = (apiCall, initialState) => {
  const [data, setData] = useState(initialState);
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
