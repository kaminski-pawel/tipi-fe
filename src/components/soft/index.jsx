import React from "react";

import Hero from "../reusable/Hero.jsx";
import HowCanWeHelp from "./HowCanWeHelp.jsx";
import TechStack from "./TechStack.jsx";
import OurSpecialities from "./OurSpecialities.jsx";
import Footer from "../reusable/Footer.jsx";
import "../reusable/styles.css";
import "../../styles.css";
import heroImg from "../../../public/images/icons/1F5A5.svg";

function HeroTitle() {
  return (
    <>
      <span className="blue-span">Oprogramowanie</span> na zamówienie
    </>
  );
}

export default function SoftwareHouse() {
  return (
    <>
      <Hero
        title={<HeroTitle />}
        subtitle="Specjalizujemy się w projektach heavy on data and analytics"
        heroImg={heroImg}
      ></Hero>
      <HowCanWeHelp></HowCanWeHelp>
      <TechStack></TechStack>
      {/* maybe some use cases instead of branch-spacialities */}
      <OurSpecialities></OurSpecialities>
      <Footer></Footer>
    </>
  );
}
