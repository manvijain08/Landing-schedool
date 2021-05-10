import React from "react";
import "./Footer.scss";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
function Footer ()
{
  return (
    <div className="Footer-first">
        <div className="foobox">
          <h2 className="foohead">Download schedool app now <br/>
          and enjoy our best features!</h2>
        </div>

        <div className="Footer">
          <div className="foo1">
            <h3>LOGO</h3>
            <div className="foopara">
              128 market st. <br/>
              20193 san fransisco <br/>
              california suite #201
            </div>
          </div>

          <div className="foo2">
            <h5>Company</h5>
            <div className="foopara1">
              <div className="about">About</div> <br/>
              <div className="about"> Contact Us </div><br/>
              <div className="about">Support</div>  <br/>
              <div className="about">Careers </div><br/>
            </div>
          </div>

          <div className="foo3">
            <h5>Quick Link</h5>
            <div className="foopara2">
              <div className="share"> Share Location</div> <br/>
              <div className="share"> Orders Tracking</div><br/>
              <div className="share"> Size Guide </div>  <br/>
              <div className="share">FAQs</div><br/>
            </div>
          </div>

          <div className="foo4">
            <h5>Legal</h5>
            <div className="foopara3">
              <div className="Terms">   Terms & conditions</div> <br/>
              <div className="Terms"> Privacy policy </div><br/>
              <div className="social">
                <img className="facebook" src={facebook} alt="first" />
                <img className="facebook" src={instagram} alt="first" />
                <img className="facebook" src={twitter} alt="first" />
                <img className="facebook" src={linkedin} alt="first" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Footer;