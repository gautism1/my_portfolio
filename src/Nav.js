import React from 'react';
import './App.css';
 import { Link } from 'react-router-dom';
function  Nav() {
  return (
    <div >
   
     <nav className="hamb"> 
        <ul className="ul-list"><span className="title"><b>Myportfolio</b></span>
          <Link to="/" className="link"><li>Home </li></Link>
          <Link to="/Skills" className="link"><li>Skills   </li>  </Link>
          <Link to="/Projects" className="link"> <li>Projects</li></Link>
          <Link to="/Contact" className="link"> <li> Contact/Hire_me  </li></Link>
        </ul>
      </nav>
      
        
    </div>
  );
}

export default Nav;
