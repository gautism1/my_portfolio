import React from 'react';
import './skills.css';
function Projects() {
  return (
    <div>
      <div className="skil_main">
        <div className="skill">
          <div className="projectList">
            <h1>Projects & Experiments </h1>
            <>
              <div className="projectCard">
                <code><b> My Portfolio </b> :Open Source Project
              <details>
                    <summary >Details</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                  </details>
                </code>
              </div>
              <div className="projectCard">
                <code><b>Localitee </b>: Weather Web App created ReactJS , Bootstrap , HTML , CSS , JavaScript
              <details>
                    <summary >Details</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                  </details></code>

              </div>
              <div className="projectCard">
                <code>
                 <div> <span><b>YouD App</b>: ReactJS , Bootstrap , HTML , CSS , JavaScript </span>  </div>
                <details>
                    <summary >Details</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                  </details></code>
              </div>
              <div className="projectCard">
                <code><b>Calci </b>: Hub of Indian Financial Calculators 
              <details>
                    <summary >Details</summary>
                    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                  </details></code>

              </div>
            </>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
