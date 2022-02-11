import React from "react";

export default function TextAndImg(props) {
  return (
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              {props.content}
              {/* <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div> */}
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center aos-init aos-animate"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src={props.img.src}
              className="img-fluid"
              alt={props.img.alt}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
