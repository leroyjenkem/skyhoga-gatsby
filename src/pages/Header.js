import  React from 'react';
import { Link } from "gatsby";





function Header () {
    return (
    <>

    <div>
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
      <div className="Content">



      </div>
      </div>

    </>
  );
}


export default Header;
