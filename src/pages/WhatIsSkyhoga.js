import React from 'react';
import Helmet from 'react-helmet';
import '../skyhogaspastyle.css';

export default function WhatIsSkyhoga() {

  return (
    <>

    <div className="spacontainer">
      <div className="first section">
        <h3>
          What is SKYHØGA?
        </h3>
        <p>
          SKYHØGA is an idea for a Darknet-hosted, secure mobile platform for
          arranging face-to-face transactions between consenting parties wishing to engage in trading cannabis-products.
          <br/>The main purpose of the service is to enable its users to easily circumvent prohibiton in areas where such laws are being enforced.
        </p>
      </div>

      <div className="second section">

        <img src={`/login1.png`} alt="imageofloginscreen1.png" />
        <img src={`/login2.png`} alt="imageofloginscreen2.png" />

      </div>
      </div>
      </>
  )
};
