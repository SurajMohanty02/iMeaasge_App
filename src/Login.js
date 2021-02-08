import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
const Login = () => {
  const SignIn = () => {
    auth.signInWithPopup(provider).catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={require("./logo.png")}
          alt="logo"
          style={{ background: "white" }}
        />
        <h1> iMessage</h1>
        <Button color="primary" variant="contained" onClick={SignIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
