import React from "react";
import "./styles.css"
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <div className="Container">
      <MdMessage />
      <div className="Title">Chat App</div>
      <div className="Info">
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </div>
    </div>
  );
};

export default Default;
