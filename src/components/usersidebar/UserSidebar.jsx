import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserSidebar.css";
import { TbLogout } from "react-icons/tb";
import api from "../../api/api";

const UserSidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const refresh = localStorage.getItem("refresh");

    try {
      if (refresh) {
        await api.post(
          "/admin_app/logout/",
          { refresh },
          { skipAuth: false } // token required
        );
      }
    } catch (err) {
      // Even if backend fails, we still logout locally
      console.warn("Logout API failed, clearing local session");
    } finally {
      // ✅ Always clear local session
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      // ✅ Redirect to login
      navigate("/login", { replace: true });
    }
  };

  return (
    <aside className="sidebar-container">
      <div className="sidebar-menu">
        <NavLink to="/dashboard" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="mage_dashboard-3-fill.svg" alt="" />
          <span className="menu-text">Dashboard</span>
        </NavLink>

        <NavLink to="/task" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="usertaskicon.svg" alt="" />
          <span className="menu-text">Tasks</span>
        </NavLink>

        <NavLink to="/project" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="user project icon.svg" alt="" />
          <span className="menu-text">Projects</span>
        </NavLink>

        <NavLink to="/productivity" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="user productvity icon.svg" alt="" />
          <span className="menu-text">Productivity</span>
        </NavLink>

        <NavLink to="/notification" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="user notification.svg" alt="" />
          <span className="menu-text">Notifications</span>
        </NavLink>

        <div className="line" />

        <NavLink to="/settings" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
          <img className="menu-icon" src="user settings.svg" alt="" />
          <span className="menu-text">Settings</span>
        </NavLink>

        {/* 🔓 LOGOUT */}
        <div
          className="sidebar-logout"
          onClick={logout}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && logout()}
        >
          <div className="menu-box logout">
            <TbLogout className="menu-icon" />
            <span className="menu-text">Log out</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserSidebar;
