import React from "react";
import ReactDOM from "react-dom";
import FinStatements from "../components/finstatements/FinStatements.jsx";

import "../i18n";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Proszę chwilę zaczekać...</div>}>
      <FinStatements
        lang={
          JSON.parse(document.getElementById("backend-options").textContent)
            .lang
        }
      />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("react-app-root")
);
