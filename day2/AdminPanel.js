// src/components/AdminPanel.js
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import '../Assets/css/AdminPanel.css';
import profile from '../Assets/images/profile icon.jpg';
import { useAuth } from '../context/AuthContext';

function AdminPanel() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/user-info">User History</Link></li>
          <li><Link to="/admin/booked-halls">Booking History</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-info" element={<UserInfo />} />
          <Route path="booked-halls" element={<BookedHalls />} />
        </Routes>
      </div>
    </div>
  );
}


function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Bookings Total</h2>
          <p>57</p>
        </div>
        <div className="card">
          <h2>Pendings</h2>
          <p>7</p>
        </div>
        <div className="card">
          <h2>Events</h2>
          <p>6</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Halls List</h2>
        <ol>
          <li>Venkatramam Hall</li>
          <li>Workshop Block</li>
          <li>Open Auditorium</li>
          <li>General Auditorium</li>
          <li>Seminar Block 1</li>
          <li>Seminar Block 2</li>
        </ol>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-info">
        <img src={profile}></img>
        <p><strong>Name:</strong> Vidhya</p>
        <p><strong>Email:</strong> Vidhya123@gmail.com</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <h1>User History</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email_id</th>
              <th>No.of.Bookings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Naveena</td>
              <td>Naveena12@gmail.com</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Shahul</td>
              <td>Shahul7@gmail.com</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Vinoth</td>
              <td>Vinoth22@gmail.com.com</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Sham</td>
              <td>Sham222@gmail.com.com</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BookedHalls() {
  const halls = [
    { id: 1, name: 'Venkatramam Hall', bookedBy: 'Naveena', date: '02-08-2024' },
    { id: 2, name: 'Open Auditorium', bookedBy: 'Vinoth', date: '10-08-2024' },
    { id: 3, name: 'Seminar Block 2', bookedBy: 'Naveena', date: '12-08-2024' },
    { id: 4, name: 'General Auditorium', bookedBy: 'Sham', date: '17-08-2024' },
    { id: 4, name: 'Venkatramam Hall', bookedBy: 'Shahul', date: '21-08-2024' },
  ];

  return (
    <div className="booked-halls">
      <h1>Booing History</h1>
      <table>
        <thead>
          <tr>
            <th>Halls</th>
            <th>Users</th>
            <th>Date_of_Booking</th>
          </tr>
        </thead>
        <tbody>
          {halls.map((hall) => (
            <tr key={hall.id}>
              <td>{hall.name}</td>
              <td>{hall.bookedBy}</td>
              <td>{hall.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
