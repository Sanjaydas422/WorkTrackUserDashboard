import React from 'react'
import "./TDProductivityChart.css"
const TDProductivityChart = () => {
  return (
    <>
    <button className='start-btn'> Start<img src="solar_play-bold.svg" alt="" /></button>
    <div>
      
      
        <div className="taskdetails-card">
      <h3 className="productivity-title">Productivity</h3>

      <div className="taskdetails-body">
    
        <div className="taskdetails-donut-wrapper">
          <div className="donut"></div>
        </div>

   
        <div className="taskdetails-legend">
          <div className="taskdetails-legend-item">
            <span className="taskdetails-dot productive"></span>
            Productive 40%
          </div>

          <div className="taskdetails-legend-item">
            <span className="taskdetails-dot neutral"></span>
            Neutral 30%
          </div>

          <div className="taskdetails-legend-item">
            <span className="taskdetails-dot unproductive"></span>
            Unproductive 30%
          </div>
        </div>
      </div>
    </div>
      
    </div>
    </>
  )
}

export default TDProductivityChart
