import React from "react";
import "./styles/About.css";
import businessData from "../config/business.json";

import {
  IoBedOutline,
  IoRestaurantOutline,
  IoLeafOutline,
  IoShieldCheckmarkOutline
} from "react-icons/io5";

const iconMap = {
  bed: <IoBedOutline />,
  restaurant: <IoRestaurantOutline />,
  leaf: <IoLeafOutline />,
  security: <IoShieldCheckmarkOutline />
};

function About() {
  const { about, business } = businessData;

  return (
    <section className="about" id="about">
      <div className="container">

        <figure className="about-banner">
          <img src={about.banner1} alt="About banner 1" />
          <img src={about.banner2} alt="About banner 2" className="abs-img" />
        </figure>

        <div className="about-content">

          <p
            className="section-subtitle"
            style={{ color: business.primaryColor }}
          >
            {about.subtitle}
          </p>

          <h1 className="section-title">
            {about.title}
          </h1>

          <p className="about-text">
            {about.description}
          </p>

          <ul className="about-list">
            {about.features.map((item, index) => (
              <li className="about-item" key={index}>
                <div
                  className="about-item-icon"
                  style={{ color: business.primaryColor }}
                >
                  {iconMap[item.icon]}
                </div>
                <p className="about-item-text">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <p className="callout">
            {about.callout}
          </p>

          <a
            href={about.buttonLink}
            className="btn"
            style={{ backgroundColor: business.primaryColor }}
          >
            {about.buttonText}
          </a>

        </div>
      </div>
    </section>
  );
}

export default About;
