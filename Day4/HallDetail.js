// src/components/HallDetail.js
import React, { useState } from 'react'; // Ensure this is included
import { useParams } from 'react-router-dom';
import '../Assets/css/HallDetail.css'; // Import the CSS file for styling
import h4 from '../Assets/images/auditorium.jpg';
import h3 from '../Assets/images/open auditorium.jpg';
import h5 from '../Assets/images/Seminar(block 1).webp';
import h6 from '../Assets/images/Seminar(block 2).webp';
import h1 from '../Assets/images/VenkatHall.jpg';
import h2 from '../Assets/images/WorkshopHall.jpg';
import BookingForm from './BookingForm';

const halls = [
    { id: 1, name: 'Venkatramam Hall', image: h1, description: 'Venkatramam Hall at Sri Krishna College of Technology in Coimbatore is a state-of-the-art auditorium that serves as a hub for a variety of college activities. Its design combines functionality with elegance, featuring comfortable seating, modern acoustics, and high-quality visual equipment to enhance the overall event experience. The hall is a key part of the college infrastructure, hosting not only academic functions like seminars and conferences but also cultural festivals, talent showcases, and significant ceremonies. It provides a space for students to express their creativity and engage in meaningful activities, contributing to their personal and professional growth. Venkatramam Hall is also used for collaborative initiatives with industry professionals and other educational institutions.' },
    { id: 2, name: 'Workshop Block', image: h2, description: 'Welcome to our Workshop Page. Here, you will find detailed information about the various workshops hosted by our institution. We offer a diverse range of workshops designed to enhance skills, foster creativity, and provide hands-on learning experiences. Our workshops cover a wide array of topics, from technical skills and professional development to creative arts and personal growth. Each workshop is conducted by experienced professionals and experts in their respective fields, ensuring that participants receive valuable insights and practical knowledge. Our goal is to provide a stimulating environment where learners can engage deeply with the subject matter, collaborate with peers, and apply new skills in real-world scenarios. On this page, you can browse upcoming workshops, view detailed schedules, and access registration information.' },
    { id: 3, name: 'Open Auditorium', image: h3, description: 'The Open Auditorium at our institution is a dynamic and versatile outdoor space designed to host a variety of events and activities. With its expansive layout and flexible seating arrangements, the Open Auditorium is ideal for large gatherings, cultural performances, and community events. Its open-air design allows for a refreshing and engaging environment, making it perfect for events that benefit from natural light and fresh air. Equipped with essential amenities, including a stage, sound system, and lighting, the Open Auditorium ensures a high-quality experience for both performers and attendees. The space is strategically designed to accommodate diverse events, from theatrical performances and music concerts to outdoor lectures and sports events.' },
    { id: 4, name: 'General Auditorium', image: h4, description: 'The auditorium at Sri Krishna College of Technology is a state-of-the-art facility designed to host a variety of events, including seminars, conferences, cultural programs, and academic functions. It boasts a modern architectural design with a spacious layout that can accommodate a large audience comfortably. The seating is arranged to provide clear sightlines and comfort for all attendees. Equipped with advanced audio-visual equipment, the auditorium ensures high-quality sound and visual presentations. This includes a high-definition projector, large screen, and an efficient sound system that caters to the needs of different events. The stage is well-lit and expansive, suitable for performances, lectures, and presentations.' },
    { id: 5, name: 'Seminar Block 1', image: h5, description: 'The seminar halls at Sri Krishna College of Technology are designed to facilitate academic discussions, workshops, and professional gatherings. These halls feature a modern, functional design with a focus on creating a conducive environment for learning and interaction. Each seminar hall is equipped with state-of-the-art audio-visual equipment, including high-definition projectors, large screens, and advanced sound systems, ensuring that presentations are clear and engaging. The seating arrangements are comfortable and can be configured to accommodate different group sizes, making the halls versatile for various types of events. The seminar halls are fully air-conditioned, providing a comfortable environment for attendees.' },
    { id: 6, name: 'Seminar Block 2', image: h6, description: 'A seminar is a form of academic or professional instruction that brings together a group of people for intensive study or discussion on a specific subject. Typically led by one or more expert speakers, seminars aim to deepen understanding, foster critical thinking, and encourage collaborative learning through presentations, question-and-answer sessions, and group discussions. Participants, who may include students, academics, professionals, and industry experts, actively engage in the exchange of ideas and insights. Seminars can be held in-person or online, covering a wide range of topics such as academic research, industry trends, and technological advancements. They offer numerous benefits, including knowledge enhancement, networking opportunities, and skill development.' }
];

const HallDetail = () => {
    const { id } = useParams();
    const hall = halls.find(hall => hall.id === parseInt(id));
    const [showBookingForm, setShowBookingForm] = useState(false);

    if (!hall) {
        return <p>Hall not found.</p>;
    }

    return (
        <div className="hall-detail-container">
            <img src={hall.image} alt={hall.name} className="hall-detail-image" />
            <div className="hall-detail-info">
                <h1 className="hall-detail-name">{hall.name}</h1>
                <p className="hall-detail-description">{hall.description}</p>
                <button className="book-button" onClick={() => setShowBookingForm(true)}>Book Here</button>
            </div>
            {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}
        </div>
    );
}

export default HallDetail;
