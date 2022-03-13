import React from "react";

function Point(props) {
  return (
    <>
      <div
        className="icon-box aos-init aos-animate"
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
  const leftColClassName = props.leftColClassName || "col-xl-4 text-center aos-init aos-animate";
  const rightColClassName = props.rightColClassName || "col-xl-8 d-flex content";
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
            className={leftColClassName}
            data-aos="fade-right"
            data-aos-delay="100"
          >



          <div className="blob-wrapper">

            <div className="blob-2">
                <svg width="400" height="400" viewBox="0 0 600 600"><linearGradient
      id="linear-gradient"
      gradientUnits="userSpaceOnUse"
      x1="1041.6901"
      y1="169.485"
      x2="1383.9301"
      y2="169.485"
      gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
  >
      <stop offset="5%" stopColor="#e7f4ff" />
      <stop offset="33%" stopColor="#d3ebff" />
      <stop offset="66%" stopColor="#7cc1ff" />
      <stop offset="85%" stopColor="#53a4ed" />
  </linearGradient><path d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z" fill="url(#linear-gradient)"/>   </svg>
                <div className="stack-top">

                <img
                  src={props.img.src}
                  className="img-fluid p-4"
                  alt={props.img.alt}
                ></img>

                </div>
              </div>
            </div>









          </div>

          <div className={rightColClassName}>
            <div className="row">
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
