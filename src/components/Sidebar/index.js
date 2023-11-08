import React from "react";
import "./styles.css"
import SidebarHeader from "./../SidebarHeader/index";
import SidebarChats from "./../SidebarChats/index";

export default () => {


const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <div className="Container">
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </div>
  );
};
};
