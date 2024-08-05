// src/components/HallList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/HallList.css'; // Import the CSS file for styling
import h4 from '../Assets/images/auditorium.jpg';
import h3 from '../Assets/images/open auditorium.jpg';
import h5 from '../Assets/images/Seminar(block 1).webp';
import h6 from '../Assets/images/Seminar(block 2).webp';
import h1 from '../Assets/images/VenkatHall.jpg';
import h2 from '../Assets/images/WorkshopHall.jpg';
import Navbar from './Navbar';

const halls = [
    { id: 1, name: 'Venkatramam Hall', image: h1 },
    { id: 2, name: 'Workshop Block', image: h2 },
    { id: 3, name: 'Open Auditorium', image: h3 },
    { id: 4, name: 'General Auditorium', image: h4 },
    { id: 5, name: 'Seminar Block 1', image: h5 },
    { id: 6, name: 'Seminar Block 2', image: h6 }
];

const HallList = () => {
    return (
        <div>
            <Navbar />
        <div className="hall-list-container">
            <h1>Explore Halls</h1>
            <div className="hall-list">
                {halls.map((hall) => (
                    <div key={hall.id} className="hall-card">
                        <img src={hall.image} alt={hall.name} className="hall-image" />
                        <div className="hall-info">
                            <h2 className="hall-name">{hall.name}</h2>
                            <Link to={`/hall/${hall.id}`} className="see-more-button">See More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default HallList;
