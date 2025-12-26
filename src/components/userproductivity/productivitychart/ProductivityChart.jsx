import React from "react";
import "./ProductivityChart.css";

const ProductivityChart = () => {
  return (
    <div className="productivity-card">
      <h3 className="productivity-title">Productivity</h3>

      <div className="productivity-body">
        {/* Donut */}
        <div className="donut-wrapper">
          <div className="donut"></div>
        </div>

        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <span className="dot productive"></span>
            Productive 40%
          </div>

          <div className="legend-item">
            <span className="dot neutral"></span>
            Neutral 30%
          </div>

          <div className="legend-item">
            <span className="dot unproductive"></span>
            Unproductive 30%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityChart;
