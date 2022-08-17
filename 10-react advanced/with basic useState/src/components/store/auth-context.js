
import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false
    //default starting false
});

export default AuthContext;
//Authcontext is a object