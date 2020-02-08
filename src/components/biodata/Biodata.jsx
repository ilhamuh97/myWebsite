import React from "react";
import { ReactComponent as Wave } from "../../assets/bioWave.svg";

import PhotoProfile from "../../assets/photoProfile.jpeg";
import "./biodata.css";

const Biodata = () => {
  return (
    <div id="section1" className="bg-light biodata">
      <div className="bio-info">
        <img src={PhotoProfile} className="avatar"></img>
        <h1 className="title">Ilham Muhammad</h1>
        <p className="subtitle">Student of HTW Berlin</p>
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

export default Biodata;
