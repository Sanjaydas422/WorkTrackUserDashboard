import React, { useEffect, useState } from "react";
import "./TaskDetailsForm.css";
import { useParams } from "react-router-dom";
import api from "../../../api/api";

const TaskDetailsForm = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTaskDetails();
  }, []);

 const fetchTaskDetails = async () => {
  try {
    const res = await api.get(`admin_app/single_view_task/${id}`);
    setTask(res.data.task);
  } catch (error) {
    console.error("Error loading task details:", error);
  }
};


  if (!task) return <p>Loading...</p>;

  return (
    <div className="task-details-form">
      
      <input
        type="text"
        className="task-title-input"
        value={task.task_name}
        readOnly
      />

      <div className="form-group">
        <label>Description</label>
        <textarea
          className="task-description"
          readOnly
          value={task.description || ""}
        />
      </div>

      <div className="deadline-priority">
        <div className="form-group">
          <label>Deadline</label>
          <input
            type="text"
            className="deadline-input"
            value={task.due_date}
            readOnly
          />
        </div>

        <div className="priority-section">
          <span className="priority-label">Priority:</span>
          <span className={`priority-pill ${task.priority?.toLowerCase()}`}>
            {task.priority}
          </span>
        </div>
      </div>

      <div className="form-group-last">
        <label>Comments</label>
        <textarea
          className="comment-box"
          placeholder="Add Comment..."
        />
      </div>
    </div>
  );
};

export default TaskDetailsForm;
