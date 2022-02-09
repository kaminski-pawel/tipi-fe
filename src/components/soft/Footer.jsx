import React from "react";
import tipiLogo from "../../../public/images/logo.png";
import imgYt from "../../../public/images/logos/youtube.svg";
import imgTt from "../../../public/images/logos/twitter.svg";


export default function Footer() {
  return (
    <>
      <footer id="footer" class="footer">
        {/* call to action */}
        <div class="container">
          <div class="copyright color-muted">

            <div className="col-lg-4 d-inline-block">
              &copy; 2022{" "}
            <strong>
              <span>TIPI Software</span>
            </strong>
              <img src={imgYt} className="img-fluid" alt="" width="20px"></img>
              <img src={imgTt} className="img-fluid" alt="" width="20px"></img>
            </div>

            <div className="col-lg-4 d-inline-block justify-content-center">
              <img src={tipiLogo} className="img-fluid" alt=""></img>
            </div>

            <div className="col-lg-4 d-inline-block">
              <span>kontakt: office@tipi.software</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
