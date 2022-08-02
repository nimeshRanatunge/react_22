import React from "react";
import { ThemeContext } from "../../Providers/Themes";

const Header =()=>{

    const theme = React.useContext(ThemeContext);
    return(
        <h1 style={{color: theme.foreground, background:theme.background}}>trying to learn react</h1>
    );
}

export default Header;

// search for nearest ThemeContext provider
