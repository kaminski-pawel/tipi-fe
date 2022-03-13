import React from "react";

import PointsNextToImg from "../reusable/PointsNextToImg.jsx";
import someImg from "../../../public/images/icons/suitcase-line.svg";

const points = [
  {
    icon: "ri-task-line",
    h4: "Zweryfikujemy",
    p: "Zweryfikujemy, czy Państwa firma jest objęta obowiązkami podatkowymi z przepisów o cenach transferowych",
  },
  {
    icon: "",
    h4: "",
    p: "",
  },
  {
    icon: "ri-pages-line",
    h4: "Sporządzimy dokumentacje",
    p: "Sporządzimy za Ciebie dokumentacje krajowe (local file)",
  },
  {
    icon: "",
    h4: "",
    p: "",
  },
  {
    icon: "ri-numbers-line",
    h4: "Przeprowadzimy analizy",
    p: "Przeprowadzimy wymagane analizy cen transferowych",
  },
  {
    icon: "",
    h4: "",
    p: "",
  },
];

function HowCanWeHelpTitle() {
  return (
    <>
      Jak możemy Ci <span className="blue-span">pomóc</span>
    </>
  );
}

export default function HowCanWeHelp() {
  return (
    <>
    <section className="how-we-can-help">
      <div className="col-xl-8 mx-auto">
        <PointsNextToImg
          img={{src: someImg, alt: ""}}
          title={<HowCanWeHelpTitle />}
          points={points}
          leftColClassName="col-xl-6 text-center aos-init aos-animate"
          rightColClassName="col-xl-6 d-flex content"
        ></PointsNextToImg>
      </div>
      </section>
    </>
  );
}
