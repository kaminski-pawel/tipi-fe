import React from "react";

import PointsNextToImg from "../reusable/PointsNextToImg.jsx";

const points = [
  {
    icon: "ri-line-chart-line",
    h4: "",
    p: "Zweryfikujemy, czy Państwa firma jest objęta obowiązkami podatkowymi z przepisów o cenach transferowych",
  },
  {
    icon: "ri-line-chart-line",
    h4: "",
    p: "",
  },
  {
    icon: "ri-line-chart-line",
    h4: "",
    p: "Sporządzimy za Ciebie dokumentacje krajowe (local file)",
  },
  {
    icon: "ri-line-chart-line",
    h4: "",
    p: "",
  },
  {
    icon: "ri-line-chart-line",
    h4: "",
    p: "Przeprowadzimy wymagane analizy cen transferowych",
  },
  {
    icon: "ri-line-chart-line",
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
      <PointsNextToImg
        title={<HowCanWeHelpTitle />}
        points={points}
      ></PointsNextToImg>
    </>
  );
}
