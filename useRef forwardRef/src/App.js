
import "./App.css";
import React, { useEffect, useRef } from "react";
import Input from "./components/Input.js";

function App() {
  const fstnameRef = useRef(null);
  const lstnameRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    fstnameRef.current.focus();
  }, []);
  
  const fstKeydown = (e)=> {
    if(e.key === 'Enter')
    {
      lstnameRef.current.focus();
    }
  }
  const lstKeydown = ()=> {

  }
  const submitKeyDown = ()=> {

  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Input
          type="text"
          placeholder="enter first name"
          ref={fstnameRef}
          onKeyDown={fstKeydown}
        ></Input>
        <Input
          type="text"
          placeholder="enter last name"
          ref={lstnameRef}
          onKeyDown={lstKeydown}
        ></Input>
        <button ref={submitRef} onKeyDown={submitKeyDown}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
