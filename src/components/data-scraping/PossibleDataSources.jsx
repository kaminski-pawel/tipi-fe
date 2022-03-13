import React from "react";

export default function PossibleDataSources() {
  return (
    <>
      <div className="row">


      <div className="col-md-6">
      </div>

      <div className="col-md-6">
        <h3>Przykładowe źródła, z których możemy wydobyć dla Ciebie dane</h3>


                <div className="col-md-12">
                  <div className="feature-box d-flex align-items-center">
                    <i className="ri-terminal-window-line"></i>
                    <h4>dane z publicznych stron Internetowych i aplikacji</h4>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="feature-box d-flex align-items-center">
                    <i className="ri-file-text-line"></i>
                    <h4>
                      teksty zawarte w skanach dokumentów lub w fizycznych papierowych
                      dokumentach
                    </h4>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="feature-box d-flex align-items-center">
                    <i className="ri-database-line"></i>
                    <h4>dane z ogólnodostępnych baz danych lub API</h4>
                  </div>
                </div>

      </div>




    </div>
    </>
  );
}
