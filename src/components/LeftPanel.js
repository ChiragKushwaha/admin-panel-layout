import React from "react";
import "./LeftPanel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function LeftPanel() {
  return (
    <div className="admin-panel-left">
      <div className="admin-panel-left-top">
        <div className="admin-panel-left-heading">
          <h3>All organisations</h3>
          <ArrowBackIosIcon />
        </div>
        <div className="admin-panel-left-radio">
          <div>
            <input
              type="radio"
              name="all-organisation"
              value="Users for all organisational units"
            />
            <label>Users for all organisational units</label>
          </div>
          <div>
            <input
              type="radio"
              name="all-organisation"
              value="Users for selected  organisational units"
            />
            <label>Users for selected organisational units</label>
          </div>
        </div>
      </div>
      <div className="admin-panel-left-footer">
        <p>MANAGE ORGANISATIONAL UNITS</p>
      </div>
    </div>
  );
}

export default LeftPanel;
