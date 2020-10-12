import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import SearchBar from "./components/SearchBar";
import UserActions from "./components/UserActions";
import AdminPanel from "./screens/AdminPanel";

function App() {
  return (
    <div className="app">
      <AdminPanel />
    </div>
  );
}

export default App;
