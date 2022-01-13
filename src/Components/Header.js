import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

import HeaderOption from "./HeaderOption";
import { SupervisorAccount } from "@material-ui/icons";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
      </div>
    </div>
  );
};
