import React, { Component } from "react";

import sectionData from "./sectionData";

import Section from "../section/section.component";

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
      <div className="col-sm-9 col-8 px-0">
        {collections.map(({ ...otherSecttionProps }) => (
          <Section {...otherSecttionProps} />
        ))}
      </div>
    );
  }
}

export default SectionHolder;
