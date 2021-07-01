import React from "react";

const Contact = () => {
  return (
    <>
      <h1 id="contact">Zapraszam do kontaktu</h1>
      <h2>Dane kontaktowe</h2>
      <p>
        {/* <span class="fa fa-envelope"></span> */}
        <a href="mailto:pawelkaminski@tipi.software">
          pawelkaminski@tipi.software
        </a>
      </p>
      <p>
        {/* <span class="fa fa-phone"></span> */}
        662 764 523
      </p>
      <p>
        {/* <span class="fa fa-github"></span> */}
        <a href="https://github.com/kaminski-pawel">kaminski-pawel</a>
        (co do zasady pracuję na BitBucket, na GitHub znajdują się niektóre
        projekty szkoleniowe)
      </p>
    </>
  );
};

export default Contact;
