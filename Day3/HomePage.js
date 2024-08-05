// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/HomePage.css';
// import g1 from "../Assets/images/auditorium1.jpg";
import g1 from "../Assets/images/seminar8.jpg";
import g2 from "../Assets/images/auditorium2.jpg";
import g3 from "../Assets/images/auditorium8.jpg";
import logo from '../Assets/images/LOGO OF SKCT.jpg';
import g4 from "../Assets/images/seminar7.jpg";
import g5 from "../Assets/images/seminar2.jpeg";
import g6 from "../Assets/images/seminar3.jpg";
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to <span>SKCT Hall Booking</span></h1>
          <p>"The best way to predict the future is to create it."</p>
          <Link to="/hall-list" className="explore-button">Explore Halls</Link>
        </div>
      </header>
      <div className="logo-right">
        <img src={logo} alt="College Logo" />
      </div>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery">
          <img src={g1} alt="Gallery 1" />
          <img src={g2} alt="Gallery 2" />
          <img src={g3} alt="Gallery 3" />
          <img src={g4} alt="Gallery 4" />
          <img src={g5} alt="Gallery 5" />
          <img src={g6} alt="Gallery 6" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
