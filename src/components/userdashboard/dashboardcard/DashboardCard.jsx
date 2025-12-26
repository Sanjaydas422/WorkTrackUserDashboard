import React, { useEffect, useState } from "react";
import "./DashboardCard.css";

const DashboardCard = () => {
  const [projects, setProjects] = useState(0);
  const [tasks, setTasks] = useState(0);
  const [unfinished, setUnfinished] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    // 1️⃣ Total Projects
    fetch("http://127.0.0.1:8000/admin_app/total-projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data.total_projects))
      .catch((err) => console.log("Projects API Error", err));

    // 2️⃣ Total Tasks + Completed + Unfinished
    fetch("http://127.0.0.1:8000/admin_app/view-tasks/")
      .then((res) => res.json())
      .then((data) => {
        const list = data.tasks || [];

        setTasks(list.length);

        const completedTasks = list.filter(
          (t) => t.status?.toLowerCase() === "completed"
        ).length;

        setCompleted(completedTasks);
        setUnfinished(list.length - completedTasks);
      })
      .catch((err) => console.log("Tasks API Error", err));
  }, []);

  const cards = [
    { title: "Number of Projects", icon: "noof project user.svg", count: projects },
    { title: "Number of Tasks", icon: "no of tasks user.svg", count: tasks },
    { title: "Unfinished Tasks", icon: "un finished user icon.svg", count: unfinished },
    { title: "Completed Tasks", icon: "completed task user.svg", count: completed },
  ];

  return (
    <div className="card-space">
      {cards.map((card, index) => (
        <div className="dashboard-card-div" key={index}>
          <div className="dashboard-card-name">{card.title}</div>

          <div className="dashboard-card-icon-count">
            <div className="dashboard-card-icon">
              <img src={card.icon} alt={card.title} />
            </div>

            <div className="dashboard-card-count">
              {card.count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
