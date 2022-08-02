import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
//-----------------------------------------------------------------------------
const EmailReducer = (state, action) => {
  if (action.type === 'NEW_EMAIL_VALUE') {
    // console.log(action.val euqal to state value );
    // console.log(`state value ${state.value}`);
    // console.log(`action val ${action.val}`);
    
    return { value: action.val, isValid: action.val.includes("@") };
    // this val is in the object sent by dispatchEmail
  }
  if (action.type === "INPUT_BLUR") {
    // console.log(`state value ${state.value}`);
    return { value: state.value, isValid: state.value.includes("@") };
    // this value is evaluated by NEW_EMAIL_VALUE's value attribute (after email entered it will create a new state so we catch its value attribute)
  }
};
//-----------------------------------------------------------------------------
const PWReducer = (state, action) => {
  switch(action.type) {
    case 'NEW_PASSWORD_VALUE': 
      return { value: action.val, isValid: action.val.trim().length > 6 };
    case 'PW_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 }
    default:
      return state;
  }
};
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);
//-----------------------------------------------------------------------------
  const [EmailState, dispatchEmail] = useReducer(EmailReducer, {
    value: 's',
    isVAlid: null,
  });

  const [PWstate, dispatchPW] = useReducer(PWReducer, {
    value: '',
    isValid: null
  });
//-----------------------------------------------------------------------------
   //after password passes 6 chars, PAssword state is also updating, so tghis useEffect runs in unnecessary way, 
  //to avoid this use this way to avoid unnnecsssary effect execution

  const {isValid : EmailIsVALID} = EmailState;
  const {isValid : PWIsVALID} = PWstate;

//-----------------------------------------------------------------------------
  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log('check validity');
      setFormIsValid(
        EmailIsVALID && PWIsVALID
      );
    }, 500);

    return ()=> {
      console.log('clear');
      clearTimeout(identifier);
    }
  }, [EmailIsVALID, PWIsVALID]);

 //-----------------------------------------------------------------------------
  const emailChangeHandler = (event) => {
    //actionnnnnnnn
    dispatchEmail({ type: "NEW_EMAIL_VALUE", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && PWstate.value.trim().length > 6
    // );
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

//-----------------------------------------------------------------------------

  const passwordChangeHandler = (event) => {
    dispatchPW({ type: "NEW_PASSWORD_VALUE", val: event.target.value });
    // setFormIsValid(EmailState.isValid && event.target.value.trim().length > 6);
  };
  const validatePasswordHandler = () => {
    dispatchPW({ type: "PW_BLUR" });
  };

//-----------------------------------------------------------------------------
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(EmailState.value, PWstate.value);
  };
//-----------------------------------------------------------------------------

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      {/* //----------------------------------------------------------------------------- */}
        <div
          className={`${classes.control} 
          ${ EmailState.isValid === false ? classes.invalid : ""}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={EmailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        {/* //----------------------------------------------------------------------------- */}
        <div
          className={`${classes.control} 
          ${ PWstate.isValid === false ? classes.invalid : "" }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={PWstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        {/* //----------------------------------------------------------------------------- */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
        {/* //----------------------------------------------------------------------------- */}
      </form>
    </Card>
  );
};

export default Login;
