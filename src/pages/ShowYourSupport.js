import  React from 'react';
import '../skyhogaspastyle.module.css';

function ShowYourSupport () {
  return (
    <div  className="spacontainer">
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

      <div className="sixth section">
        <img src={`/listings.png`} alt="imageoflistingview.png"/>
        <img src={`/profile.png`} alt="imageofprofileview.png"/>
      </div>
  </div>
  )
}

export default ShowYourSupport;
