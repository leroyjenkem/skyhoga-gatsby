// Step 1: Import React
import React from 'react';
import { Link } from 'gatsby';
import '../styles/style.css';

// Step 2: Define your component
export default function SkyhogaHome() {
  return (
    <main>
    <nav className="navbar">
      <ul>
          <li className="show"><Link to="/index">Home</Link></li>
          <li className="show"><Link to="/WhatIsSkyhoga">What is SKYHØGA?</Link></li>
          <li className="show"><Link to="/OurMission">Our mission</Link></li>
          <li className="show"><Link to="/ShowYourSupport">Show your support</Link></li>
          <li className="show"><Link to="/GalleryPage">About us</Link></li>
      </ul>
    </nav>
    </main>
  )
};
