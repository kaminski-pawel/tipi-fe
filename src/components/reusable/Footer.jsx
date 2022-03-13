import React from "react";
import tipiLogo from "../../../public/images/logo.png";
import imgYt from "../../../public/images/logos/youtube.svg";
import imgTt from "../../../public/images/logos/twitter.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer" className="footer">
        {/* call to action */}
        <div className="container">
        <div className="row">
          <div className="copyright color-muted">
            <div className="col-lg-4 d-inline-block">
              <img src={tipiLogo} className="img-fluid" alt=""></img>
            </div>


            <div className="col-lg-4 d-inline-block">
              <ul className="socials footer-socials">
                <li><img src={imgYt} className="img-fluid" alt="" width="20px"></img></li>
                <li><img src={imgTt} className="img-fluid" alt="" width="20px"></img></li>
              </ul>
            </div>


            <div className="col-lg-4 d-inline-block">
              <a href="mailto:inquiries@applover.com" class="button button--white button--outlined button--small font-weight-bold">
                                      kontakt: office@tipi.software                    </a>
            </div>



          </div>


          </div>
          <div className="row">
          <div className="col-lg-12 d-inline-block justify-content-center">

            <ul className="menu-privacy">
              <li>            &copy; {year}{" "}
                          <strong>
                            <span>TIPI Software</span>
                          </strong>
              </li>
              <li>Polityka prywatności</li>

            </ul>
          </div>

          </div>
        </div>
      </footer>
    </>
  );
}
