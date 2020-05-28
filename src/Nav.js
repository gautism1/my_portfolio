import React from 'react';
import './App.css';
 import { NavLink } from 'react-router-dom';
function  Nav() {
  return (
    <div >
   
     <nav> 
        <ul className="ul-list"><span className="title">Gauti</span>
          <NavLink to="/" className="link"><li>Home </li></NavLink>
          <NavLink to="/Skills" className="link"><li>Skills   </li>  </NavLink>
          <NavLink to="/Projects" className="link"> <li>Projects</li></NavLink>
          <NavLink to="/Contact" className="link"> <li> Get in Touch/Hire me  </li></NavLink>
         
        </ul>
      </nav>
        
    </div>
  );
}

export default Nav;
