import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/BookingForm.css'; // Import the CSS file for styling
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const BookingForm = ({ onClose }) => {
    const navigate = useNavigate();
    const { authState } = useAuth(); // Access authState from useAuth hook

    const [formData, setFormData] = useState({
        name: '',
        department: '',
        timingFrom: '',
        timingTo: '',
        date: '',
        eventName: '',        // New field
        eventDetails: ''      // New field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!authState.isAuthenticated) {
            // Redirect to login if not authenticated
            navigate('/login');
            return;
        }

        // Handle booking submission here, e.g., send data to an API
        alert('Booking request submitted!');
        onClose(); // Close the form after submission
    };

    return (
        <div className="booking-form-container">
            <form onSubmit={handleSubmit} className="booking-form">
                <h2>Booking Form</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timingFrom">Timing From:</label>
                    <input
                        type="time"
                        id="timingFrom"
                        name="timingFrom"
                        value={formData.timingFrom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timingTo">Timing To:</label>
                    <input
                        type="time"
                        id="timingTo"
                        name="timingTo"
                        value={formData.timingTo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventDetails">Event Details:</label>
                    <textarea
                        id="eventDetails"
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="book-now-button">Book Now</button>
                <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default BookingForm;
