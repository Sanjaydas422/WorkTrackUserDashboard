import React from 'react'
import "./StatusCard.css"

const StatusCard = () => {
     const employeestatus = [
    { title: "Active Project",      count: "30" },
    { title: "Task In Progress",    count: "34" },
    { title: "Completed Tasks",     count: "17" },
    { title: "Idle Time Today",     count: "30" },
  ]

  return (
    <>
        <div className="employee-status-space">
          {employeestatus.map((emplystat, index) => (
            <div className="employee-status-card" key={index}>
              <div className="stats_name">{emplystat.title}</div>
              <div className="numbers">{emplystat.count}</div>
            </div>
          ))}
        </div>

   </>
  )
}

export default StatusCard
