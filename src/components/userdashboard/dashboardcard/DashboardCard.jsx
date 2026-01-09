import React, { useEffect, useState } from "react";
import "./DashboardCard.css";
import api from "../../../api/api"; // Assuming your axios instance is here

const DashboardCard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    unfinished: 0,
    completed: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch Projects and Tasks in parallel
        const [projRes, taskRes] = await Promise.all([
          api.get("/admin_app/total_projects_by_users"),
          api.get("/admin_app/task_summary") // Or your specific summary endpoint
        ]);

        setStats({
          projects: projRes.data.total_projects || 0,
          tasks: taskRes.data.total_tasks || 0,
          completed: taskRes.data.completed_tasks || 0,
          unfinished: taskRes.data.unfinished_tasks || 0,
        });
      } catch (err) {
        console.error("Dashboard API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const cards = [
    { title: "Number of Projects", icon: "/icons/projects.svg", count: stats.projects, class: "blue" },
    { title: "Number of Tasks", icon: "/icons/tasks.svg", count: stats.tasks, class: "purple" },
    { title: "Unfinished Tasks", icon: "/icons/unfinished.svg", count: stats.unfinished, class: "orange" },
    { title: "Completed Tasks", icon: "/icons/completed.svg", count: stats.completed, class: "green" },
  ];

  if (loading) return <div className="loading-text">Updating Dashboard...</div>;

  return (
    <div className="card-space">
      {cards.map((card, index) => (
        <div className={`dashboard-card-div ${card.class}`} key={index}>
          <div className="dashboard-card-name">{card.title}</div>
          <div className="dashboard-card-icon-count">
            <div className="dashboard-card-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <div className="dashboard-card-count">{card.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;