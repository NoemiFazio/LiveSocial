import Button from "../Button";
import { useState } from "react";
import "./index.css";

const ModalLogin = ({ onHandleClick }) => {
  const [userNameInput, setUsernameInput] = useState("");

  const onGetUsername = () => {
    localStorage.setItem("username", userNameInput);
    onHandleClick(false);
  };

  return (
    <div className="ModalLogin__overlay">
      <div className="ModalLogin">
        {" "}
        <form className="ModalLogin__form" onSubmit={onGetUsername}>
          <h2 className="ModalLogin__title">Come ti chiami?</h2>
          <input
            value={userNameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="Splashscreen__form--input"
            type="text"
            placeholder="  Nome ..."
            required
          />
          <Button
            className="ModalLogin__btn"
            type="submit"
            color="white"
            btnTextContent="Accedi"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
