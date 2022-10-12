import { useState, useEffect } from "react";

function useGetDummyUserById({ id } = { id: undefined }) {
  const [data, setData] = useState({});

  const getDummyUsersById = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    if (id) {
      getDummyUsersById();
    } else {
      setData({});
    }
  }, [id]);

  return { data, refetch: getDummyUsersById };
}

export default useGetDummyUserById;
