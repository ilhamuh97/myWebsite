import React from "react";

import { ReactComponent as Wave } from "../../assets/eduWave.svg";
import ScrollAnimation from "react-animate-on-scroll";

const Education = () => {
  return (
    <div id="section3" className="bg-light section">
      <ScrollAnimation animateIn="fadeIn" className="info">
        <h1 className="title">HTW Berlin</h1>
        <p className="subtitle">Internationaler Studiengang Medieninformatik</p>
      </ScrollAnimation>
      <Wave />
    </div>
  );
};

/*TODO:
 * create a grid bar for Education
 * hover over bar
 */

export default Education;
