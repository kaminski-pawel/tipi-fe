import React from "react";
import imgVue from "../../../public/images/logos/vue.png";

function StackItem({ img, name, alt }) {
  return (
    <div className="col-4 col-sm-4 col-md-2">
      <img src={img} alt={alt} width="50" height="44" />
      <p>{name}</p>
    </div>
  );
}

export default function TechStack() {
  return (
    <>
      <section id="techstack" className="techstack d-flex align-items-center">
        <div className="container">
          <header class="section-header">
            <h2>Technologie, na których pracujemy</h2>
          </header>

          <div className="row w-75 mx-auto justify-content-center text-center">
            <StackItem img={imgVue} name="Python" alt="Python"></StackItem>
            <StackItem img={imgVue} name="Django" alt="Django"></StackItem>
            <StackItem img={imgVue} name="Selenium" alt="Selenium"></StackItem>
            <StackItem img={imgVue} name="Pandas" alt="Pandas"></StackItem>

            <StackItem
              img={imgVue}
              name="JavaScript"
              alt="JavaScript"
            ></StackItem>
            <StackItem img={imgVue} name="Vue" alt="Vue"></StackItem>
            <StackItem img={imgVue} name="React" alt="React"></StackItem>
            <StackItem img={imgVue} name="Webpack" alt="Webpack"></StackItem>

            <StackItem img={imgVue} name="AWS" alt="AWS"></StackItem>
            <StackItem img={imgVue} name="Docker" alt="Docker"></StackItem>
            <StackItem
              img={imgVue}
              name="PostgreSQL"
              alt="PostgreSQL"
            ></StackItem>
            <StackItem img={imgVue} name="VBA" alt="VBA"></StackItem>

            <StackItem img={imgVue} name="D3" alt="D3"></StackItem>
            <StackItem img={imgVue} name="Chart.js" alt="Chart.js"></StackItem>
          </div>
        </div>
      </section>
    </>
  );
}
