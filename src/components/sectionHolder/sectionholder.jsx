import React, { Component } from "react";

import sectionData from "./sectionData";

import "animate.css/animate.min.css";

import Biodata from "../biodata/Biodata";
import Welcome from "../welcome/Welcome";
import Education from "../education/Education";
import JobExperience from "../jobExperience/JobExperience";
import "../../assets/section.css";

class SectionHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: sectionData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="col-sm-10 col-9 p-0">
        <Welcome />
        <Biodata />
        <Education />
        <JobExperience />
      </div>
    );
  }
}

export default SectionHolder;
