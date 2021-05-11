import React from "react";
import "./Feature.scss";
import calendar from "../Images/calendar.svg";
function Card ()
{
  return (
    <div className="feature">
      <div className="feature-first">
        <div className="pink">FEATURES</div>
          <div className="feature-head">
             <h1>Our Core Feature</h1>
           </div>
        <div className="fpara">Special features created just for you.With our features,you can manage </div><br/>
       <div className="fpara2"> your plan and task better and faster than using other app.</div>
      </div>
      
      <div className="cards">
        <div className="card-1">
          <div className="box1">
          </div>
          <img className="cal" src={calendar} alt="first" />
          <h4>All format plan</h4>
          <div className="fepara">You can add or create some <br/>
          documents with all forma, and <br/>
          then organize it easily</div>
        </div>

        <div className="card-2">
          <div className="box2">
          </div>
          <img className="cal2" src={calendar} alt="first" />
          <h4>All format plan</h4>
          <div className="spara">Schedule your plan for daily, <br/>
          weekly or monthly after create <br/>
          your personal or team plan</div>
        </div>

        <div className="card-3">
          <div className="box3">
          </div> 
          <img className="cal3" src={calendar} alt="first" />
          <h4>All format plan</h4>
          <div className="ypara">See you progress plan and <br/>
          check your status to see how <br/>
          long your success progress.</div>
        </div>


        <div className="card-4">
          <div className="box4">
          </div>
          <img className="cal4" src={calendar} alt="first" />
          <h4>All format plan</h4>
          <div className="jpara">Join or create your community <br/>
          to get the support and<br/>
          friends to get motivation.</div>
        </div>
      </div>
    </div>
  );
}
export default Card;