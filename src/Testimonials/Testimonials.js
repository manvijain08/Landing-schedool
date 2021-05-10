import React from "react";
import user from "../Images/user.png";
import star from "../Images/star.png";
import "./Testimonials.scss";
function Table ()
{
  return (
    <div>
        <div className="Testimonial">
        <div className="testi">Testimonials</div>
          <div className="thead">
             <h1>What people said</h1>
           </div>
        <div className="tpara">We help users scheduling & manage their life, goals, plan better and</div><br/>
       <div className="tpara2">easier than before. Here all good testimonials from active users.</div>
      </div>

   <div className="testicards">
      <div className="testcard1">
      <img className="user" src={user} alt="first" />
      <h4>Eugene christ</h4>
      <div className="date">
        15/feb/2020
      </div>
      <div className="s1">
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      </div>
      <div className="starp">
        is and the implicity and it support dark <br/>
        so, always using this for my timetable. Very <br/>
        ended! I love this app, been using it since i <br/>
       <div className="lastline"> first got into the college!</div>
      </div>
      </div>

      <div className="testcard2">
      <img className="user" src={user} alt="first" />
      <h4>Eugene christ</h4>
      <div className="date">
        15/feb/2020
      </div>
      <div className="s1">
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      </div>
      <div className="starp">
        is and the implicity and it support dark <br/>
        so, always using this for my timetable. Very <br/>
       ended! I love this app, been using it since i <br/> 
       <div className="lastline">first got into the college! </div>
      </div>
      </div>

      <div className="testcard3">
      <img className="user" src={user} alt="first" />
      <h4>Eugene christ</h4>
      <div className="date">
        15/feb/2020
      </div>
      <div className="s1">
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      <img className="s" src={star} alt="first" />
      </div>
      <div className="starp">
        is and the implicity and it support dark <br/>
        so, always using this for my timetable. Very <br/>
        ended! I love this app, been using it since i <br/>
        <div className="lastline"> first got into the college!</div>
      </div>
      </div>
    </div>
    </div>
  );
}
export default Table;