import React, { useEffect } from "react";

import { Header } from "./Components/Header";
import { Widgets } from "./Components/Widgets";
import { Sidebar } from "./Components/Sidebar";
import { Feed } from "./Components/Feed";
import "./App.css";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { Login } from "./Components/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //userLogged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.email,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // auth.signOut();
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
