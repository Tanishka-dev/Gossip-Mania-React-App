import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
  const { chats, activeChat, username, messages } = props;
  const chat = chats && chats[activeChat];

  function renderMessages() {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : key[index - 1];
      const isMyMessage = username === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100p%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
            <div
              className="read-receipts"
              style={{
                marginRight: isMyMessage ? "18px" : "0px",
                marginLeft: isMyMessage ? "0px" : "68px",
              }}
            >
              read-receipts
            </div>
          </div>
        </div>
      );
    });
  }

  if (!chat) return "Loading......";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` &{person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}
