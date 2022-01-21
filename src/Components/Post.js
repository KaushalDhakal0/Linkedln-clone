import React from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import { InputOption } from "./InputOption";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

export const Post = ({ name, description, message, imgUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={imgUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpOutlinedIcon} color="gray" />
        <InputOption title="Comment" Icon={ChatOutlinedIcon} color="gray" />
        <InputOption title="Share" Icon={ShareOutlinedIcon} color="gray" />
        <InputOption title="Send" Icon={SendOutlinedIcon} color="gray" />
      </div>
    </div>
  );
};

// export default Post;
