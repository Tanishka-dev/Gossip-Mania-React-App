import React from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

export default function MessageForm(props) {
  const [value, setValue] = React.useState("");
  const { chatId, creds } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  }
  function handleChange(event) {
    setValue(event.target.value);

    isTyping(props, chatId);
  }
  function handleUpload(event) {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        value={value}
        placeholder="Send a Message"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        onChange={handleUpload}
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
      />
      <button className="send-button" type="submit">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}
