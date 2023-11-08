import React from "react";
import "./styles.css"
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <div className="Container">
      <div className="UserInfo">
        {photoURL ? <div className="Avatar" src={photoURL} alt="Avatar" /> : <MdPerson />}
        <div className="NameContent">
          <div className="Name">{name}</div>
        </div>
      </div>
      <div className="Options">
        <MdSearch />
        <MdMoreVert />
      </div>
    </div>
  );
};

export default ChatHeader;
