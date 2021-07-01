import React from "react";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

export default function Lease(props) {
  // console.log("props", props);
  // const { t, i18n } = useTranslation();
  // i18n.changeLanguage(props.lang);

  return (
    <>
      <h1>TIPI Lease</h1>
      <p>Aplikacja do zarządzania umowami leasingu zgodnie z MSSF 16.</p>
      <a href="mailto:office@tipi.software">Skontaktuj się</a>
      <a href="https://www.youtube.com/watch?v=uJPs3uu5Z88">
        <img src="{% static 'site/img/icon-play.png' %}" alt="Odtwórz" />
        Zobacz demo
      </a>
      <h2>Przygotuj się na zmiany w księgowaniu leasingu</h2>
      <p>
        1 stycznia 2019 weszły w życie zmiany w standardach rachunkowości mające
        ogromny wpływ na procesy biznesowe, systemy informatyczne oraz
        środowisko kontroli wewnętrznej leasingobiorców. Dostosowanie do
        przepisów nowego standardu wymaga analizy wszystkich umów leasingowych,
        dzierżawy i najmu w firmie oraz ujęcia ich na bilansie w formie
        zobowiązania finansowego oraz prawa do użytkowania aktywa.
      </p>
      <h2>Czy Excel rozwiąże problem?</h2>
      <p>
        Nie daj się zwieść – Excel przestaje być efektywny przy więcej niż
        kilkunastu składnikach leasingowanych aktywów. Przy większej ilości
        aktywów ujawniają się słabe strony Excela: podatność na ludzkie błędy,
        brak możliwości pracy wielu osób, brak możliwości śledzenia zmian czy
        brak skalowalności.
      </p>
      <h2>Czy jest inne wyjście?</h2>
      <p>Rozwiązaniem są dedykowane programy do wdrożenia MSSF 16.</p>
      <p>
        Opracowaliśmy narzędzie do zarządzania umowami leasingu i kalkulacji
        zobowiązań, aktywów, odsetek i amortyzacji zgodnie z MSSF 16 - TIPI
        Lease. Pomagamy dostosować się do nowego standardu i mamy to, czego nie
        da ci Excel.
      </p>
      <h3>Co nas wyróżnia od konkurencyjnych rozwiązań?</h3>
      <h4>Cena</h4>
      <p>
        TIPI Lease oparte jest o istniejące rozwiązania, które posiadasz już na
        swoim komputerze - Access(R) z pakietu MS Office(R). Dzięki czemu jest
        znacznie tańszy od konkurencyjnych programów, które powstawały od zera.
      </p>
      <h4>Zautomatyzowane kalkulacje</h4>
      <p>
        Program automatycznie policzy zobowiązania i prawo do użytkowania do
        bilansu.
      </p>
      <h4>Bezpieczeństwo danych</h4>
      <p>
        Nie zapisujemy danych w chmurze - wrażliwe informacje twojej firmy
        pozostają cały czas tylko u Ciebie.
      </p>
      <h4>Elastyczność w użytkowaniu</h4>
      <p>Jednoczesna praca wielu użytkowników</p>
      <h4>Kontrola dostępu</h4>
      <p>Program jest zabezpieczony przed nieupoważnionymi osobami.</p>
      <h4>Łatwość obsługi</h4>
      <p>
        Pracujesz w programie, który znasz. TIPI Lease jest obsługiwany przez
        Pakiet Office(R) i nie wymaga instalacji dodatkowego skomplikowanego
        oprogramowania.
      </p>
      <h4>Przystępny interfejs</h4>
      <p>
        Atrakcyjny interfejs użytkownika umożliwia szybkie dodawanie oraz
        modyfikację danych.
      </p>
      <h4>Dostosowanie do Twoich potrzeb</h4>
      <p>
        Skontaktuj się znami, a wypracujemy rozwiązanie dopasowane do Twoich
        potrzeb.
      </p>
      <h3>Jak to działa?</h3>
      <h2>Zainteresowany?</h2>
      <p>
        Skontaktuj się! Wypracujemy rozwiązanie dostosowane do Twoich potrzeb.
      </p>
      <a href="mailto:office@tipi.software">office@tipi.software</a>
    </>
  );
}
