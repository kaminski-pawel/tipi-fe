import React from "react";

export default function Hero(props) {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container w-75 mx-auto">
          <div className="row">

            <div className="col-lg-6 d-flex flex-column justify-content-center one">

              <h1 data-aos="fade-up">
                {props.title}
                {/* <span className="blue-span">Oprogramowanie</span> na zamówienie */}
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                {props.subtitle}
                {/* Specjalizujemy się w projektach heavy on data and analytics */}
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="#how-can-we-help"
                    className="btn-get-started scrollto d-inline-flex align-items-center
                               justify-content-center align-self-center"
                  >
                    <span>Dowiedz się więcej</span>
                    <i className="bi bi-arrow-down"></i>
                  </a>
                </div>
              </div>

            </div>
            <div
              className="col-lg-6 hero-img two"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
            <div className="blob-box">
              <div className="blob">
                <div className="gooey">
                </div>
              </div>
            </div>

              <div className="stack-top">
                <img src={props.heroImg} className="img-fluid hero-img" alt=""></img>
              </div>
            </div>


          </div>
        </div>







      </section>
    </>
  );
}
