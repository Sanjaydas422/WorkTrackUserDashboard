import React from 'react'
import "./TaskDetailsNavbar.css"
import { CiSearch } from 'react-icons/ci'

const TaskDetailsNavbar = () => {
  return (
    <div>
        <nav className="dashboard-navbar">
            <div className="dashboard-title">Task <span>TaskDetails</span></div>
      
            <div className="search-box">
              <CiSearch className="search-icon" />
              <input
                className="search-input"
                type="text"
                placeholder="Start Searching Here..."
              />
            </div>
        </nav>
      
    </div>
  )
}

export default TaskDetailsNavbar
