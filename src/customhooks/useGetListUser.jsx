import { useState, useEffect } from "react";

const useGetListUser = (initialUsers = { name: "INIT", id: "0" }) => {
  const [listUsers, setListUsers] = useState([initialUsers]);
  const addUsers = ({ name, id }) => {
    setListUsers([...listUsers, { name, id }]);
    localStorage.setItem("users", JSON.stringify([...listUsers, { name, id }]));
  };
  const cleanUplist = () => {
    setListUsers([initialUsers]);
    localStorage.setItem("users", JSON.stringify([]));
  };

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setListUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  return { listUsers, addUsers, cleanUplist };
};

export default useGetListUser;
