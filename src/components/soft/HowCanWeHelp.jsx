import React from "react";
import ico1 from "../../../public/images/ico-1.png";
import ico2 from "../../../public/images/ico-2.png";
import ico3 from "../../../public/images/ico-3.png";

function HelpItem({ img, title, text }) {
  return (
    <div
      className="col-lg-4 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="box">
        <img src={img.src}
             alt={img.alt}
             // width={img.width}
             // height={img.height}
             className="img-fluid"
             />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
// style={{img: "sdadsa"}}
export default function HowCanWeHelp() {
  return (
    <section
      id="how-can-we-help"
      className="howcanwehelp d-flex align-items-center"
    >
      <div className="container">
        <header class="section-header">
          <h2>W czym możemy Ci <span className="blue-span">pomóc</span></h2>
        </header>

        <div className="row">
          <HelpItem
            img={{
              src: ico1,
              alt: "Dedykowane oprogramowanie",
              // width: "10px",
              // height: "10px",
            }}
            title="Dedykowane oprogramowanie"
            text="Specjalizujemy się w tworzeniu oprogramowania dostosowanego do potrzeb naszych Klientów."
          ></HelpItem>
          <HelpItem
            img={{
              src: ico2,
              alt: "Rozszerz swój zespół",
              // width: "10px",
              // height: "10px",
            }}
            title="Rozszerz swój zespół"
            text="Zatrudnij kogoś z nas do pracy w Twoim zespole zdalnie lub na miejscu."
          ></HelpItem>
          <HelpItem
            img={{
              src: ico3,
              alt: "Tworzenie stron www",
              // width: "10px",
              // height: "10px",
            }}
            title="Tworzenie stron www"
            text="Wykonujemy projekty stron, serwisów i aplikacji internetowych z gotowymi lub dedykowanymi systemami zarządzania treścią."
          ></HelpItem>
        </div>
      </div>
    </section>
  );
}
