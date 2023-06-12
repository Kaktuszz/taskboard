import React from "react";
import classes from "./Login.module.css";
import { auth, googleProvider } from "./firebase";
import Button from "./UI/Button";
import "firebase/auth";

const Login = (props) => {

    const signInGoogle =()=>{
        auth.signInWithPopup(googleProvider).then((result)=>{
            localStorage.setItem("isAuth", true);
            props.setIsAuth(true);
        })
    }

  return (
    <div className={classes.logdiv}>
      <h1>Login With Google to Continue</h1>
      <Button func={signInGoogle} >Login with Google</Button>
    </div>
  );
};

export default Login;
