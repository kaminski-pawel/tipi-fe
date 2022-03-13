import React from "react";

import Hero from "../reusable/Hero.jsx";
import WhatItIs from "./WhatItIs.jsx";
import WhatWeOffer from "./WhatWeOffer.jsx";
import UseOurServices from "./UseOurServices.jsx";
import WhatWillBeTheResult from "./WhatWillBeTheResult.jsx";
import PossibleDataSources from "./PossibleDataSources.jsx";
import Footer from "../reusable/Footer.jsx";
import "../reusable/styles.css";
import "../../styles.css";
import heroImg from "../../../public/images/icons/1F577.svg";

function HeroTitle() {
  return (
    <>
      Pozyskiwanie <span className="blue-span">danych</span>
    </>
  );
}

export default function SoftwareHouse() {
  return (
    <>
      <Hero
        title={<HeroTitle />}
        subtitle="Szybkie i dokładne usługi ekstrakcji danych"
        heroImg={heroImg}
      ></Hero>
      <section id="what-it-is" className="what-it-is">
        <WhatItIs></WhatItIs>
        <UseOurServices></UseOurServices>
        <WhatWeOffer></WhatWeOffer>
      </section>
      <section className="data-scraping-bullets">
        <div className="container">
          <WhatWillBeTheResult></WhatWillBeTheResult>
          <PossibleDataSources></PossibleDataSources>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
