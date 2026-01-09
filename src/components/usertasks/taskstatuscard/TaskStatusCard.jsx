import React from "react";
import "./TaskStatusCard.css";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const TaskStatusCard = ({ tasks = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="task-card-space">
      {tasks.map((task) => {
        const startDate = task.start_date || "—";
        const endDate = task.due_date || "—";

        return (
          <div
            className="task-card"
            key={task.id}
            onClick={() => navigate(`/taskdetails/${task.id}`)}
          >
            <div className="task-card-header">
              <p className="task-title">{task.task_name}</p>

              <div className={`task-priority ${task.priority?.toLowerCase()}`}>
                {task.priority}
              </div>
            </div>

            <div className="task-date">
              <CiCalendar className="calendar-icon" />
              <span>Start date / finish date</span>
            </div>

            <div className="task-date-time">
              {startDate} – {endDate}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStatusCard;
