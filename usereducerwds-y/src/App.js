import React, { useState } from "react";
import './App.css';
import Header from './components/Header/index.js';
import { ThemeContext, themes } from "./Providers/Themes/index.js";

const App = () => {
  const [selectedTheme, setTheme] = useState(themes.light);
  const handleClick = () => {
    setTheme(selectedTheme === themes.dark ? themes.light: themes.dark);
  };

  return (
    <ThemeContext.Provider value={selectedTheme}>
      <div>
        <Header></Header>
        <button onClick={handleClick}>Click</button>
      </div>
    </ThemeContext.Provider>
  );
};

  export default App;