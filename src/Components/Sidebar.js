import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
export const Sidebar = () => {
  const recentItem = (title) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{title}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://image.shutterstock.com/image-illustration/gradient-ombre-color-blend-abstract-260nw-1440883430.jpg"
          alt=""
        />
        <Avatar
          className="sidebar_avatar"
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
        />
        <h2>Kaushal Dhakal</h2>
        <h4>kaushal.dhakal@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,567</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,567</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

// export default Sidebar;
