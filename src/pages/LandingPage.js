import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "../components/landing/LandingPage.jsx";

import "../i18n";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Proszę chwilę zaczekać...</div>}>
      <LandingPage
        lang={
          JSON.parse(document.getElementById("backend-options").textContent)
            .lang
        }
      />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("react-app-root")
);
