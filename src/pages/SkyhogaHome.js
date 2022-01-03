// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/style.css'

// Step 2: Define your component
const SkyhogaHome = () => {
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
}
// Step 3: Export your component
export default SkyhogaHome;
