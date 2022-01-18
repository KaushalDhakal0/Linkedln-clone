import React, { useState, useEffect } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { InputOption } from "./InputOption";
import { Post } from "./Post";
import { db } from "../firebase";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const connectDb = async () => {
    const q = query(collection(db, "posts"));
    const snapShot = await getDocs(q);
    setPosts(
      snapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
    console.log(posts);
    // snapShot.((doc) => {
    //   console.log("db connected");
    //   console.log(doc.data);
    // });
  };

  useEffect(() => {
    connectDb();
    console.log(posts);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // db.collection(
    //   "posts".add({
    //     name: "Kaushal..",
    //     description: "dummy desc..",
    //     massage: input,
    //   })
    // );
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={handleClick}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts below here are rendered */}
      {posts.map((post) => {
        return (
          <Post
            key={post.imgUrl}
            name={post.name}
            description={post.desc}
            message={post.message}
            imgUrl={post.imgUrl}
          />
        );
      })}
    </div>
  );
};
