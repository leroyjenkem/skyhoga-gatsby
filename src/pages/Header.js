import  React from 'react';
import { Link } from "gatsby";
import '../skyhogaspastyle.module.css';





export default function Header () {
    return (

    <div className="spacontainer">
      <header>
      <nav className="navbar">
        <ul>
            <li className="show"><Link to="/">Home</Link></li>
            <li className="show"><Link to="/WhatIsSkyhoga">What is SKYHØGA?</Link></li>
            <li className="show"><Link to="/OurMission">Our mission</Link></li>
            <li className="show"><Link to="/ShowYourSupport">Show your support</Link></li>
            <li className="show"><Link to="/AboutUs">About us</Link></li>
        </ul>
      </nav>
      </header>
    </div>

  )
};
