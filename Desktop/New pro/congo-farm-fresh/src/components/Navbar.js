import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <Leaf className="logo-icon" />
          <span>E.T.M.S</span>
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;