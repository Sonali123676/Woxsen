import React from "react";
import "./hero.css";
import playButton from "./play-circle.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        {/* <img 
          src=""
          alt="sushi"
          data-aos="fade-up"
        /> */}
        <h2 data-aos="fade-up">
          W<br />
          O <br />U
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Envirofeast: Fostering Sustainable Dining</h1>
          <p>but dont waste the food.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
