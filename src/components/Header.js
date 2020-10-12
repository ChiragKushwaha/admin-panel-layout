import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="admin-panel-header">
      <div className="admin-panel-header-head">
        <div className="admin-panel-header-menu-icon">
          <MenuIcon />
        </div>
        <div className="admin-panel-header-title">
          <h1>Admin Panel</h1>
        </div>
      </div>
      <div className="admin-panel-header-tail">
        <div className="admin-panel-header-searchbar">
          <SearchBar />
        </div>
        <div className="dummy"></div>
        <div className="admin-panel-header-right">
          <div className="admin-panel-header-app-icon">
            <AppsIcon />
          </div>
          <div className="admin-panel-header-avatar-container">
            <div className="admin-panel-header-avatar">
              <p>K</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
