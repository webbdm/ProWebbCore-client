import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch.js";

export const UserContext = React.createContext("User");

const Store = ({ children }) => {
  const [user, setUser] = useState(null); // TODO: Add auth. Temporarily just use 1 because I'm the only User in the db

  useEffect(async () => {
    setUser(await useFetch(1)); // // TODO: Add auth. Temporarily just use 1 because I'm the only User in the db;
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;
