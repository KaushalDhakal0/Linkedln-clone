import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.profilePic,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const register = () => {
    if (!name || !email || !password) {
      alert("complete the form...");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        userAuth.user.displayName = name;
        userAuth.user.photoURL = profilePic;
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.profilePic,
          })
        );
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic url (Optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
