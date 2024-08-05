// Footer.js
import "../Assets/css/Footer.css"; // Make sure this path is correct

function Footer() {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        Hall Booking System is your one-stop solution for booking
                        halls for various events. We provide the best venues at competitive prices.
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@hallbookingsystem.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Event St, Party City, PC 12345</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hall Booking System. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;