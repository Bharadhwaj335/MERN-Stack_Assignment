import { useState } from "react";
import  { UserContext } from "./UserContext.js";

function UserContextProvider({children}) {

    //state
    const [user, setUser] = useState({
        name: "Brad",
        age: 21,
        email: "bwaj@gmail.com"
    });
    
    //function to modify user state by updating a property
    const changeUser = (updatedUser) => {
        setUser(updatedUser);
    }

    return (
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider