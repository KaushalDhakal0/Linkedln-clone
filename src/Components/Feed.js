import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import "./feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
