import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import SectionHolder from "./components/sectionHolder/sectionholder";

function App() {
  return (
    <div
      className="row m-0"
      data-spy="scroll"
      data-target="#myScrollspy"
      data-offset="1"
    >
      <Navigation />
      <SectionHolder />
    </div>
  );
}

export default App;
