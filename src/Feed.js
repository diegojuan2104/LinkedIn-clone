import React, { useEffect, useState } from "react";

import "./Feed.css";

import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";

import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import {db} from "./Firebase"
import firebase from "firebase"

import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc =>(
            {   
                id: doc.id,
                data: doc.data()
            }
        )))
    ))
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add(
       {
        name: "Juan Mejia",
        description: "This is a test x2",
        message: input,
        photoUrl:"",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()}
    )

    setInput("");
  };

  console.log(posts);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Photo" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Photo" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Photo"
            color="#7FC15E"
          />
        </div>
      </div>


      {posts.map(({ id, data: { name, description, message, photoUrl}}) => (
            <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl= {photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
