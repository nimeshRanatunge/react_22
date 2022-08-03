
import "./App.css";
import React, { useMemo, useState } from "react";
import Child from "./components/Child.js";

function App() {

 const [i, seti] = useState(0);
  const onclickHandle = ()=> {
    seti(i+1);
  }

  const memochild = useMemo(()=>{
    console.log('x2');
    return <Child></Child>
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Momo</h3>
        <h2>i: {i}</h2>
        <button onClick={onclickHandle}>BBB</button>

        <h1>normal render</h1>
        <Child></Child>
        <h1>memo render</h1>
        {memochild}
      </header>
    </div>
  );
}

export default App;
