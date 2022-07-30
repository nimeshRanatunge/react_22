import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid details ( non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      return;
    }
    const data = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredAge,
    };
    props.sendToApp(data);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const AddUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const AddAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
      )}

      <Card cardclz={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={AddUserNameHandler}
          ></input>

          <label htmlFor="age">age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={AddAgeHandler}
            value={enteredAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
