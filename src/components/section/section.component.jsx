import React from 'react'

import './section.css'

const Section = ()=>(
    <div>
        <div id="section1" className="bg-danger section">    
            <h1>About Me</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
        </div>
        <div id="section2" className="bg-light section">    
            <h1>Studies</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
        </div>
        <div id="section3" className="bg-warning section">    
            <h1>Job Experiences</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
        </div>
        <div id="section4" className="bg-dark section">    
            <h1>Skills</h1>
            <p>Try to scroll this section and look at the navigation list while scrolling!</p>
        </div>
    </div>
   
);

export default Section