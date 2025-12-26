import React from 'react'
import "./AllTasks.css"

const AllTasks = () => {
  return (
    <>
<div className="all-tasks-card">
      <div className="all-tasks-title">All Tasks</div>

      {/* Table Header */}
      <div className="tasks-header">
        <span>Task Name</span>
        <span>Project Name</span>
        <span>Status</span>
      </div>

      {/* Highlighted Row */}
      <div className="tasks-row active">
        <span>Marketing Landing Page</span>
        <span>Website creation</span>
        <span className="status in-progress">In Progress</span>
      </div>

      {/* Recent Screenshots Section */}
      <div className="screenshots-section">
        <div className="screenshots-title">Recent Screenshots</div>

        <div className="screenshots-list">
          <button className="arrow">‹</button>

          {["10:30 AM", "09:15 AM", "12:30 PM", "12:30 PM", "12:30 PM"].map(
            (time, index) => (
              <div key={index} className="screenshot-item">
                <div className="screenshot-box" />
                <span>{time}</span>
              </div>
            )
          )}

          <button className="arrow">›</button>
        </div>
      </div>

      {/* Normal Rows */}
      <div className="tasks-row">
        <span>Marketing Landing Page</span>
        <span>Website creation</span>
        <span className="status todo">To Do</span>
      </div>

      <div className="tasks-row">
        <span>CRM Integration</span>
        <span>Website creation</span>
        <span className="status done">Task Done</span>
      </div>

      <div className="tasks-row">
        <span>CRM Integration</span>
        <span>Website creation</span>
        <span className="status done">Task Done</span>
      </div>
          <div className="tasks-row">
        <span>CRM Integration</span>
        <span>Website creation</span>
        <span className="status done">Task Done</span>
      </div>
          <div className="tasks-row">
        <span>CRM Integration</span>
        <span>Website creation</span>
        <span className="status done">Task Done</span>
      </div>
          <div className="tasks-row">
        <span>CRM Integration</span>
        <span>Website creation</span>
        <span className="status done">Task Done</span>
      </div>
    </div>
    </>
  )
}

export default AllTasks
