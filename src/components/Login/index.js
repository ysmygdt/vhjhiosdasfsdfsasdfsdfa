import React from "react";
import { auth, provider } from "../../services/firebase";
import "./styles.css"

export default () =>{

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="Container">
      <div className="Button"onClick={handleSignin}>Login com Google</div>
    </div>
  );
};
};
