import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
// import HomeIcon from "@material-ui/icons/Home";
// import BusinessCenterIcon from "@material-ui/icons/Business";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  SupervisorAccount,
  Notifications,
  Search,
  Home,
  Chat,
} from "@material-ui/icons";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
          title="Me"
        />
      </div>
    </div>
  );
};
