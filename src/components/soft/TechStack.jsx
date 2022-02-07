import React from "react";
import imgAws from "../../../public/images/logos/aws.svg";
import imgChartjs from "../../../public/images/logos/chartjs.svg";
import imgD3 from "../../../public/images/logos/d3.svg";
import imgDjango from "../../../public/images/logos/django.svg";
import imgDocker from "../../../public/images/logos/docker.svg";
import imgJavascript from "../../../public/images/logos/javascript.svg";
import imgPandas from "../../../public/images/logos/pandas.svg";
import imgPostgresql from "../../../public/images/logos/postgresql.svg";
import imgPython from "../../../public/images/logos/python.svg";
import imgReact from "../../../public/images/logos/react.svg";
import imgSelenium from "../../../public/images/logos/selenium.svg";
import imgVue from "../../../public/images/logos/vue.svg";
import imgWebpack from "../../../public/images/logos/webpack.svg";

function StackItem({ img, name, alt }) {
  return (
    <div className="col-4 col-sm-4 col-md-3 d-inline-block tech-box">
      <img src={img} alt={alt} width="50" height="44" />
      <div className="tech-name">{name}</div>
    </div>
  );
}

export default function TechStack() {
  return (
    <>
      <section id="techstack" className="techstack d-flex align-items-center">
        <div className="container">

          <div className="row">

          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h2><span className="blue-span">Technologie</span>, na których pracujemy</h2>
          </div>


            <div className="col-lg-7 d-inline-block flex-column justify-content-center text-center grey-box">
            <StackItem img={imgPython} name="Python" alt="Python"></StackItem>
            <StackItem img={imgDjango} name="Django" alt="Django"></StackItem>
            <StackItem img={imgSelenium} name="Selenium" alt="Selenium"></StackItem>
            <StackItem img={imgPandas} name="Pandas" alt="Pandas"></StackItem>

            <StackItem
              img={imgJavascript}
              name="JavaScript"
              alt="JavaScript"
            ></StackItem>
            <StackItem img={imgVue} name="Vue" alt="Vue"></StackItem>
            <StackItem img={imgReact} name="React" alt="React"></StackItem>
            <StackItem img={imgWebpack} name="Webpack" alt="Webpack"></StackItem>

            <StackItem img={imgAws} name="AWS" alt="AWS"></StackItem>
            <StackItem img={imgDocker} name="Docker" alt="Docker"></StackItem>
            <StackItem
              img={imgPostgresql}
              name="PostgreSQL"
              alt="PostgreSQL"
            ></StackItem>
            <StackItem img={imgVue} name="VBA" alt="VBA"></StackItem>

            <StackItem img={imgD3} name="D3" alt="D3"></StackItem>
            <StackItem img={imgChartjs} name="Chart.js" alt="Chart.js"></StackItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
