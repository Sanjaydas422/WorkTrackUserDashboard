import React from "react";
import "./DashboardNavbar.css";
import { CiSearch } from "react-icons/ci";

const DashboardNavbar = ({ title = "Dashboard" }) => {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-title">{title}</div>

      <div className="search-box">
        <CiSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Start Searching Here..."
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
