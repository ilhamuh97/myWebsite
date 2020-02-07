import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import Navigation from './components/navigation/navigation.component'
import SectionHolder from './components/sectionHolder/sectionholder.component'

function App() {
  return (
    <div className="row" data-spy="scroll" data-target="#myScrollspy"  data-offset="1">
      <Navigation/>
      <SectionHolder/>
    </div>
  );
}

export default App;
