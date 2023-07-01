import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//   name: "cor",
//   age: 33
// }

export const UserProvider = ({children}) => {

  const [user, setUser ] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}