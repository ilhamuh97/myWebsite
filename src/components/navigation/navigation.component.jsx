import React from 'react'
import './navigation.css'

const Navigation = ()=>(
    <nav className="col-sm-2 col-3" id="myScrollspy">
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <a className="nav-link" href="#section1">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section2">Studies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section3">Job Experiences</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#section4">Skills</a>
            </li>
        </ul>
    </nav>
);

export default Navigation;