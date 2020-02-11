import React from "react";

import { ReactComponent as Wave } from "../../assets/eduWave.svg";
import ScrollAnimation from "react-animate-on-scroll";

const JobExperience = () => {
  return (
    <div>
      <div id="section4" className="bg-light section">
        <ScrollAnimation animateIn="fadeIn" className="info">
          <h1 className="title">Praktikum</h1>
          <p className="subtitle">B01- Büro für Mediensoftware</p>
        </ScrollAnimation>
        <Wave />
      </div>
    </div>
  );
};

/*TODO:
 * seeking for ideas
 */

export default JobExperience;
