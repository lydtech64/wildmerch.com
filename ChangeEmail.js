// ChangeEmail.js

import React, { useState } from 'react';
import './ChangeEmail.css';

function ChangeEmail() {
  const [currentEmail, setCurrentEmail] = useState('j******@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [confirmNewEmail, setConfirmNewEmail] = useState('');
  const [institutionalId, setInstitutionalId] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveChanges = () => {
    // Add your logic for saving changes here
    if (newEmail === confirmNewEmail) {
      setMessage('Changes saved successfully!');
      // Add additional logic for updating the data
    } else {
      setMessage('New email and confirmation do not match. Please try again.');
    }
  };

  return (
    <div className="box">
      <h2 className="account-heading">Change Email Settings</h2>
      <div className="rectangleline1" />
      <div className="rectangle" />
      <div className="content">
        <form>
          <div className="info-row">
            <label className="label" htmlFor="currentEmail">Current Email:</label>
            <span className="value">{currentEmail}</span>
          </div>

          <div className="info-row">
            <label htmlFor="newEmail">Enter your new email address:</label>
            <input
              type="email"
              id="newEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label htmlFor="confirmNewEmail">Confirm your new email address:</label>
            <input
              type="email"
              id="confirmNewEmail"
              value={confirmNewEmail}
              onChange={(e) => setConfirmNewEmail(e.target.value)}
              required
            />
          </div>

          <div className="info-row">
            <label htmlFor="institutionalId">Confirm institutional ID:</label>
            <input
              type="text"
              id="institutionalId"
              value={institutionalId}
              onChange={(e) => setInstitutionalId(e.target.value)}
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

export default ChangeEmail;
