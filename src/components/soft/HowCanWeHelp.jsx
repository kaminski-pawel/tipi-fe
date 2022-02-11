import React from "react";

import Boxes from "../reusable/Boxes.jsx";
import ico1 from "../../../public/images/ico-1.png";
import ico2 from "../../../public/images/ico-2.png";
import ico3 from "../../../public/images/ico-3.png";

const boxesData = [
  {
    img: {
      src: ico1,
      alt: "Dedykowane oprogramowanie",
    },
    title: "Dedykowane oprogramowanie",
    text: "Specjalizujemy się w tworzeniu oprogramowania dostosowanego do potrzeb naszych Klientów.",
  },
  {
    img: {
      src: ico2,
      alt: "Rozszerz swój zespół",
    },
    title: "Rozszerz swój zespół",
    text: "Zatrudnij kogoś z nas do pracy w Twoim zespole zdalnie lub na miejscu.",
  },
  {
    img: {
      src: ico3,
      alt: "Tworzenie stron www",
    },
    title: "Tworzenie stron www",
    text: "Wykonujemy projekty stron, serwisów i aplikacji internetowych z gotowymi lub dedykowanymi systemami zarządzania treścią.",
  },
];

function HowCanWeHelpTitle() {
  return (
    <>
      W czym możemy Ci <span className="blue-span">pomóc</span>
    </>
  );
}

export default function HowCanWeHelp() {
  return <Boxes title={<HowCanWeHelpTitle />} boxes={boxesData}></Boxes>;
}
