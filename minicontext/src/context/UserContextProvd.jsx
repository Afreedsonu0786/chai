import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvd = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvd;
