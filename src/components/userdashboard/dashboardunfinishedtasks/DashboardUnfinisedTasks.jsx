import React from "react";
import "./DashboardUnfinisedTasks.css";
import { useNavigate } from "react-router-dom";
import { FaRegCommentDots, FaPaperclip } from "react-icons/fa";

const DashboardUnfinisedTasks = () => {
   const navigate = useNavigate();
  const tasks = [
    {
      title: "Design homepage hero image",
      date: "Jan 17, 2025, 10:50 - Jan 27, 2025, 10:50",
      priority: "Low",
      comments: 3,
      attachments: 14,
    },
    {
      title: "Refine color palette and typography",
      date: "Jan 17, 2025, 10:50 - Jan 27, 2025, 10:50",
      priority: "Low",
      comments: 3,
      attachments: 14,
    },
  ];

  return (
    <div className="dashboard-unfinished-card">
      <div className="dashboard-unfinished-header">
        <p>Unfinished Tasks</p>
        <span onClick={()=>navigate("/")} className="dashboard-unfinished-arrow"><img src="arrow.svg" alt="" /></span>
      </div>

      {tasks.map((task, index) => (
        <div className="dashboard-unfinished-task" key={index}>
          <div className="dashboard-unfinished-title">{task.title}</div>
          <div className="dashboard-unfinished-date">{task.date}</div>
          
          <div className="hr">
            <hr className="hr-dahboard" />
          </div>
          
          <div className="dashboard-unfinished-footer">
            <span className="dashboard-priority-pill ">{task.priority}</span>
            <div className="dashboard-task-meta">
              <span>
                <FaRegCommentDots /> {task.comments}
              </span>
              <span>
                <FaPaperclip /> {task.attachments}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardUnfinisedTasks;
