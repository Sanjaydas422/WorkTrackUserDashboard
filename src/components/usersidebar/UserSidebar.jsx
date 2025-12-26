import React from 'react'
import { NavLink } from 'react-router-dom'
import "./UserSidebar.css"

const UserSidebar = () => {
  return (
    <aside className="sidebar-container">
        <div className="sidebar-menu">
            <NavLink to="/dashboard" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
                <img className="menu-icon" src="mage_dashboard-3-fill.svg" alt="" />
                <span className="menu-text">Dashboard</span>
            </NavLink>

             <NavLink to={"/task"} className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
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

            <div className="line">

            </div>

             <NavLink to="/settings" className={({ isActive }) => `menu-box ${isActive ? "active" : ""}`}>
                <img className="menu-icon" src="user settings.svg" alt="" />
                <span className="menu-text">Settings</span>
            </NavLink> 
           

        </div>
    </aside>
  )
}

export default UserSidebar
