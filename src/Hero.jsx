import React from "react";
import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur
            temporibus eveniet veniam voluptatibus voluptate ducimus possimus praesentium
            aut quibusdam!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and a browser" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
