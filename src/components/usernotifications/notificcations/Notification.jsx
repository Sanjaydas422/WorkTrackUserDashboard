import React from 'react'
import "./Notification.css"

const Notification = () => {
    const notification = [
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
    { first_letter: "R", notific: "Ravi assigned you a task 'webdevelop'", time: "10m ago" },
  ];
  return (
    <>
    <div className="notifications-container">
        <div className="notification-table-space">
          {notification.map((notif, index) => (
            <div className="notification-table" key={index}>
              <div className="firstlet-notif">
                <div className="first-letter">{notif.first_letter}</div>
                <div className="notif">{notif.notific}</div>
              </div>
              <div className="notification-time">{notif.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Notification
