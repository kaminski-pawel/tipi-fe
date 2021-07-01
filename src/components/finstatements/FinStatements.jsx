import React from "react";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

export default function FinStatements(props) {
  // console.log("props", props);
  // const { t, i18n } = useTranslation();
  // i18n.changeLanguage(props.lang);

  return (
    <>
      <h1>MojeAnalizy.pl</h1>
      <p>Czytnik e-sprawozdań</p>
      <a target="_blank" href="https://mojeanalizy.pl/">
        Zacznij korzystać
      </a>
      <a href="https://www.youtube.com/watch?v=aJXS0BA-GGs">
        <img src="{% static 'site/img/icon-play.png' %}" alt="Odtwórz" />
        Zobacz demo
      </a>
      <h2>Jak sprawdzić finanse firm?</h2>
      <p>
        Serwis MojeAnalizy.pl pozwala na odczytanie e-sprawozdań finansowych
        zapisanych w formacie xml lub xades. Program odczytuje również te
        e-sprawozdania, które nie są zgodne w 100% ze specyfikacją Ministerstwa
        Finansów.
      </p>
      <p>
        Serwis MojeAnalizy.pl umożliwia m.in. eksport do Excela i analizę
        finansową (analizę wypłacalności, rentowności, wielkość zysków,
        przychodów, aktywów, inwestycji itd.).
      </p>
      <h3>Jak to działa?</h3>
      <h2>Zacznij korzystać z czytnika e-sprawozdań</h2>
      <a target="_blank" href="https://mojeanalizy.pl/">
        mojeanalizy.pl
      </a>
    </>
  );
}
