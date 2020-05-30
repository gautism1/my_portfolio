import React from 'react';
import './App.css';
import laptop from './images/laptop.svg';
function HeroHeader() {
  return (
    <div className="cas">
      <div className="tagline">
        <div className="intro">
          <span className="hi-hand img1" ></span>
          <h1><code>Hey!<span className="hi-hand img1" >👋 </span> Technocrates</code></h1>
          <h2><code>
            I am  Vipin Gautam ,
            Enthusiastic youtuber </code>
            </h2>
          <p><code>I am quick learner of different technologies
            and good technical skills in field of Web and competitve programming</code></p>
        </div>
      </div>
      <div className="photo">
        <img className="log" src={laptop} alt="connectingpeople"></img>
      </div>
    </div>
  );
}
export default HeroHeader;
