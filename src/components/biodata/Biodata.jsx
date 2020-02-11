import React from "react";
import { ReactComponent as Wave } from "../../assets/bioWave.svg";

import ScrollAnimation from "react-animate-on-scroll";
import PhotoProfile from "../../assets/photoProfile.jpeg";
import "./biodata.css";

const Biodata = () => {
  return (
    <div id="section2" className="bg-primary section biodata">
      <ScrollAnimation animateIn="fadeIn">
        <div animateIn="fadeIn" className="row pt-5 pb-3 m-0">
          <div className="bg- col-12">
            <h2 className="title font-weight-bold">ABOUT ME</h2>
          </div>
        </div>
        <div animateIn="fadeIn">
          <img
            src={PhotoProfile}
            className="mt-2 mb-5 circle responsive img-thumbnail rounded-circle ava"
          ></img>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <div className="row my-2 mx-0">
          <div className="col-3" />
          <div className="col-3 font-weight-bold">Name:</div>
          <div className="col-3">Ilham Muhammad</div>
          <div className="col-3" />
        </div>
        <div className="row my-2 mx-0">
          <div className="bg- col-3" />
          <div className="col-3 font-weight-bold">Date of Birth:</div>
          <div className="col-3">June 06, 1997</div>
          <div className="col-3" />
        </div>
        <div className="row my-2 mx-0">
          <div className="bg- col-3" />
          <div className="col-3 font-weight-bold">Address:</div>
          <div className="col-3">Sewanstr. 213, 10319 Berlin Germany</div>
          <div className="col-3" />
        </div>
        <div className="row my-2 mx-0">
          <div className="bg- col-3" />
          <div className="col-3 font-weight-bold">Phone:</div>
          <div className="col-3">+49 179 2851 483</div>
          <div className="col-3" />
        </div>
        <div className="row my-2 mx-0">
          <div className="bg- col-3" />
          <div className="col-3 font-weight-bold">Email:</div>
          <div className="col-3">ilhamuh97@gmail.com</div>
          <div className="col-3" />
        </div>
      </ScrollAnimation>

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
