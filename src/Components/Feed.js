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
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    getDocs(colRef).then((snap) => {
      setPosts(
        snap.docs.map((doc) => {
          console.log(doc.data());
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      timestamp: serverTimestamp(),
      name: "John Cena",
      desc: "Student",
      message: input,
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png",
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
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
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.name}
              description={post.desc}
              message={post.message}
              imgUrl={post.imgUrl}
            />
          );
        })
      ) : (
        <h1>No posts available.Please post something to see posts...</h1>
      )}
    </div>
  );
};
