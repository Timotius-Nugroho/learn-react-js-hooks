import { useState, useEffect } from "react";

function useGetDummyUsers({ limit } = { limit: 5 }) {
  const [data, setData] = useState([]);

  const getDummyUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();
      setData(jsonData.slice(0, limit));
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDummyUsers();
  }, [limit]);

  return { data, refetch: getDummyUsers };
}

export default useGetDummyUsers;
