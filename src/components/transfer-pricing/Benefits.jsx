import React from "react";

import Boxes from "../reusable/Boxes.jsx";
import ico1 from "../../../public/images/icons/todo-line.svg";
import ico2 from "../../../public/images/icons/time-line.svg";
import ico3 from "../../../public/images/icons/hand-coin-line.svg";

const boxesData = [
  {
    img: {
      src: ico1,
      alt: "Pozbywasz się niewygodnych obowiązków",
    },
    title: "Pozbywasz się niewygodnych obowiązków",
    text: "Przygotujemy za Ciebie dokumentacje cen transferowych, tak, żebyś mógł skupić się na tym, co naprawdę ważne w Twojej działalności",
  },
  {
    img: {
      src: ico2,
      alt: "Oszczędzasz czas",
    },
    title: "Oszczędzasz czas",
    text: "Już po kilku dniach otrzymasz paczkę dokumentacji, spełniających wymogi przepisów podatkowych",
  },
  {
    img: {
      src: ico3,
      alt: "Oszczędzasz pieniądze",
    },
    title: "Oszczędzasz pieniądze",
    text: "Dzięki użyciu najnowszych technologii, cena przygotowania dokumentacji jest znacznie niższa, niż gdyby była wykonywana ręcznie",
  },
];

function HowCanWeHelpTitle() {
  return (
    <>
      Jakie <span className="blue-span">korzyści</span> osiągają nasi Klienci?
    </>
  );
}

export default function HowCanWeHelp() {
  return (
    <section id="benefits" className="reusable-boxes d-flex align-items-center">
      <Boxes title={<HowCanWeHelpTitle />} boxes={boxesData}></Boxes>
    </section>
  );
}
