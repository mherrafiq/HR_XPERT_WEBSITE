import React from 'react';
import './Footer.css'; // Ensure this file exists
//import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="transform-text">Transform Your HR Processes Today</h2>
                    <h3 className="stay-informed">Stay Informed</h3>
                    <p className="description-text">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis.
                    </p>
                    {/* <div className="social-icons">
                        <FaFacebookF className="social-icon" />
                        <FaInstagram className="social-icon" />
                        <FaTwitter className="social-icon" />
                    </div> */}
                    {/* Add the copyright notice here */}
                    <p className="copyright-text">© 2024 Company Name. All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <p className="description-text">
                        Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit.
                    </p>
                    <div className="email-input-container">
                        <input type="email" placeholder="Enter your email address." className="footer-email-input" />
                        <button className="footer-button">Book a Demo</button>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-list">
                                <li><a href="#PowerfullFeature">Powerfull-Features</a></li>
                                <li><a href="#How">How-it-works</a></li>
                                <li><a href="#Faqs">FAQs</a></li>
                                <li><a href="#Price">Pricing-Plan</a></li>
                                {/* <li>About</li> */}
                            </ul>
                        </div>
                        {/* <div className="footer-column">
                            <h4 className="footer-heading">Solutions</h4>
                            <ul className="footer-list">
                                <li>Employee Onboarding</li>
                                <li>Time and Attendance</li>
                                <li>Performance Management</li>
                                <li>HR Analytics</li>
                                <li>Employee Self-Service</li>
                            </ul>
                        </div> */}
                        {/* <div className="footer-column">
                            <h4 className="footer-heading">Resources</h4>
                            <ul className="footer-list">
                                <li>Help Center</li>
                                <li>Case Studies</li>
                                <li>E-book & Guides</li>
                                <li>Webinars</li>
                                <li>Community Forum</li>
                            </ul>
                        </div> */}
                        {/* <div className="footer-column">
                            <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-list">
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                                <li>GDPR Compliance</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

