import React from "react";
import "./styles.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

export default () => {
   
  const Message = ({ user, message }) => {
  const [isCurrentUserLoggedIn] = useAuthState(auth);

  return (
    <div className="Container">
      <div
        className={`Line ${isCurrentUserLoggedIn?.email === user ? "me" : ""}`}
        key={message.id}
      >
        <div className="Content">
          <div className="Message">{message.message}</div>
          <div className="MessageDate">
            {new Date(message?.timestamp).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

}



