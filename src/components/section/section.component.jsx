import React from 'react'

import './section.css'

const Section = ({id, paragraph, title, bg})=>(
        <div id={id} className={`${bg} section`}>    
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
   
);

export default Section