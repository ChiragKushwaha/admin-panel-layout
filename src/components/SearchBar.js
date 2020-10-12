import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
  return (
    <div className="searchbar">
      <SearchIcon className="searchbar-icon" />
      <input placeholder="Search for users, groups or settings" />
    </div>
  );
}

export default SearchBar;
