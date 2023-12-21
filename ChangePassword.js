// ChangePassword.js

import React, { useState } from 'react';
import './ChangeEmail.css';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveChanges = () => {
    // Add your logic for saving changes here
    if (newPassword === confirmNewPassword) {
      setMessage('Changes saved successfully!');
      // Add additional logic for updating the data
    } else {
      setMessage('New password and confirmation do not match. Please try again.');
    }
  };

  return (
    <div className="box">
      <h2 className="account-heading">Change Password Settings</h2>
      <div className="rectangleline1" />
      <div className="rectangle" />
      <div className="content">
        <form>
          <div className="info-row">
            <label className="label" htmlFor="oldPassword">Enter old password:</label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label className="label" htmlFor="newPassword">Enter new password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label className="label" htmlFor="confirmNewPassword">Confirm new password:</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label htmlFor="saveChanges">&nbsp;</label>
            <button type="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default ChangePassword;
