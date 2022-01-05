import React from "react";
import '../skyhogastyle.css';




function AnchorHome () {
  return (


    <div>


    <div className="navbar">
      <div className="show">
      <a className="show" href="/#skyhoga">Home</a>
      <a className="show" href="#what-is-skyhoga">What is SKYHØGA?</a>
      <a className="show" href="#our-mission">Our mission</a>
      <a className="show" href="#show-support">Show your support</a>
      <a className="show" href="#about">About us</a>
      </div>
    </div>

    <a id="skyhoga">
      <div className="logo-container">
        <img id="logo" src={`/logo.png`} alt="skyhogalogo.png" />

        <h3 className="pink">"Jag ska bli so Satans skyhög."</h3>
      </div>
    </a>

    <div className="grid-container">

      <a id="what-is-skyhoga">
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
      </a>

        <div className="second section">
          <img src={`/login1.png`} alt="imageofloginscreen1.png" />
          <img src={`/login2.png`} alt="imageofloginscreen2.png" />
        </div>



        <div className="third section">
          <img src={`/morals.png`} alt="moralobligation.png"/>
        </div>


      <a id="our-mission">
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
      </a>

      <a id="show-support">
        <div className="fifth section">
          <h3>
            Show your support
          </h3>

          <p>
            The best way to show your support is to register an account and
            start using our service. Buyer profiles are priced at 15 €, while
            Seller profiles are priced at 300 € to incentivize honest
            conduct and discourage burning accounts.<br/>
            All proceeds are used to run and develop the service,
            excess funds are donated yearly to the Finnish Cannabis Association.
          </p>

        </div>
      </a>

        <div className="sixth section">
          <img src={`/listings.png`} alt="imageoflistingview.png"/>
          <img src={`/profile.png`} alt="imageofprofileview.png"/>
        </div>


      <a id="about">
        <div className="seventh section">
          <h3>
            More about us
          </h3>

          <p>
            SKYHØGA is brought to you by a merry group of idealists who believe
            in the right to self-determination over oppressive legislation.<br/>We
            wish to extend our personal gratitude towards anyone growing
            something besides a moustache, your efforts are the very foundation
            of our shared cause.<br/>420 420 420 420 420 420 420 420 420 420 420
          </p>
        </div>
      </a>

      <div className="eight section">

      <img src={`/valuess.png`} alt="corevalues.png"/>


      </div>
    </div>

    </div>

  );
  }

export default AnchorHome;
