import React from 'react'
import DashboardNavbar from "../components/userdashboard/dashboardnavbar/DashboardNavbar"
import DashboardCard from '../components/userdashboard/dashboardcard/DashboardCard'
import DashboardStatistics from '../components/userdashboard/dashboardstatistics/DashboardStatistics'
import DashboardProject from '../components/userdashboard/dashboardproject/DashboardProject'
import DashboardUnfinisedTasks from '../components/userdashboard/dashboardunfinishedtasks/DashboardUnfinisedTasks'
const UserDashboardPage = () => {
  return (
    <>
    <DashboardNavbar/>
    <DashboardCard/>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div> 
        <DashboardStatistics/>
        <DashboardProject/>
      </div>
      <div>
        <DashboardUnfinisedTasks/>
      </div>
    </div>
   
    
    
    </>
  )
}

export default UserDashboardPage
