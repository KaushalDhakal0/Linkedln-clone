import React from "react";

import { Header } from "./Components/Header";
import { Widgets } from "./Components/Widgets";
import { Sidebar } from "./Components/Sidebar";
import { Feed } from "./Components/Feed";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Login } from "./Components/Login";

function App() {
  const user = useSelector(selectUser);

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
