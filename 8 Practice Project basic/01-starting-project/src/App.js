import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = ()=>{

  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (recievedD) => {
    setUsersList((previous_list)=>{
      return [...previous_list, {name: recievedD.name, age: recievedD.age, id: recievedD.id}];
    });
  };
  return (
    // lift state managment up to app component
    <div>
      <AddUser sendToApp={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
};

export default App;