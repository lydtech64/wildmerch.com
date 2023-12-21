import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const AccountOverview = () => {
  return (
    <div>
      <div className="box">
        <h2 className="account-heading">My Account</h2>
        <div className="rectangleline1" />
        <div className="rectangle" />
        <div className="rectangleline2" />
        <div className="content">
          <div className="content1">
            {/* Added style for the Order History link */}
            <Link to="/orderhistory" className="order-history-link">Order History</Link>
          </div>

          <div className="content2">
            <div className="info-row">
              <span className="label">Name:</span>
              <span className="value">John Doe</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">john.doe@example.com</span>
            </div>
            <div className="info-row">
              <span className="label">Phone Number:</span>
              <span className="value">+1 555-555-5555</span>
            </div>
            <Link to="/changeemail" className="RouterLink">Change Email</Link>
            {/* Added margin-right to create space between the links */}
            <Link to="/changepassword" className="RouterLink" style={{ marginLeft: '16px' }}>Change Password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
