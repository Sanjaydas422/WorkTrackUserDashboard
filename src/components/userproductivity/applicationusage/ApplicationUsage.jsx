import React from "react";
import "./ApplicationUsage.css";

const ApplicationUsage = () => {
  const data = [
    { app: "VSCode", time: "2h 15m", idle: "0h 15m" },
    { app: "VSCode", time: "2h 15m", idle: "0h 15m" },
    { app: "VSCode", time: "2h 15m", idle: "0h 15m" },
  ];

  return (
    <div className="app-usage-card">
      <p className="app-usage-title">Application Usage</p>

      <table className="app-usage-table">
        <thead>
          <tr>
            <th>Application</th>
            <th>Time spend</th>
            <th>Idle Time</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="app-name">{item.app}</td>
              <td>{item.time}</td>
              <td>{item.idle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationUsage;
