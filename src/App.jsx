import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserErrorPage from "./pages/UserErrorPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import UserTasksPage from "./pages/UserTasksPage";
import UserTaskDetailsPage from "./pages/UserTaskDetailsPage";
import UserProjectPage from "./pages/UserProjectPage";
import UserProjectDetailsPage from "./pages/UserProjectDetailsPage";
import UserProductivityPage from "./pages/UserProductivityPage";
import UserNotificationPage from "./pages/UserNotificationPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import LayoutUser from "./components/userlayout/LayoutUser";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <UserErrorPage />,
    element:<LayoutUser/>,
    children: [
      { index: true, element: <UserDashboardPage /> },
      { path: "dashboard", element: <UserDashboardPage /> },

      { path: "task", element: <UserTasksPage /> },
      { path: "/taskdetails/:id", element: <UserTaskDetailsPage /> },

      { path: "project", element: <UserProjectPage /> },
      { path: "projectdetails", element: <UserProjectDetailsPage /> },

      { path: "productivity", element: <UserProductivityPage /> },
      { path: "notification", element: <UserNotificationPage /> },
      { path: "settings", element: <UserSettingsPage /> },

  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
