import React from 'react';
import './skills.css';
import details from './details';
function Projects() {
  const { projects } = details;
  const { projectDetails } = projects;
  return (
    <div>
      
      <div className="skil_main">
        <div className="skill">
          <div className="projectList">
            <h1> {projects.message} </h1>
            {
              projectDetails.map((project) => (
                <div className="projectCard">
                  <code><b> {project.name} </b> : {project.subHeading} &nbsp;
                    <a className="contact-link" href={project.livePreviewLink} target="_blank" rel="noopener noreferrer">
                      LIVE PREVIEW </a>
                    <details>
                      <summary >Details</summary>
                      <p>{project.details}</p></details>
                  </code>

                </div>

              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
