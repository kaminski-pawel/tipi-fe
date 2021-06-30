import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Proszę chwilę zaczekać...</div>}>
      <p>LandingPage</p>
      <p>{document.getElementById("backend-options").textContent}</p>
      {/* <p>{typeof JSON.parse(document.getElementById("backend-options").textContent)}</p> */}
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("react-app-root")
);
