import React from "react";
import "./Hero.scss";
import logotwo from "../Images/logotwo.png";
import fhero from "../Images/fhero.png";
import button from "../button";
function Hero ()
{
  return (
  <div className="hero">
    <div className="navbar">
      <h1>LOGO</h1>
      <div className="navelements">
        <div className="navele">Home</div>
        <div className="navele">Features</div>
        <div className="navele">Pricing</div>
        <div className="navele">Contact</div>
      </div>
      <button className="primary">Get Started</button>
    </div>

    <div className="started">
      <div>
      <div className="headhero"> <b>Schedule <br/>
      your success <br/>
      plan now! </b>
      </div>
      <div className="phero">Enjoy the best experience when Scheduling <br/>
      Your plan and get your awesome result.</div>
        <button className="btnpri">Get Started</button>
       <p className="phero1">Powered by: </p>
       <div className="threev">
      <img className="l1" src={logotwo} alt="xyz" />
      <img className="l2" src={logotwo} alt="xyz" />
      <img className="l3" src={logotwo} alt="xyz" />
      </div>
      </div>
        <img className="first" src={fhero} alt="first" />;
    </div>
  </div>
  );
}
export default Hero;
