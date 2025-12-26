import React from 'react'
import ProductivityNavbar from '../components/userproductivity/productivityNavbar/ProductivityNavbar'
import StatusCard from '../components/userproductivity/prductivitystatuscard/StatusCard'
import AllTasks from '../components/userproductivity/productivityallTasks/AllTasks'
import ProductivityChart from '../components/userproductivity/productivitychart/ProductivityChart'
import ApplicationUsage from '../components/userproductivity/applicationusage/ApplicationUsage'

const UserProductivityPage = () => {
  return (
    <div>
      
      <ProductivityNavbar/>
      <StatusCard/>
      <div style={{display:"flex",justifyContent:"space-between",margin:'20px 55px'}}>
        <div><AllTasks/></div>
        <div>
          <div><ProductivityChart/></div>
          <div><ApplicationUsage/></div>
        </div>

      </div>
      

    </div>
  )
}

export default UserProductivityPage
