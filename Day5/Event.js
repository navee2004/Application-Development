// src/components/Event.js
import React from 'react';
import '../Assets/css/Event.css';
import Eve2 from "../Assets/images/auditorium5.jpeg";
import Eve1 from "../Assets/images/auditorium7.jpeg";
import Eve3 from "../Assets/images/auditoriums4.jpg";
import Eve5 from "../Assets/images/seminar 5.jpg";
import Eve4 from "../Assets/images/seminar4.jpg";
import Eve6 from "../Assets/images/seminar6.jpg";
import Navbar from './Navbar';

const events = [
  {
    id: 1,
    name: 'Annual Day',
    image: Eve1
  },
  {
    id: 2,
    name: 'Womens day',
    image: Eve2
  },
  {
    id: 3,
    name: 'Culturals',
    image: Eve3
  },
  {
    id: 4,
    name: 'Dept Meeting',
    image: Eve4
  },
  {
    id: 5,
    name: 'InterDept(CSE)',
    image: Eve5
  },
  {
    id: 6,
    name: 'Innovation Day',
    image: Eve6
  },
];

const Event = () => {
  return (
    <div>
    <Navbar />
    <div className="event-container">
      <h1>Our Events</h1>
      <div className="event-gallery">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={event.name} className="event-image" />
            <p className="event-name">{event.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Event;
