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
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //userLogged in
        console.log(userAuth);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        // auth.signOut();
      }
    });

    // console.log(user);
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
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
