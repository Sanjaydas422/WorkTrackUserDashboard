import React, { useEffect, useState } from "react";
import "./ProjecteDetailsForm.css";
import { useParams } from "react-router-dom";

const ProjecteDetailsForm = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://127.0.0.1:8000/admin_app/view-project/${id}/`)
      .then(res => res.json())
      .then(res => {
        if (res.project) setProject(res.project);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-details-wrapper">

      <div className="project-card">
        <div className="project-left">

          <input
            className="project-title-input"
            value={project.Project_Name}
            readOnly
          />

          <div className="pd-form-group">
            <label>Description</label>
            <textarea
              rows="4"
              value={project.Description || ""}
              readOnly
            />
          </div>

          <div className="pd-form-group">
            <label>Assigned To</label>
            <div className="assigned-users">
              {(project.Assigned_to || []).map((u, i) => (
                <span key={i} className="user-pill">{u}</span>
              ))}
            </div>
          </div>

          <div className="date-group">
            <div>
              <label>Start date</label>
              <input type="datetime-local" readOnly />
            </div>

            <div>
              <label>Finish date</label>
              <input
                type="date"
                value={project.Due_Date ? project.Due_Date.slice(0, 10) : ""}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="project-right">
          <div className="status-box">
            <label>Status:</label>
            <span className="status-pill in-progress">{project.Status}</span>
          </div>

          <div className="priority-box">
            <label>Priority:</label>
            <span className="priority-pill low">{project.Priority}</span>
          </div>

          <div className="pd-comment-group">
            <label>Comments</label>
            <textarea className="pd-comment-box" placeholder="Add Comment..." />
            <div className="pd-comment-icons">
              <div>
                <button className="pd-comment-btn">Comment</button>
              </div>
              <div className="pd-attachments-icons">
                <button className="pd-icons">
                  <img src="attachments.svg" alt="" />
                </button>
                <button className="pd-icons">
                  <img src="emoji icon.svg" alt="" />
                </button>
                <button className="pd-icons">
                  <img src="image icon.svg" alt="" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjecteDetailsForm;
