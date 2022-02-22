import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./index.css";
import ChatFeed from "./componenets/ChatFeed";
import LoginForm from "./componenets/LoginForm";

export default function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const projectID = "3f9da798-6930-4e6a-8442-863f418d85b2";
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID={projectID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}
