import React from 'react';
import './skills.css';
import callSvg from './images/contact.svg';
import details from './details';
function Contact() {
  const { contact } = details;
  const { socialProfiles } = contact;
  return (
    <div>
      <div>
        <div className="skill">
          <div className="skill_list">
          <h3 className="Number"> Contact no. 9520437027</h3> 
            <h1>{contact.message} </h1>
            {                                              //mak:ing an array to iterate over the contact info
              socialProfiles.map((profile , index) => (
                <div className="skillCard" key={index}>
                  <code><b>{profile.name} </b>: {profile.subHeading} &nbsp;
                   <a className="contact-link" href= {profile.callToActionLink} target="_blank" rel="noopener noreferrer">
                    {profile.callToActionText} </a> </code>
                </div>
              ))
              
            }
            <br></br>
            <hr>
            </hr>
           
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
