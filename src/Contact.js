import React from 'react';
import './App.css';
import './cont.css';
import link from './images/linkdin.jpg';
import youtube from './images/youtube.png';
import git from './images/github.gif';
 import contact from './images/contact.svg'; 
 import mail from './images/mail.jpg';
  
function  Contact() {
  return (<div>
    <h2>  You can contact me through the following links</h2>
    <div className="cont">
     
    <div className="cont_link"> 

          <div className=" items cont_github">
            <a href="https://github.com/gautism1">
             <img src={git}   alt="github"></img>
             </a>
           </div>
          <div className=" items cont_linkdin">
            <a href=" https://www.linkedin.com/in/vipin-gautam-b95531186/"  traget="_blank">
               <img src={link}  alt="linkdin"></img>
           </a>
         </div>
           <div className=" items cont_youtube">
           <a href="https://www.youtube.com/channel/UCXsAeW2EOm-1RN3WeyxCVFA?view_as=subscriber" target="_blank">
                <img src={youtube}  alt="youtube"></img></a>
            </div>
            <div className=" items mail">
           <a href="mailto:vip2ingautaam.m@gmail.com" >
                <img src={mail}  alt="mail_info"></img></a>
        </div>
</div> 
         <div className="cont_icon">
         <img src={contact} className="cont_img" ></img></div>
    </div>
    </div>
  );
}

export default Contact;
