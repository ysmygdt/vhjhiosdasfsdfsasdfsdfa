import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import "./styles.css";
import { MdPerson } from "react-icons/md";

export default () => {

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const userToChatWithEmail = getUser(users, user);

  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", userToChatWithEmail)
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = userToChatWithEmail;

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  return (
    <div className={`Container ${active}`} onClick={handleNewChat}>
      {Avatar ? <img className="Avatar" src={Avatar?.photoURL} alt="Avatar" /> : <MdPerson />}
      <div className="Name">{item.split("@")[0]}</div>
    </div>
  );
};


};