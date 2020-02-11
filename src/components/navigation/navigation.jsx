import React from "react";
import "./navigation.css";
import { Navbar } from "reactstrap";

const Navigation = () => (
  <Navbar className="col-sm-2 col-3 bg-light nav" id="myScrollspy">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#section1">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section2">
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section3">
          Studies
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section4">
          Job Experiences
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section5">
          Skills
        </a>
      </li>
    </ul>
  </Navbar>
);

/*TODO:
 * set acitve to recognize location to user
 * animation
 */

export default Navigation;
