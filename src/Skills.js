import React from 'react';
import './skills.css';
import skilly from './images/skills.svg';
function Skills() {
  return (
    <div>
      <div className="skil_main">
        <div className="skill">
          <div className="skill_list">
            <h1>Skills & Tools </h1>
            <div className="skillCard">
              <code><b>Backend</b> : NodeJs &   Express</code>
            </div>
            <div className="skillCard">
              <code><b>Frontend </b>: ReactJS , Bootstrap , HTML , CSS , JavaScript</code>
            </div>
            <div className="skillCard">
              <code><b>Competitive Programming</b>  : C++</code>
            </div>
            <div className="skillCard">
              <code><b>Tools </b>: Visual Studio Code  , Git</code>
            </div>
            <div className="skillCard">
              <code><b>Favourite Subject</b> : Operating Systems</code>
            </div>
          </div>



          <div className="skill_logo">
            <img src={skilly} className="" alt="skilldemo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
