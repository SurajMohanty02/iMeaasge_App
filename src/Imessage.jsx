import Chat from "./Chat";
import React from "react";
import Sidebar from "./Sidebar";

const Imessage = () => {
  return (
    <div className="imessage">
      {/*side-bar */}
      <Sidebar />
      <Chat />

      {/*chat*/}
    </div>
  );
};

export default Imessage;
