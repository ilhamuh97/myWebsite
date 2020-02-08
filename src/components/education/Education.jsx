import React from "react";

import { ReactComponent as Wave } from "../../assets/eduWave.svg";

const Education = () => {
  return (
    <div id="section2" className="bg-primary section">
      <div className="info">
        <h1 className="title">HTW Berlin</h1>
        <p className="subtitle">Internationaler Studiengang Medieninformatik</p>
      </div>
      <Wave />
    </div>
  );
};

/*TODO:
 * create a grid bar for Education
 * hover over bar
 */

export default Education;
