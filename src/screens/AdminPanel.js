import React from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import "./AdminPanel.css";

function AdminPanel() {
  return (
    <div className="admin-panel">
      <Header />
      <h2>Users</h2>
      <div className="admin-panel-content">
        <div className="admin-panel-content-left">
          <LeftPanel />
        </div>
        <div className="admin-panel-content-right">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
