import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./index.css";
import ChatFeed from "./componenets/ChatFeed";

export default function App() {
  return (
    <ChatEngine
      height="100vh"
      userName="tanishka___yadav"
      userSecret="1111"
      projectID="3f9da798-6930-4e6a-8442-863f418d85b2"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
