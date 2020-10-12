import React from "react";
import "./UserActions.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function UserActions() {
  return (
    <div className="user-actions">
      <div>Reset password</div>
      <div>Rename user</div>
      <div>Add to group</div>
      <div>
        <span>More</span>
        <span>
          <ArrowDropDownIcon />
        </span>
      </div>
    </div>
  );
}

export default UserActions;
