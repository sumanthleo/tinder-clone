import React from "react";
import Chat from "./Chat";
import "./ChatPage.css";

function ChatPage() {
  return (
    <div>
      <Chat
        name="Leo"
        message="hey! How are you"
        timestamp="36minutes age"
        profilePic="https://i.pinimg.com/originals/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.png"
      />
      <Chat
        name="Leo1"
        message="hey! How are you"
        timestamp="36minutes age"
        profilePic="https://i.pinimg.com/originals/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.png"
      />
      <Chat
        name="Leo2"
        message="hey! How are you"
        timestamp="36minutes age"
        profilePic="https://i.pinimg.com/originals/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.png"
      />
      <Chat
        name="Leo3"
        message="hey! How are you"
        timestamp="36minutes age"
        profilePic="https://i.pinimg.com/originals/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.png"
      />
    </div>
  );
}

export default ChatPage;
