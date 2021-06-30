import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Proszę chwilę zaczekać...</div>}>
      <p>Lease</p>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("react-app-root")
);
