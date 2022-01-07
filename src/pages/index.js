
import { Link } from 'gatsby';
import * as React from "react"

export default function Portfolio() {
  return (
    <>
    <nav className="navbar">
      <ul>
          <li className="show"><Link to="/portfolio/gallerypage/">Home</Link></li>
          <li className="show"><Link to="/portfolio/skyhoga/">What is SKYHØGA?</Link></li>
          <li className="show"><Link to="/portfolio/privacypolicy/">Our mission</Link></li>
      </ul>
    </nav>


    </>
  );
}
