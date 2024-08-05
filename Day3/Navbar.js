// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/css/Navbar.css';
import logo from '../Assets/images/LOGO OF SKCT.jpg';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="College Logo" />
        <div className="logo-text">SKCT</div>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/event">Event</Link></li>
        {!authState.isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <>
            {authState.userRole === 'admin' ? (
              <li><Link to="/admin/dashboard">Dashboard</Link></li>
            ) : (
              <li><Link to="/user/dashboard">Dashboard</Link></li>
            )}
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
