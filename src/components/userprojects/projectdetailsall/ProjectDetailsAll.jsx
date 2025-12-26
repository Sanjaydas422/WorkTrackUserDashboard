import React, { Profiler } from "react";
import "./ProjectDetailsAll.css";
import { useNavigate } from "react-router-dom";


const ProjectDetailsAll = () => {
         const navigate = useNavigate();
  
    const projectdetail=[
        {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"Completed",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        },
                {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"Completed",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        },
                {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"Completed",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        },
                {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"Active",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        },
                {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"Completed",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        },
                {
            title:"Marketing website redesign",
            company:"Cognitica Studio",
            count1:"5",count2:"5",
            status:"On-Hold",
            daysleft:"3 Days Left",
            percenrtage:"50%"
        }
    ]
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
    {projectdetail.map((projectdetail,index)=>(
      <div className="project-row"  onClick={()=>navigate("/projectdetails")}  key={index}>
     
      <div className="project-info">
        <div className="project-title">
          {projectdetail.title}
        </div>
        <div className="project-subtitle">
          {projectdetail.company}
        </div>
      </div>

      
      <div className="project-icons">
        <div className="icon-box"><img src="files.svg" alt="" /><span>{projectdetail.count1}</span></div>
        <div className="icon-box"><img src="iconamoon_profile-fill.svg" alt="" /><span>{projectdetail.count2}</span></div>
      </div>

      <div className={`project-status ${projectdetail.status.toLowerCase()}`}>
        {projectdetail.status}
      </div>

  
      <div className="project-progress">
        <div className="days-left"><img src="mingcute_time-line.svg" alt="" /><span>{projectdetail.daysleft}</span></div>

        <div className="progress-bar">
          <div className="progress-fill completed" style={{ width: "50%" }} />
        </div>

        <div className="progress-percent">{projectdetail.percenrtage}</div>
      </div>
    </div>

    ))}
    
    </>
  );
};

export default ProjectDetailsAll;
