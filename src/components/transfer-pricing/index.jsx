import React from "react";

import Hero from "../reusable/Hero.jsx";
import HowCanWeHelp from "./HowCanWeHelp.jsx";
import Experience from "./Experience.jsx";
import Benefits from "./Benefits.jsx";
import Footer from "../reusable/Footer.jsx";
import "../reusable/styles.css";
import "../../styles.css";

function HeroTitle() {
  return (
    <>
      Analiza <span className="blue-span">cen transferowych</span>
    </>
  );
}

export default function SoftwareHouse() {
  return (
    <>
      <Hero
        title={<HeroTitle />}
        subtitle="Przygotujemy za Ciebie dokumentacje cen transferowych"
      ></Hero>
      <Experience></Experience>
      <HowCanWeHelp></HowCanWeHelp>
      <Benefits></Benefits>
      <Footer></Footer>
    </>
  );
}
