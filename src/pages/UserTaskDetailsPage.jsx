import React from 'react'
import TaskDetailsNavbar from '../components/taskdetailsuser/taskdetailsNavbar/TaskDetailsNavbar'
import TaskDetailsForm from '../components/taskdetailsuser/taskdeailsLeftform/TaskDetailsForm'
import TDProductivityChart from '../components/taskdetailsuser/taskdetailsProductivitychart/TDProductivityChart'
import TdApplicationUsage from '../components/taskdetailsuser/tdapplicationusage/TdApplicationUsage'
const UserTaskDetailsPage = () => {
  return (
    <div>
      <TaskDetailsNavbar/>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div><TaskDetailsForm/></div>
        <div>
          <TDProductivityChart/>
          <TdApplicationUsage/>
        </div>
      </div>
    </div>
  )
}

export default UserTaskDetailsPage
