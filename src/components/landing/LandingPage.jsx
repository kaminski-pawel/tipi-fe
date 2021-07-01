import React from "react";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

export default function LandingPage(props) {
  // console.log("props", props);
  // const { t, i18n } = useTranslation();
  // i18n.changeLanguage(props.lang);

  return (
    <>
      <h1>Usługi analiz rynkowych</h1>
      <h2>
        Oferujemy rozwiązania indywidualnie dostosowane do potrzeb Twojej firmy
        i Twojej roli:
      </h2>
      <h4>Ceny transferowe</h4>
      <h4>Wycena przedsiębiorstw</h4>
      <h4>Analiza kredytowa przedsiębiorstw</h4>
      <h4>Analiza wiarygodności przedsiębiorstw</h4>
      <h4>Analizy biznesowe (w tym marketingowe)</h4>

      <h2>Jak przebiega współpraca:</h2>
      <p>1. Skontaktuj się</p>
      <p>
        2. W oparciu o ustalone kryteria wyselekcjonujemy przedsiębiorstwa do
        analizy
      </p>
      <p>3. Pobieramy dane finansowe dla wyselekcjonowanych przedsiębiorstw</p>
      <p>
        4. Przefiltrowanie wyselekcjonowanej grupy przedsiębiorstw w oparciu o
        dane finansowe
      </p>
      <p>
        5. Dokonujemy odpowiedniej analizy na podstawie ww. danych finansowych i
        sporządzamy gotowy raport lub – w zależności od Twoich potrzeb -
        przesyłamy zrzut z naszej bazy danych, abyś sam mógł wykonać analizę
      </p>

      <h3>
        W zależności od potrzeb do przeprowadzenia analiz eksperckich
        zapraszamy:
      </h3>
      <h4>Doradców podatkowych</h4>
      <h4>Biegłych rewidentów</h4>
      <h4>Rzeczoznawców</h4>
      <h4>Innych ekspertów</h4>

      <h2>Skontaktuj się</h2>
      <p>
        Zapraszamy do kontaktu e-mailowego w celu uzgodnienia warunków
        współparcy
      </p>
      <a href="mailto:office@tipi.software">office@tipi.software</a>
    </>
  );
}
