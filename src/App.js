import React from "react";

import { Header } from "./Components/Header";
import { Widgets } from "./Components/Widgets";
import { Sidebar } from "./Components/Sidebar";
import Feed from "./Components/Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Feed */}
      {/* Widgets-right */}
      {/* <Widgets /> */}
    </div>
  );
}

export default App;
