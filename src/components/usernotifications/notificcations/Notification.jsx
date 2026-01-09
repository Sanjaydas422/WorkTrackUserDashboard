import React, { useEffect, useState } from "react";
import "./Notification.css";
import api from "../../../api/api";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await api.get("/admin_app/notifications/");
      setNotifications(res.data);
    } catch (error) {
      console.error("Failed to load notifications");
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 15000);
    return () => clearInterval(interval);
  }, []);

  const timeAgo = (dateString) => {
    const now = new Date();
    const created = new Date(dateString);
    const diff = Math.floor((now - created) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="notifications-container">
      <div className="notification-table-space">
        {notifications.length === 0 && (
          <p className="no-notifications">No notifications</p>
        )}

        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`notification-table ${
              notif.is_read ? "read" : "unread"
            }`}
          >
            <div className="firstlet-notif">
              <div className="first-letter">
                {notif.message.charAt(0).toUpperCase()}
              </div>
              <div className="notif">{notif.message}</div>
            </div>

            <div className="notification-time">
              {timeAgo(notif.created_at)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
