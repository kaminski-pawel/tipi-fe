import React from "react";

import TextAndImg from "../reusable/TextAndImg.jsx";

function WhatItIsContent() {
  return (
    <>
      <h3>Data Scraping</h3>
      <h2>
        Data Scraping to usługa pozwalająca na ekstrakcję dużych ilości danych z
        sieci, które mogą zostać następnie wykorzystane przez firmy do
        zwiększania możliwości i podejmowania inteligentnych decyzji
        biznesowych.
      </h2>
      <p>
        Skorzystaj z naszych usług do pozyskania dużej ilości danych z sieci.
        Tworzymy narzędzia do pozyskiwania informacji z publicznych baz danych,
        aplikacji i stron internetowych. Oferujemy rozwiązania obejmujące w
        szczególności pobranie, odczyt, analizę i weryfikację poprawności dużej
        ilości danych. Pozyskane w ten sposób informacje czyścimy, poprawiamy
        ewentualne wadliwości danych i konwertujemy do ustrukturyzowanej
        postaci, jaka najbardziej odpowiada potrzebom naszych Klientów.
      </p>
    </>
  );
}

export default function WhatItIs() {
  return (
    <section id="what-it-is" className="what-it-is">
      <TextAndImg
        content={<WhatItIsContent />}
        img={{ src: "", alt: "" }}
      ></TextAndImg>
    </section>
  );
}
