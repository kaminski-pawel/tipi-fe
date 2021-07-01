import React from "react";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

import TopPicture from "./TopPicture.jsx";
import QuickAccess from "./QuickAccess.jsx";
import Intro from "./Intro.jsx";
import PastProjects from "./PastProjects.jsx";
import WhatICareAbout from "./WhatICareAbout.jsx";
import WhatICanOffer from "./WhatICanOffer.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";

export default function KaminskiPawel(props) {
  // console.log("props", props);
  // const { t, i18n } = useTranslation();
  // i18n.changeLanguage(props.lang);

  return (
    <>
      <TopPicture />
      <QuickAccess />
      <Intro />
      <PastProjects />
      <WhatICanOffer />
      <WhatICareAbout />
      <AboutMe />
      <Contact />
    </>
  );
}
