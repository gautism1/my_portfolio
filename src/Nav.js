import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import daySvg from './images/sun.svg';
import nightSvg from './images/night.svg';
function Nav(props) {
  return (
    <div>
      <nav className={props.darkMode ? "hamb dark-mode" : "hamb light-mode"} >
        <ul className="ul-list">
          <span className="title">
            <b>Vipin Gautam</b>
          </span>
          <Link to="/" className="link"><li>Home </li></Link>
          <Link to="/Skills" className="link"><li>Skills   </li>  </Link>
          <Link to="/Projects" className="link"> <li>Projects</li></Link>
          <Link to="/Contact" className="link"> <li> Contact </li></Link>
          <a className="link"> <li onClick={() => props.setDarkMode(prevMode => !prevMode)}><img className="dark-mode-img" src={props.darkMode  ? nightSvg :  daySvg}/> </li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
