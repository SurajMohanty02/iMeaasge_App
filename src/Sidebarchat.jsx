import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import "./Sidebarchat.css";

const Sidebarchat = ({ name, id }) => {
  const dispatch = useDispatch();
  let dateobj = new Date();
  let date = dateobj.getDate();
  let mon = dateobj.getMonth() + 1;
  let year = dateobj.getUTCFullYear();

  return (
    <div
      className="sidebarchat"
      onClick={() => dispatch(setChat({ chatName: name, chatId: id }))}
    >
      <Avatar
        src={
          "https://lh3.googleusercontent.com/AQg3regrCjchZBEO9EBIIG6VfT1yhMP5BFqWxEKjad4r5Y3TXZF1OzLXK6bAymtf1YybbA=s85"
        }
      />
      <div className="sidebarchat__info">
        <h4>{name}</h4>
        <p>last </p>
        <small>
          {date}:{mon}:{year}
        </small>
      </div>
    </div>
  );
};

export default Sidebarchat;
