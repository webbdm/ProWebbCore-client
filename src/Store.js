import React, { useState, useEffect } from "react";
import { userApi } from "./providers/api.js";
import { useFetch } from "./hooks/useFetch.js";

export const UserContext = React.createContext("User");

const Store = ({ children }) => {
  const [user, setUser] = useState(null); // TODO: Add auth. Temporarily just use 1 because I'm the only User in the db

  const { data } = useFetch(() => userApi.getUser(1));

  useEffect(() => {
    setUser(data); // // TODO: Add auth. Temporarily just use 1 because I'm the only User in the db;
  }, [data]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;
