import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: 'add-todo'
}

const reducer = (state, action) => {
  
};

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name,setName] = useState('')

  const handleSubmit =(e)=> {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO})
    setName('')
  }


  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      </form>
    </React.Fragment>
  );
}

export default App;
