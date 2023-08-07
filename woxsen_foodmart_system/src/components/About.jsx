import React from "react";
import "./about.css";
import arrowRight from "./arrow-up-right.svg";
import sushi1 from "./sushi-2.png";
import sushi2 from "./sushi-3.png";

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <img src={sushi2} alt="Sushi Image" />
        </div>
        <div className="about-us__image-sushi2">
          <img src={sushi1} alt="Sushi Image" />
        </div>
        
      </div>
      <div className="about-us__content">
        <h2 className="sushi__subtitle">About Us</h2>
        <h1 className="sushi__title">Our mission is to dont waste the food</h1>
        <p className="sushi__description">
          When it comes to choosing the food we desire, it's important to
          remember the significance of not wasting it. Our food choices should
          reflect our preferences, but they should also embody responsibility
          and mindfulness. Each morsel we consume represents valuable resources,
          including water, energy, and labor that go into producing it. By being
          selective and conscious about our food selection, we can ensure that
          we take only what we truly need. By embracing this mindset, we can
          enjoy our meals while also honoring the efforts made to bring
          nourishment to our plates. Let us choose wisely, relish each bite, and
          make a commitment to minimize food waste, for a more sustainable and
          equitable future.
        </p>
      </div>
    </section>
  );
};

export default About;
