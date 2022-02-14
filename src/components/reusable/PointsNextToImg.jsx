import React from "react";

function Point(props) {
  return (
    <>
      <div
        className="col-md-6 icon-box aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={props.idx * 100}
      >
        <i className={props.point.icon}></i>
        <div>
          <h4>{props.point.h4}</h4>
          <p>{props.point.p}</p>
        </div>
      </div>
    </>
  );
}

export default function PointsNextToImg(props) {
  return (
    <div className="container" rcomponent="reusable/PointsNextToImg.jsx">
      <div
        className="row feature-icons aos-init aos-animate"
        data-aos="fade-up"
      >
        <header className="section-header">
          <h2>{props.title}</h2>
        </header>

        <div className="row">
          <div
            className="col-xl-4 text-center aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={{ src: "" }}
              className="img-fluid p-4"
              alt={{ alt: "" }}
            ></img>
          </div>

          <div className="col-xl-8 d-flex content">
            <div className="row align-self-center gy-4">
              {props.points.map((item, idx) => {
                return <Point key={idx} idx={idx} point={item}></Point>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
