import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebarPage from "../../pages/UserSidebarPage";
import "./LayoutUser.css";

const LayoutUser = () => {
  return (
    <div className="user-layout">
      <UserSidebarPage />

      <main className="user-main">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutUser;
