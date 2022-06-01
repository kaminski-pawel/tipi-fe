import React from "react";
import tipiLogo from "../../../public/images/logo.png";
import imgYt from "../../../public/images/logos/youtube.svg";
import imgTt from "../../../public/images/logos/twitter.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer id="footer" className="footer">


      <div className="container">
            <div className="footer-newsletter w-75 mx-auto">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h4>Zapraszamy do kontaktu</h4>
                  <a className="btn-btn">office@tipi.software</a>

                </div>

              </div>
            </div>
          </div>





        {/* call to action */}
        <div className="container">
          <div className="row">

<div class="footerBottom"><div class="footerBottomSection group"><div class="footerSocialContainer">

<ul className="socials footer-socials">
<li>
<a
  href="mailto:office@tipi.software"
  className=""
>
  kontakt: office@tipi.software{" "}
</a>
</li>

  <li>
    <img
      src={imgYt}
      className="img-fluid"
      alt=""
      width="20px"
    ></img>
  </li>
  <li>
    <img
      src={imgTt}
      className="img-fluid"
      alt=""
      width="20px"
    ></img>
  </li>
</ul>

</div><div class="footerBottomContainer">
<ul className="menu-privacy">
  <li>
    {" "}
    &copy; {year}{" "}
    <strong>
      <span>TIPI Software</span>
    </strong>
  </li>
  <li>Polityka prywatności</li>
</ul>
</div></div></div>



          </div>



        </div>
      </footer>
    </>
  );
}
