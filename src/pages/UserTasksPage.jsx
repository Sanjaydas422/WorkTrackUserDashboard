import React, { useState, useEffect } from "react";
import TaskNavbar from "../components/usertasks/tasknavbar/TaskNavbar";
import TaskStatusCard from "../components/usertasks/taskstatuscard/TaskStatusCard";
import api from "../api/api";

const UserTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getTasks = async (query = "") => {
    try {
      setLoading(true);

      const res = await api.get("/admin_app/user_task/", {
        params: { search: query },
      });

      setTasks(res.data.tasks || []);
    } catch (error) {
      console.error("Error fetching user tasks:", error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getTasks(search);
    }, 400); // debounce

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      {/* 🔍 Search bar */}
      <TaskNavbar onSearch={setSearch} />

      {/* 🧾 Task list */}
      {loading ? (
        <p style={{ padding: "1rem" }}>Loading tasks...</p>
      ) : (
        <TaskStatusCard tasks={tasks} />
      )}
    </>
  );
};

export default UserTasksPage;
