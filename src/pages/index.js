import React from "react";
import { Link } from 'gatsby';


export default function Home() {
  return (
    <>
    <nav className="navbar">
      <ul>
          <li className="show"><Link to="/portfolio/gallerypage/">Home</Link></li>
          <li className="show"><Link to="/SkyhogaHome/">What is SKYHØGA?</Link></li>
          <li className="show"><Link to="/portfolio/privacypolicy/">Our mission</Link></li>
      </ul>
    </nav>


    </>
  );
}
