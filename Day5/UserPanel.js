// src/components/UserPanel.js
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import '../Assets/css/UserPanel.css';
import profile from '../Assets/images/profile icon.jpg';
import { useAuth } from '../context/AuthContext';

function UserPanel() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-panel">
      <div className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user/profile">Profile</Link></li>
          <li><Link to="/user/bookings">History</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="bookings" element={<UserBookings />} />
        </Routes>
      </div>
    </div>
  );
}

// Dummy components for demonstration
function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={profile}></img>
        <p><strong>Name:</strong> Naveena</p>
        <p><strong>Email:</strong> Naveena12@gmail.com</p>
        <p><strong>Role:</strong>Student</p>
        <p><strong>Department:</strong>Computer Science and Engineering</p>
      </div>
    </div>
  );
}

function UserBookings() {
  return (
    <div className="user-info">
      <h1>History</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Events</th>
              <th>Date of Booking</th>
              <th>Halls</th>
              <th>Booing Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Workshop related to IOT</td>
              <td>August 2, 2024</td>
              <td>Venkatramam Hall</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Seminar for CyberSecurity Threads</td>
              <td>August 12, 2024</td>
              <td>Seminar Block 1</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Seminar for DataScience</td>
              <td>August 29, 2024</td>
              <td>Seminar Block 2</td>
              <td>Pending</td>
            </tr><tr>
              <td>Introduction to Web Development</td>
              <td>September 2, 2024</td>
              <td>Workshop Block</td>
              <td>Pending</td>
            </tr><tr>
              <td>Webinar about Mainframe</td>
              <td>September 11, 2024</td>
              <td>General Auditorium</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



export default UserPanel;
