import React, { useEffect, useState } from "react";
import "./DashboardProject.css";
import { useNavigate } from "react-router-dom";

const DashboardProject = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/admin_app/view-projects/")
      .then(res => res.json())
      .then(data => setProjects(data.id))   // your backend sends list as "id"
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard-project-card">
      <div className="dashboard-project-header">
        <p>Project</p>
        <span
          onClick={() => navigate("/project")}
          className="dashboard-project-arrow"
        >
          <img src="arrow.svg" alt="" />
        </span>
      </div>

      {projects.map((project, index) => (
        <div className="dashboard-project-item" key={index}>
          <div className="dashboard-project-info">
            <div className="dashboard-project-name">{project.Project_Name}</div>
            <div className="dashboard-project-company">
              {project.Company_Name}
            </div>
          </div>

          <div className="dashboard-project-progress">
            <div className="dashboard-progress-bar">
              <div
                className="dashboard-progress-fill"
                style={{ width: "50%" }}   // update when progress comes from DB
              ></div>
            </div>
            <span className="dashboard-progress-text">50%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardProject;
