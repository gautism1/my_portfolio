import React from 'react';
import './App.css';
 import logo from './logo.png';
 import logo2 from './logo2.png';
 import logo3 from './calci.png';
 import { Link } from 'react-router-dom';
function  Projects() {
  return (
    <div  >
    
       <div className="project_front"> 
       <div className="item">  
       
       <img  className="youd" src={logo} alt="youdapp"></img>
       </div>
       <div className="item">  
       <img  className="local" src={logo2} alt="localite"></img></div>
       <div className="item">   <img  className="calci" src={logo3} alt="calculator"></img></div>
       </div>
     
    </div>
  );
}

export default Projects;
