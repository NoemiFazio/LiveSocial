import { useState } from "react";
import { POST } from "../../utils/api.js";

import Button from "../Button";
import "./index.css";

const AddMessage = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [messageText, setMessageText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newDate = () => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const day = new Date().toLocaleDateString();

      return `${day.split("/").join("/")} ${hours}:${minutes}`;
    };

    if (messageText) {
      POST("messages", {
        text: messageText,
        sender: localStorage.getItem("username"),
        date: newDate(),
      }).then(() => {
        setMessageText("");

        onAddButton(!isRenderedList);
      });
    }
  };

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Scrivi il messaggio..."
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        required
      />

      <Button
        type="submit"
        className="AddMessage__btn"
        btnTextContent="Invia"
        color="#0fffa3"
      />
    </form>
  );
};

export default AddMessage;
