// src/components/FacultyPanel.js
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import '../Assets/css/FacultyPanel.css';
import profile from '../Assets/images/profile icon.jpg';
import { useAuth } from '../context/AuthContext';

function FacultyPanel() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="faculty-panel">
            <div className="sidebar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/faculty/profile">Profile</Link></li>
                    <li><Link to="/faculty/bookings">History</Link></li>
                    <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
            <div className="main-content">
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="bookings" element={<FacultyBookings />} />
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
                <img src={profile} alt="Profile Icon" />
                <p><strong>Name:</strong> Dr. Smith</p>
                <p><strong>Email:</strong> drsmith@university.edu</p>
                <p><strong>Role:</strong>Faculty</p>
                <p><strong>Department:</strong>Computer Science and Engineering</p>
            </div>
        </div>
    );
}

function FacultyBookings() {
    return (
        <div className="faculty-info">
            <h1>History</h1>
            <div className="faculty-list">
                <table>
                    <thead>
                        <tr>
                            <th>Events</th>
                            <th>Date of Booking</th>
                            <th>Halls</th>
                            <th>Booking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Guest Lecture on AI</td>
                            <td>August 5, 2024</td>
                            <td>Auditorium</td>
                            <td>Confirmed</td>
                        </tr>
                        <tr>
                            <td>Research Symposium</td>
                            <td>August 15, 2024</td>
                            <td>Conference Room 1</td>
                            <td>Confirmed</td>
                        </tr>
                        <tr>
                            <td>Workshop on Quantum Computing</td>
                            <td>August 25, 2024</td>
                            <td>Lab 3</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Seminar on Data Privacy</td>
                            <td>September 10, 2024</td>
                            <td>Seminar Hall</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>Panel Discussion on Blockchain</td>
                            <td>September 20, 2024</td>
                            <td>Main Auditorium</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FacultyPanel;
