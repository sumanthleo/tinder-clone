import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import TinderButtons from "./components/TinderButtons";
import ChatPage from "./components/ChatPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <TinderButtons />
        <Switch>
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/" element={<TinderButtons />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
