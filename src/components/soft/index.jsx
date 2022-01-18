import React from "react";

import Hero from "./Hero.jsx";
import HowCanWeHelp from "./HowCanWeHelp.jsx";
import TechStack from "./TechStack.jsx";
import OurSpecialities from "./OurSpecialities.jsx";
import Footer from "./Footer.jsx";
import "./Soft.css";
import "../../styles.css";


export default function SoftwareHouse() {
  return (
    <>
      <Hero></Hero>
      <HowCanWeHelp></HowCanWeHelp>
      <TechStack></TechStack>
      {/* maybe some use cases instead of branch-spacialities */}
      <OurSpecialities></OurSpecialities>
      <Footer></Footer>
    </>
  );
}
