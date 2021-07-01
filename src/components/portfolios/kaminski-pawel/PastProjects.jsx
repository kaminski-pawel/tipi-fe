import React from "react";

const NOTES = `
Problem Rozwiązanie Zastosowane technologie Github (nieaktywny - projekt
komercyjny) Dodać portfolio do projektów, wrzucić na github, readme.md +
Makefile do deploymentu
https://bl.ocks.org/ctufts/f38ef0187f98c537d791d24fda4a6ef9
https://bl.ocks.org/SpaceActuary/d6b5ca8e5fb17842d652d0de21e88a05
`;

const PastProjects = () => {
  return (
    <>
      <h3 id="projects">Ważniejsze projekty 2018-2021</h3>
      <h4>mojeanalizy.pl</h4>
      <p>
        Zestaw narzędzi do analizy danych finansowych polskich przedsiębiorstw.
        API serwowane przez backend w Django. Złożona logika biznesowa napisana
        w Python, w tym narzędzia do analizy finansowej, system eksportowania
        wystandaryzowanych danych finansowych, modele predykcyjne itd. Frontend
        serwowany z serwera (SSR) przy użyciu Vue i Nuxt. Deployment w
        infrastrukturze AWS z użyciem baz danych SQL (Postgresql) i noSQL
        (DynamoDB).
      </p>
      <h5>Zastosowane technologie</h5>
      <ul>
        <li>Python</li>
        <li>Javascript</li>
        <li>Django</li>
        <li>Django Rest Framework</li>
        <li>Xml parsing tools (lxml, defusedxml etc.)</li>
        <li>Nginx</li>
        <li>PostgreSQL</li>
        <li>Celery</li>
        <li>Stripe</li>
        <li>Vue.js</li>
        <li>Vuex</li>
        <li>Nuxt.js</li>
        <li>AWS EC2</li>
        <li>AWS DynamoDB</li>
        <li>AWS RDS</li>
        <li>AWS SQS</li>
        <li>AWS S3</li>
      </ul>
      <h4>Pajączek</h4>
      <p>
        Zestaw programów do etycznej ekstrakcji publicznych danych z Krajowego
        Rejestru Sądowego, Monitora Sądowego i Gospodarczego oraz z Systemu
        Udostępniania Danych o Pomocy Publicznej. Selenium wdrożone na serwerach
        EC2 dostępnych przez zdalny ekran.
      </p>
      <ul>
        <li>Python</li>
        <li>Selenium</li>
        <li>AWS EC2</li>
      </ul>
      <h4>TIPI Lease</h4>
      <p>
        Aplikacja do określania kwot amortyzacji do zaksięgowania z tytułu
        leasingu. Program składał się z systemu lokalnych baz danych ACE
        Database Engine i interfejsu MS Access (kod VBA + kwerendy SQL).
      </p>
      <h5>Zastosowane technologie</h5>
      <ul>
        <li>VBA</li>
        <li>SQL</li>
        <li>MS Access</li>
        <li>ACE Database</li>
      </ul>
      <h4>TIPI Transfer</h4>
      <p>
        System ekspercki i złożony form wizard do generowania dokumentacji
        podatkowych w edytowalnych plikach MS Word. Cała aplikacja wykonana w
        Pythonie z użyciem Django (w tym frontend przy użyciu języka szablonów
        Django). Istotną częścią projektu był moduł do zapisywania zmiennych
        wybranych w aplikacji do plików XML, które następnie składały się na
        pliki MS Word (.docx).
      </p>
      <h5>Zastosowane technologie</h5>
      <ul>
        <li>Python</li>
        <li>Django</li>
      </ul>
      <h4>statusvat.net</h4>
      <p>
        Aplikacja do sprawdzania statusu VAT i VAT UE podatników krajowych.
        Polegała na odczycie importowanych plików Excel lub podobnych,
        weryfikacji danych w zewnętrznym API a następnie zwróceniu wyniku
        sprawdzenia w pliku pdf. Zarówno backend jak i frontend wykonany w
        Django.
      </p>
      <h5>Zastosowane technologie</h5>
      <ul>
        <li>Python</li>
        <li>Django</li>
      </ul>
      <br />
      <p>
        Oprócz tego wiele mniejszych aplikacji i skryptów w języku Python oraz
        prototypów rozwiązań webowych (najczęściej z użyciem Django i Vue).
      </p>
    </>
  );
};

export default PastProjects;
