/*TODO:
 * Make a welcome section
 * Slide or fade Photo
 */
import React from "react";
import { ReactComponent as Wave } from "../../assets/bioWave.svg";

import "./welcome.css";
import PhotoProfile from "../../assets/photoProfile.jpeg";

const Welcome = () => {
  return (
    <div id="section1" className="bg-light section">
      <div className="row h-50 m-0 align-items-center">
        <div className="col-4">
          <img
            src={PhotoProfile}
            className="mt-2 mb-5 circle responsive img-thumbnail rounded-circle ava"
          ></img>
        </div>
        <div className="col-7">
          <h1>Hi There!</h1>
          <p className="font-weight-bold display-3 welcome-text">
            I'm <span className="text-warning">Ilham Muhammad</span>
          </p>
          <h3>A Student of HTW Berlin</h3>
        </div>
      </div>

      <Wave />
    </div>
  );
};

/*TODO:
 * create a table for biodata
 * for example:
Name:Ilham Muhammad
Date of birth:June 06, 1997
Address:Sewanstr 213, 10319 Berlin
Zip code:10319
Email:ilhamuh97@gmail.com
Phone:+49 179 2851 483
*/

export default Welcome;
