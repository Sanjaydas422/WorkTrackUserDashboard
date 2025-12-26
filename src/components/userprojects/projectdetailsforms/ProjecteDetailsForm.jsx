import React from "react";
import "./ProjecteDetailsForm.css";

const ProjecteDetailsForm = () => {
  return (
    <div className="project-details-wrapper">

      
      <div className="project-card">
        <div className="project-left">
          <input
            className="project-title-input"
            readOnly
          />

          <div className="pd-form-group">
            <label>Task</label>
            <ul className="task-list">
              <li>Design homepage hero image</li>
              <li>Create product details page</li>
            </ul>
          </div>

          <div className="pd-form-group">
            <label>Description</label>
            <textarea
              rows="4"
              readOnly
            />
          </div>

          <div className="pd-form-group">
            <label>Assigned to</label>
            <div className="assigned-users">
              <img src="img ads.svg" alt="" />
              <span className="user-pill">Nishad ✕</span>
              <span className="user-pill">Messi ✕</span>
            </div>
          </div>

          <div className="date-group">
            <div>
              <label>Start date</label>
              <input type="datetime-local" />
            </div>

            <div>
              <label>Finish date</label>
              <input type="datetime-local" />
            </div>
          </div>
        </div>

     
        <div className="project-right">
          <div className="status-box">
            <label>Status:</label>
            <span className="status-pill in-progress">In Progress</span>
          </div>

          <div className="priority-box">
            <label>Priority:</label>
            <span className="priority-pill low">Low</span>
          </div>

     <div className="pd-comment-group">
        <label>Comments</label>
        <textarea
          className="pd-comment-box"
          placeholder="Add Comment..."
        />
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
