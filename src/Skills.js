import React from 'react';
import './skills.css';
import skilly from './images/skills.svg';
import details from './details';
function Skills() {
  return (
    <div>
      <div className="skil_main">
        <div className="skill">
          <div className="skill_list">
            <h1>Skills & Tools </h1>
            {Object.keys(details.skills).map((key) => (
              <div className="skillCard">
                <code><b>{key} </b>: {details.skills[key]}</code>
              </div>
            ))
            }
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
