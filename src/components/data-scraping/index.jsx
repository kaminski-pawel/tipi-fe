import React from "react";

import Hero from "../reusable/Hero.jsx";
import WhatItIs from "./WhatItIs.jsx";
import WhatWillBeTheResult from "./WhatWillBeTheResult.jsx";
import PossibleDataSources from "./PossibleDataSources.jsx";
import Footer from "../reusable/Footer.jsx";
import "../reusable/styles.css";
import "../../styles.css";

export default function SoftwareHouse() {
  return (
    <>
      <Hero
        title="Pozyskiwanie danych"
        subtitle="Szybkie i dokładne usługi ekstrakcji danych"
      ></Hero>
      <WhatItIs></WhatItIs>
      <WhatWillBeTheResult></WhatWillBeTheResult>
      <PossibleDataSources></PossibleDataSources>
      <Footer></Footer>
    </>
  );
}
