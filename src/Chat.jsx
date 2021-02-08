import React, { useState } from "react";
import "./Chat.css";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "./features/chatSlice";
import { useEffect } from "react";
import db from "./firebase";
import { selectUser } from "./features/userSlice";
import Message from "./Message";

const Chat = () => {
  const [input, setinput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);
  const [message, setmessage] = useState([]);
  useEffect(() => {
    if (chatId) {
      db.collection("rooms")
        .doc(chatId)
        .collection("Message")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setmessage(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    }
  }, [chatId]);

  const sendmesg = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(chatId).collection("Message").add({
      Message: input,
      name: user.displayName,
      photo: user.photo,
      email: user.email,
      uid: user.uid,
    });
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          <p>
            To: <span className="chat__name">{chatName}</span>
          </p>
        </h4>
        <strong>Details</strong>
      </div>
      {/*chat msg */}
      <div className="chat__messages">
        {message.map((message, id) => {
          return <Message key={id} content={message} />;
        })}
        <h2>Hii Suraj</h2>
      </div>
      <form className="chat__input">
        <input
          type="text"
          placeholder="Message.."
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
        <IconButton>
          <MicNoneOutlinedIcon className="chat__mic" />
        </IconButton>

        <button onClick={sendmesg}>Send Message</button>
      </form>
      {/*chat input*/}
    </div>
  );
};

export default Chat;
