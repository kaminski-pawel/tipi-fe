import React from "react";
import heroImg from "../../../public/images/hero-img.png";

export default function Hero(props) {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container w-75 mx-auto">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
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
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={heroImg} className="img-fluid hero-img" alt=""></img>
            </div>
          </div>
        </div>
        <div className="hero-curve">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="hello-curve-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
