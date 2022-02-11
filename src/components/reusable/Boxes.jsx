import React from "react";

function BoxItem({ img, title, text }) {
  return (
    <div
      className="col-lg-4 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="box">
        <img src={img.src} alt={img.alt} className="img-fluid" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default function Boxes(props) {
  return (
    <section
      id="how-can-we-help"
      className="reusable-boxes d-flex align-items-center"
    >
      <div className="container">
        <header className="section-header">
          <h2>{props.title}</h2>
        </header>

        <div className="row">
          {props.boxes.map((item, idx) => {
            return (
              <BoxItem
                key={idx}
                img={item.img}
                title={item.title}
                text={item.text}
              ></BoxItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}