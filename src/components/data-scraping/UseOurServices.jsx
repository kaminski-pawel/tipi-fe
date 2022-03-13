import React from "react";

import imgSth from "../../../public/images/icons/service-line.svg";

export default function UseOurServices(props) {
  return (
    <div
      className="container aos-init aos-animate"
      data-aos="fade-up"
      rcomponent="reusable/TextAndImg.jsx"
    >
      <div className="row gx-0">
        <div
          className="col-lg-6 d-flex align-items-center justify-content-center aos-init aos-animate"
          data-aos="zoom-out"
          data-aos-delay="200"
        >



        <div className="blob-wrapper">


          <div className="blob-2">
              <svg width="400" height="400" viewBox="0 0 600 600"><path d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z" fill="url(#linear-gradient)"/>   </svg>
              <div className="stack-top">

                <img
                  src={imgSth}
                  className="img-fluid"
                  alt=""
                ></img>

              </div>
            </div>
          </div>







        </div>
        <div
          className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="content">
            <h4>Skorzystaj z naszych usług</h4>
            <p>
              Skorzystaj z naszych usług do pozyskania dużej ilości danych z sieci.
              Tworzymy narzędzia do pozyskiwania informacji z publicznych baz danych,
              aplikacji i stron internetowych.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}