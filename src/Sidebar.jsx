import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import db, { auth } from "./firebase";
import { useEffect } from "react";

const Sidebar = () => {
  const [Room, setRoom] = useState([]);
  const state = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRoom(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const addChat = () => {
    const chatName = prompt("Enter the Chat Name");
    if (chatName) {
      db.collection("rooms").add({
        Name: chatName,
      });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={state.photo} onClick={() => auth.signOut()} />

        <div className="sidebar__inputs">
          <SearchOutlined className="search__icon" />
          <input type="text" placeholder="search..." />
        </div>

        <IconButton
          variant="outlined"
          onClick={addChat}
          className="sidebar__inputbutton"
        >
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {Room.map((room) => {
          return (
            <Sidebarchat key={room.id} name={room.data.Name} id={room.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
