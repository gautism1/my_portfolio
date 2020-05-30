import React from 'react';
import './skills.css';
import callSvg from './images/contact.svg';
function Contact() {
  return (
    <div>
      <div className="skil_main">
        <div className="skill">
          <div className="skill_list">
            <h1>Please feel free to ping me  </h1>
            <div className="skillCard">
              <code><b>New Youtube channel</b> :  Recently created youtube channel to educate Bootstrap to begineers in Hindi
              <a className="contact-link" href="https://www.youtube.com/channel/UCXsAeW2EOm-1RN3WeyxCVFA?view_as=subscriber" target="_blank">
                  Subscribe Here
              </a></code>
            </div>
            <div className="skillCard">
              <code><b>Linkedin </b>:  <a href=" https://www.linkedin.com/in/vipin-gautam-b95531186/" traget="_blank">
              </a></code>
            </div>
            <div className="skillCard">
              <code><b>Github </b>  : <a href="https://github.com/gautism1">
              </a></code>
            </div>
            <div className="skillCard">
              <code><b>Mail Me Here  </b>:  </code>
            </div>
          </div>

          <div className="skill_logo">
            <img src={callSvg} className="" alt="skilldemo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
