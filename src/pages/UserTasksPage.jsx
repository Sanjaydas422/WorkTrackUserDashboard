import React, { useState, useEffect } from "react";
import TaskNavbar from "../components/usertasks/tasknavbar/TaskNavbar";
import TaskStatusCard from "../components/usertasks/taskstatuscard/TaskStatusCard";

const UserTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const getTasks = async (query = "") => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/admin_app/view_tasks`
      );
      const data = await res.json();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getTasks(search);
    }, 400); // debounce to avoid too many API calls

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      {/* Pass search handler to Navbar */}
      <TaskNavbar onSearch={setSearch} />

      {/* Pass backend tasks to card */}
      <TaskStatusCard tasks={tasks} />
    </>
  );
};

export default UserTasksPage;
