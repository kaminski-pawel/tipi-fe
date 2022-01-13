import React from "react";

function HelpItem({ img, title, text }) {
  return (
    <div
      className="col-lg-4 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="box">
        <img src={img.src} alt={img.alt} className="img-fluid" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function HowCanWeHelp() {
  return (
    <section
      id="how-can-we-help"
      className="howcanwehelp d-flex align-items-center"
    >
      <div className="container">
        <h1>W czym możemy Ci pomóc</h1>

        <div className="row">
          <HelpItem
            img={{
              src: "https://picsum.photos/150/200?grayscale",
              alt: "Dedykowane oprogramowanie",
            }}
            title="Dedykowane oprogramowanie"
            text="Specjalizujemy się w tworzeniu oprogramowania dostosowanego do potrzeb naszych Klientów."
          ></HelpItem>
          <HelpItem
            img={{
              src: "https://picsum.photos/150/200?grayscale",
              alt: "Rozszerz swój zespół",
            }}
            title="Rozszerz swój zespół"
            text="Zatrudnij kogoś z nas do pracy w Twoim zespole zdalnie lub na miejscu."
          ></HelpItem>
          <HelpItem
            img={{
              src: "https://picsum.photos/150/200?grayscale",
              alt: "Tworzenie stron www",
            }}
            title="Tworzenie stron www"
            text="Wykonujemy projekty stron, serwisów i aplikacji internetowych z gotowymi lub dedykowanymi systemami zarządzania treścią."
          ></HelpItem>
        </div>
      </div>
    </section>
  );
}
