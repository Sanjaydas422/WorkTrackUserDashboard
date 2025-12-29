import React, { useEffect, useState } from "react";
import "./ProjectDetailsAll.css";
import { useNavigate } from "react-router-dom";

const ProjectDetailsAll = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/admin_app/view_projects/")
      .then(res => res.json())
      .then(res => {
        if (res.projects) setProjects(res.projects);
      })
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <>
    <div className="project-filter-div">
        <button className="proj-filt-btn">
          <p className="filt">Filter</p>
          <img src="bx_filter.svg" alt="" />
        </button>

    </div>
    <div className="spacee">
        
    </div>
{projects.map((p, index) => (
  <div
    className="project-row"
    key={index}
    onClick={() => navigate(`/projectdetails/${p.id}`)}
  >
    <div className="project-info">
      <div className="project-title">{p.Project_Name}</div>
      <div className="project-subtitle">{p.Company_Name}</div>
    </div>

    <div className="project-icons">
      <div className="icon-box">
        <img src="files.svg" alt="" />
        <span>{p.Est_Hour || 0}</span>
      </div>

      <div className="icon-box">
        <img src="iconamoon_profile-fill.svg" alt="" />
        <span>{(p.Assigned_to || []).length}</span>
      </div>
    </div>

    <div className={`project-status ${p.Status?.toLowerCase()}`}>
      {p.Status}
    </div>

    <div className="project-progress">
      <div className="days-left">
        <img src="mingcute_time-line.svg" alt="" />
        <span>
          {p.Due_Date ? p.Due_Date.slice(0, 10) : "No Due Date"}
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill completed" style={{ width: "50%" }} />
      </div>

      <div className="progress-percent">50%</div>
    </div>
  </div>
))}

    
    </>
  );
};

export default ProjectDetailsAll;
