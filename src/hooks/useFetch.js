import { useState, useEffect } from "react";

export const useFetch = (apiCall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const data = await apiCall();
    setData(data);
    setLoading(false);
  }, []);

  return { data, loading };
};
