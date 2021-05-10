import React from "react";
import tone from "../Images/tone.png";
import ttwo from "../Images/ttwo.png";
import tthird from "../Images/tthird.png";
import verified from "../Images/verified.png";
import "./Third.scss";
function Third ()
{
  return (
    <div>
      <div className="Third-first">
        <img src={tone} alt="first" />
        <div className="third_subcont">
          <h1>Create daily activity <br/>
          with your phone, and <br/>
          organize it easily.
          </h1>
          <div className="tfcon">Our feature help you to organize every task  <br/> </div>
         <div className="tfcon1"> plan only with drag and drop your card easily.</div>
          <div className ="i1">
            <img className= "ver1" src={verified} alt="first" />
            <p>add task and plan by drag and drop</p>
          </div>

          <div className ="i1">
            <img className= "ver1" src={verified} alt="first" />
            <p>Coloring your plan to make it special.</p>
          </div>

          <div className =" i1">
            <img className="ver1" src={verified} alt="first" />
            <p>Edit plan preview to get good view.</p>
          </div>
        </div>
      </div>   

      <div className="Third-second">
        <div className="third_subcont">
          <h1>Drag and drop <br/>
          feature that give us <br/>
          best experience.</h1>
          <div className="tscon">No need to worry about how to useit! You can </div>
          <div className="tscon1"> easily drag and drop it like playing a game.</div>

          <div className ="icon-3">
              <img className="i2" src={verified} alt="first" />
              <p>add task and plan by drag and drop</p>
            </div>

            <div className ="icon-3">
              <img className="i2" src={verified} alt="first" />
              <p>Coloring your plan to make it special.</p>
            </div>

            <div className ="icon-3">
              <img className="i2" src={verified} alt="first" />
              <p>Edit plan preview to get good view.</p>
            </div>
        </div>
        <img src={ttwo} alt="first" />
      </div>

      <div className="Third-third">
        <img src={tthird} alt="first" />
        <div className="third_subcont">
          <h1>Scheduling your <br/>
          calendar and check<br/>
          your progress plan. <br/>
          </h1>
          <div className="ttcon"> We help user to get best result while using <br/> </div>
          <div className="ttcon1"> schedool.This feature created special for you.</div>
          <div className ="i3">
            <img className="t-one" src={verified} alt="first" />
            <p>Easy to organize your plan</p>
          </div>

          <div className ="i3">
            <img className="t-one" src={verified} alt="first" />
            <p>Progress bar update every second</p>
          </div>

          <div className ="i3">
            <img className="t-one" src={verified} alt="first" />
            <p>Category plan make us easier</p>
          </div>
        </div>
      </div> 
    </div>
  );
}
export default Third;