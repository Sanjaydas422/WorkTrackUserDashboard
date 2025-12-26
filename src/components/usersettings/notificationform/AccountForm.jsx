import React from 'react'
import "./AccountForm.css"

const AccountForm = () => {
  return (
    <div>
        <div className="account-page">

      <div className="account-card">
        {/* Profile Picture */}
        <div className="profile-section">
          <label className="form-label">Profile picture</label>
          <div className="profile-actions">
            <button className="btn-primary">Upload image</button>
            <button className="btn-outline">Remove</button>
          </div>
        </div>

        {/* Name Fields */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">First name</label>
            <input type="text" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label className="form-label">Last name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        {/* Username */}
        <div className="form-group full-width">
          <label className="form-label">Username</label>
        <input type="text" placeholder="user@gmail.com" />
          <small className="helper-text">
            You can change your username once every 30 days
          </small>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button className="btn-outline">Cancel</button>
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AccountForm
