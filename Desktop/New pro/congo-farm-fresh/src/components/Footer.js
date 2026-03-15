import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Congo Farm Fresh</h3>
            <p>Your trusted source for fresh, locally-raised pigs, goats, chickens, and vegetables in Brazzaville.</p>
            <div className="social-links">
              <a href="#"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Youtube /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><Link to="/products?category=pigs">Pigs</Link></li>
              <li><Link to="/products?category=goats">Goats</Link></li>
              <li><Link to="/products?category=chickens">Local Chickens</Link></li>
              <li><Link to="/products?category=vegetables">Vegetables</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li><Phone size={16} /> +242 06 123 4567</li>
              <li><Mail size={16} /> info@congofarmfresh.cg</li>
              <li><MapPin size={16} /> Brazzaville, Congo</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 E.T.M.S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;