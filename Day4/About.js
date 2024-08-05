// src/components/About.js
import React from 'react';
import '../Assets/css/About.css'; // Ensure this path is correct
import img2 from '../Assets/images/Adhi.png';
import img1 from "../Assets/images/Malar.png";
import img3 from "../Assets/images/Sumi.png";
import Navbar from './Navbar'; // Import Navbar

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about-container">
        <div className="about-row">
          <div className="about-image">
            <img src={img1} alt="Description 1" />
          </div>
          <div className="about-description">
            <h2>Smt. S. Malarvizhi<br />
            Chairperson and Managing Trustee</h2>
            <p>
            Smt. S. Malarvizhi, is a visionary academician, a reformer, and an able administrator. As an educator herself, she firmly believes in education that nurtures holistic development for students. She is the driving force behind the Sri Krishna Institutions to have emerged as one of the pioneers in providing quality education.

The Institutions offer education to over 23,000 students through two Engineering Colleges, two Arts and Science Colleges, and a Polytechnic College. Under her aegis, the colleges have been highly ranked by the NIRF. The exceptional architecture and beautiful green ambiance of the campuses have been recognized by AICTE as the best institutions in maintaining a Clean and Green Campus under the Swacchta ranking 2019.

Smt.S. Malarvizhi holds key positions in various industries and educational and professional bodies. She is currently serving as a Member of the Syndicate of Anna University.
She is the Vice President of the Educational Promotional Society of India. She serves as a joint chairperson of the National Educational Conclave, CII Coimbatore and Vice Chairperson of Tamilnadu Athletic Association.
            </p>
          </div>
        </div>
        <div className="about-row reverse">
          <div className="about-image">
            <img src={img2} alt="Description 2" />
          </div>
          <div className="about-description">
            <h2>Sri. K. Adithya, B.E., MOB (Australia)<br />
            Trustee</h2>
            <p>
            Mr. K. Adithya, BE (Mechanical Engineering) and Master of Business, Australia, is a passionate entrepreneur. Through his education and varied cultural exposure, he has acquired the knowledge and skills necessary for his diverse career.

Mr. K. Adithya is establishing his path in the industrial and business world. His passion and commitment are visible through his achievements in manufacturing and exporting of machinery, his ventures in managing Educational Institutions, IT and ITES businesses, and the distribution of international products. He holds the position of managing partner in multiple companies.

In addition to his professional contributions, Mr. K. Adithya is deeply involved in the field of education. He holds the roles of trustee and secretary at both Sri Krishna Trust and VLB Trust, where he oversees the education of a substantial student body, with over 25,000 students benefiting from these institutions annually. His commitment to education extends globally, with his companies offering top-tier solutions in Engineering, Information Technology, and Higher Education, ensuring a competitive edge on the international stage.
            </p>
          </div>
        </div>
        <div className="about-row">
          <div className="about-image">
            <img src={img3} alt="Description 3" />
          </div>
          <div className="about-description">
            <h2>Dr. Sumithra M G<br />
            Principal</h2>
            <p>
            Committed towards providing a nurturing and inspiring learning environment for our students. We believe that engineering is not just a profession, but a calling to make a difference in the world. Here, we encourage our students to think beyond the textbooks, embrace innovation, and cultivate an entrepreneurial mindset. Together, let us embark on a journey of knowledge, exploration, and endless possibilities. Our mission is to empower the next generation of engineers to become leaders, problem solvers, and change-makers in the ever-evolving field of engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
