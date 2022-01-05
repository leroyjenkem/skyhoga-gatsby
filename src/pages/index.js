import React from "react";
import PortfolioHome from "../templates/PortfolioHome";
import { Link, graphql } from 'gatsby';


export default function Home() {
  return (
    <>
    <nav className="navbar">
      <ul>
          <li className="show"><Link to="./SkyhogaHome">Home</Link></li>
          <li className="show"><Link to="../templates/GalleryPage">What is SKYHØGA?</Link></li>
          <li className="show"><Link to="../templates/PrivacyPolicy">Our mission</Link></li>
      </ul>
    </nav>


    </>
  );
}
