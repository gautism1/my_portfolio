import React from 'react';
import './App.css';
import laptop from './images/laptop.svg';
import details from './details';
function HeroHeader() {
  const { home } = details;
  return (
    <div className="cas">
      <div className="tagline">
        <div className="intro">
          <span className="hi-hand img1" ></span>
          <h1><code>Hello!<span className="hi-hand img1" role="img"><span>👋 </span></span>World</code></h1>
          <h2><code>
            I am  {home.name}
            {home.title} </code>
          </h2>
          <p><code>{home.subHeading}</code></p>
          <div>
            <hr></hr>
        
         
        <a href="https://hashnode.com/@gauti" target="_blank" className="hashnode"><h3>Hashnode Profile / Blog</h3> </a>
        </div>
        </div>
       
      </div>
      <div className="photo">
        <img className="log" src={laptop} alt="connectingpeople"/>
      </div>
    </div>
  );
}
export default HeroHeader;
