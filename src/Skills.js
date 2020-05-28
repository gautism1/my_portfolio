import React from 'react'; 
import './skills.css';
import html from './html.jpg';
import skilly from './skills.svg';
import csss from './csss.png';
import js from './js.png';
import react from './react.png';
import node from './node.jpg';
import mysql from './mysql.png';
import exp from './exp.png';
import ds from './ds.jpg';
import c from './download.png';
import algo from './algo.jpg';
import boot from './boot.png'
import git from './github.gif';
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
