import React from "react";
import "./RightPanel.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table";
function RightPanel() {
  return (
    <div className="admin-panel-right">
      <div className="admin-panel-right-header">
        <div className="admin-panel-right-header-text">
          <span>Users</span>
          <span className="admin-panel-right-header-text-vertical-line"></span>
          <span>Showing users from all organisational units</span>
        </div>
        <div className="admin-panel-right-header-button">
          <span style={{ cursor: "pointer" }}>Add new user</span>
          <span> Bulk upload users</span>
          <div>
            <span>More</span>
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="admin-panel-right-filter-button">
        <span>
          <AddIcon />
        </span>
        <span>Add a filter</span>
      </div>
      <div className="admin-panel-right-table">
        <Table />
      </div>
    </div>
  );
}

export default RightPanel;
