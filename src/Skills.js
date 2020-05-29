import React from 'react'; 
import './skills.css';
import html from './images/html.jpg';
import skilly from './images/skills.svg';
import csss from './images/csss.png';
import js from './images/js.png';
import react from './images/react.png';
import node from './images/node.jpg';
import mysql from './images/mysql.png';
import exp from './images/exp.png';
import ds from './images/ds.jpg';
import c from './images/download.png';
import algo from './images/algo.jpg';
import boot from './images/boot.png'
import git from './images/github.gif';
function Skills() {
  return (
    <div>
    <h2>      <u> These are some of the technical skills i have:</u> </h2>
    <div className="skil_main">
    <div className="skill">
             <div className="skill_list">
             <br></br>
                  <div className="items" >
                       <img src={c}  className="dds"alt="asd"></img>
                      </div>
                      <div className="items" >
                       <img src={algo}  className="dds"alt="asd"></img>
                      </div>
                       
                      <div className="items" >
                          <img src={csss}  className="dds"alt="asd"></img>
                          </div>
                         
                      <div className="items" >
                          <img src={html}  className="dds"alt="asd"></img>
                          </div>
                        <div className="items" >
                            <img src={js}  className="dds"alt="asd"></img>
                        </div>
                      <div className="items" >
                          <img src={react}  className="react"alt="asd"></img>
                      </div> 
                      <div className="items" >
                       <img src={exp}  className="exp"alt="asd"></img>
                      </div>
                        <div className="items" >
                       <img src={node}  className="exp"alt="asd"></img>
                      </div>
                        <div className="items" >
                       <img src={mysql}  className="dds"alt="asd"></img>
                      </div>
                        <div className="items" >
                       <img src={boot}  className="dds"alt=""></img>
                      </div>
                        <div className="items" >
                       <img src={git}  className="dds"alt="asd"></img>
                      </div>
             </div>      
             <div className="skill_logo"> 
             <img src={skilly}  className="logo" alt="skilldemo"></img>
             </div>
    </div>
    </div>
    </div>
  );
}

export default Skills;
