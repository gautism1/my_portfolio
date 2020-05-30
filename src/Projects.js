import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import logo3 from './images/calci.png';

function Projects() {
  return (
    <div>
      <h2>  Have a look on some of my LIVE  projects including this one(my portfolio)</h2>
      <div className="project_front">
        <div className="item">
          <a href="http://youd.herokuapp.com/" alt="link of youd">
            <img className="youd" src={logo} alt="youdapp"></img>
          </a>
          <h4>  <u> <a href="http://youd.herokuapp.com/">Have a look on it</a>  </u></h4>
          <h3>Downloads Youtube videos using there link in Highest possible quality</h3>
        </div>
        <div className="item">
          <a href="http://localitee.herokuapp.com/" alt="link of localitee">
            <img className="local" src={logo2} alt="localite"></img>
          </a>
          <h4> <u>  <a href="http://localitee.herokuapp.com/">Have a look on it</a> </u></h4>
          <h3>Give weather conditions of any  city in the world</h3>
        </div>
        <div className="item">
          <a href="http://calculatorzone.herokuapp.com" alt="link of calciZone">
            <img className="calci" src={logo3} alt="calculator"></img>
          </a>
          <h4><u>  <a href="http://calculatorzone.herokuapp.com" alt="calcu">Have a look on it</a> </u></h4>
          <h3>Contains different types of daily used calculators</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;
