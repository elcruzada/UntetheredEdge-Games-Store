import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer"
            onClick={() => window.alert('Footer links coming soon')}
        >
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-column-title">Resources</h3>
                    <ul className="footer-links">
                        <li className="footer-link">
                            Support-A-Creator</li>
                        <li className="footer-link">Distribute on UEI</li>
                        <li className="footer-link">Careers</li>
                        <li className="footer-link">Company</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column-title">Community</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Community Rules</li>
                        <li className="footer-link">Fanart policy</li>
                        <li className="footer-link">UX Research</li>
                        <li className="footer-link">Trolling addict?</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column-title">Need help?</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Online Services</li>
                        <li className="footer-link">Cookie Policy</li>
                        <li className="footer-link">Privacy Policy</li>
                        <li className="footer-link">Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-text">&copy; 2023 UntetheredEdge Interactive, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
