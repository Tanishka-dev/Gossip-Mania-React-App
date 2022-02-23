import React from "react";

export default function TheirMessage({ lastMessage, message }) {
  const isFirstMsgByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMsgByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMsgByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            marginLeft: isFirstMsgByUser ? "4px" : "48px",
            float: "left",
            backgroundColor: "#70a3ed",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
