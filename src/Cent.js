import React from 'react';
 import img from './images/exercise.svg';
import './App.css';
 import laptop from './images/laptop.svg';
 import emo from './images/emo.jpg';
function Cent() {
  return (
    <div className="cas">
      <div className="tagline">
             <div className="intro"> 
                <span className="hi-hand img1" >👋</span>
                
                <h4>Hey! Technocrates</h4> <h2>
                My name is Vipin,Enthusiastic youtuber , <br></br>free-lancer Full stack developer,</h2>
                
              <b> <p>I am quick learner of different technologies<br></br>
               and good technical skills in field of Web and programming</p></b>
             </div>
      </div>      
         <div className="photo"> 
               <img  className="log"  src={laptop} alt="connectingpeople"></img>
         </div>      
    </div>
  );
}

export default Cent;
