import React, { useState } from "react";

export const UserContext = React.createContext("User");

const Store = ({ children }) => {
  const [user, setUser] = useState("Geoff");
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default Store;
