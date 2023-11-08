import React from "react";
import ChatHeader from "../ChatHeader";
import "./styles.css"
import Default from "./../Default";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;

  return (
    <div className="Container">
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </div>
  );
};

export default Chat;