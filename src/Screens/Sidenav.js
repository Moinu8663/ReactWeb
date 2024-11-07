import React from 'react';
import { Link } from 'react-router-dom';

import './Sidenav.css';
// import { Offcanvas, Button, Nav } from 'react-bootstrap';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : ''}`}>
        <h4 className="p-3">Menu</h4>
        <ul className="nav flex-column p-2">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about" onClick={toggleSidebar}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/services" onClick={toggleSidebar}>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact" onClick={toggleSidebar}>Contact</Link>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;
