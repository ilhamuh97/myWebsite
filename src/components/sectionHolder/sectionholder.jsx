import React, { Component } from "react";

import sectionData from "./sectionData";

import Biodata from "../biodata/Biodata";
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
      <div className="col-sm-10 col-9 px-0">
        <Biodata />
        <Education />
        <JobExperience />
      </div>
    );
  }
}

export default SectionHolder;
