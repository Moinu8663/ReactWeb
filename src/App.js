import './App.css';
import Sidebar from './Screens/Sidenav';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Contact from './Screens/Contact';
import { Button } from 'react-bootstrap';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="app-container d-flex">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`main-content p-4 ${isOpen ? 'shifted' : ''}`}
          onClick={() => isOpen && toggleSidebar()} // Close sidebar when clicking on main content if open
        >
          <Button variant="primary" onClick={toggleSidebar} className="mb-3">
            ☰ Toggle Sidebar
          </Button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
