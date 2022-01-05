// Step 1: Import React
import React from 'react';

import AnchorHome from './AnchorHome'
import { Media } from 'gatsby-plugin-fresnel';
import Footer from "./Footer";
import Header from "./Header";
import LogoContainer from "./LogoContainer"

// Step 2: Define your component
export default function SkyhogaHome() {
  return (
    <>
      <Media lessThan="xl" >
        <Header />
        <LogoContainer />
      </Media>

      <Media greaterThanOrEqual="xl">
        <AnchorHome />
      </Media>

      <Footer />
    </>
  )
};
