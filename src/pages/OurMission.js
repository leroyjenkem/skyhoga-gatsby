import React from 'react';
import '../skyhogaspastyle.module.css';

function OurMission () {
  return (
    <div  className="spacontainer">
      <div className="third section">
        <img src={`/morals.png`} alt="moralobligation.png"/>
      </div>

    <div className="fourth section">
      <h3>
        What is our mission?
      </h3>
      <p>
        In addition to undermining archaic legislation we want to do our part in reducing the uncertainty
        associated with darknet trading as well as to promote a safe
        marketplace by establishing a peer-driven user rating
        system, which includes both the sellers and the buyers using the service.<br/>
        Our goal is to make the service as transparent & as accesible as possible for everyone.
      </p>

      </div>
    </div>
  )
}

export default OurMission;
