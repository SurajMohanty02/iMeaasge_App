import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Imessage from "./Imessage";
import "./Imessage.css";

import Login from "./Login";
import Sidebar from "./Sidebar";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          login({
            uid: authuser.uid,
            photo: authuser.photoURL,
            email: authuser.email,
            displayName: authuser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [user]);
  return <React.Fragment>{user ? <Imessage /> : <Login />}</React.Fragment>;
}

export default App;
