import React from 'react'
import "./ProductivityNavbar.css"
import { CiSearch } from "react-icons/ci";

const ProductivityNavbar = () => {
  return (
    <>
    <nav className="project-navbar">
        <div className="project-navtitle">Productivity</div>
  
        <div className="project-search-box">
          <CiSearch className="project-search-icon" />
          <input
            className="project-search-input"
            type="project-text"
            placeholder="Start Searching Here..."
          />
        </div>
    </nav>
    </>
  )
}

export default ProductivityNavbar
