import React from "react";
import "./TaskNavbar.css";
import { CiSearch } from "react-icons/ci";

const TaskNavbar = ({ onSearch }) => {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-title">Tasks</div>

      <div className="search-box">
        <CiSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Start Searching Here..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default TaskNavbar;
