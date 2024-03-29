import React, { useState, useEffect } from "react";
import { userApi } from "./providers/api.js";
import { useFetch } from "./hooks/useFetch.js";

export const UserContext = React.createContext("User");


const combineProviders = (providers) => providers.reduce(
  (Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  )
);
const Providers = combineProviders([UserContext.Provider]);

const Store = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    bio: "",
    image: "",
    projects: [],
  }); // TODO: Add auth. Temporarily just use 1 because I'm the only User in the db

  const { data } = useFetch(async () => await userApi.getUser(1), user);

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
