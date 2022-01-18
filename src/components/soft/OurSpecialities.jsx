import React from "react";

function Speciality({ img, title, text }) {
  return (
    <div class="col-lg-4">
      <div class="post-box">
        <div class="post-img">
          <img src={img.src} class="img-fluid" alt={img.alt}></img>
        </div>
        <h3 class="post-title">{title}</h3>
        <span class="post-date">{text}</span>
      </div>
    </div>
  );
}

export default function OurSpecialities() {
  return (
    <section id="recent-blog-posts" class="recent-blog-posts">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h3>Specjalizacje</h3>
          <p>Nasze specjalizacje</p>
        </header>
        <div class="row justify-content-center text-center">
          <Speciality
            img={{ src: "https://picsum.photos/id/1/200/300", alt: "Przemysł" }}
            title="Przemysł"
            text=""
          ></Speciality>
          <Speciality
            img={{
              src: "https://picsum.photos/id/1/200/300",
              alt: "Budownictwo",
            }}
            title="Budownictwo"
            text=""
          ></Speciality>
          <Speciality
            img={{
              src: "https://picsum.photos/id/1/200/300",
              alt: "Firmy transportowe",
            }}
            title="Firmy transportowe"
            text=""
          ></Speciality>
        </div>
        <div class="row justify-content-center text-center">
          <Speciality
            img={{
              src: "https://picsum.photos/id/1/200/300",
              alt: "Software Development",
            }}
            title="Software Development"
            text=""
          ></Speciality>
          <Speciality
            img={{
              src: "https://picsum.photos/id/1/200/300",
              alt: "Firmy podatkowo-księgowe",
            }}
            title="Firmy podatkowo-księgowe"
            text=""
          ></Speciality>
          <Speciality
            img={{
              src: "https://picsum.photos/id/1/200/300",
              alt: "Przedsiębiorstwa finansowe",
            }}
            title="Przedsiębiorstwa finansowe"
            text=""
          ></Speciality>
        </div>
      </div>
    </section>
  );
}
