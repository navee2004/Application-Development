// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/css/Auth.css';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import Navbar from './Navbar';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth(); // Get the login function from context
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        // Mock authentication
        if (email === 'User1@gmail.com' && password === '123') {
            login('user'); // Set the role as 'user' and redirect
            // navigate('/user-dashboard');
        } else if (email === 'Admin123@gmail.com' && password === '123') {
            login('admin'); // Set the role as 'admin' and redirect
            // navigate('/admin-dashboard');
        } else if (email === 'Faculty123@gmail.com' && password === '123') {
            login('faculty'); // Set the role as 'faculty' and redirect
            // navigate('/faculty-dashboard');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className='login'>
            <Navbar />
            <div className="auth-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link to="/signup">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
