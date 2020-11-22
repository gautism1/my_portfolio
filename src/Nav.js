import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import daySvg from './images/sun.svg';
import nightSvg from './images/night.svg';
import details from './details';
function Nav(props) {
  const { navBar } = details;
  const { navBarLinks } = navBar;
  return (
    <div>
      <nav className={props.darkMode ? "hamb dark-mode" : "hamb light-mode"} >
        <ul className="ul-list">
          <span className="title"><b>{navBar.name}</b></span>
          {
          navBarLinks.map((link,index) => (
            <NavLink key={index} exact to={link.to} className="link" activeClassName="active" >{link.name}</NavLink>
          ))
          }
          <span className="link" >
            <li onClick={() => props.setDarkMode(darkMode => !darkMode)}>
              <img className="dark-mode-img" src={props.darkMode ? nightSvg : daySvg} alt=""/>
            </li></span>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
