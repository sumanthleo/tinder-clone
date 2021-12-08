import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TinderButtons from "./components/TinderButtons";
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import ChatScreen from "./components/ChatScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <TinderButtons /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat:person" element={<><ChatScreen /></>} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/" element={<TinderButtons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
