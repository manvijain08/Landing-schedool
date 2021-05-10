import React from "react";
import "./List.scss";
import party from "../Images/party.png";
import scart from "../Images/scart.png";
import love from "../Images/love.png";
import cool from "../Images/cool.png";
function Fourthapp ()
{
  return (
    <div>
        <div className="List">
        <div className="price">PRICE LIST</div>
          <div className="price-head">
             <h1>Choose your pocket</h1>
           </div>
        <div className="fpara">Special features created just for you.With our features,you can manage </div><br/>
       <div className="fpara2"> your plan and task better and faster than using other app.</div>
      </div>

     <div className="lcards"> 
      <div className="lcard1">
        <div class="head3">
        <h3>Basic</h3>
        <img  className="party" src={party} alt="first" /> 
        <div className="dollar">
        <span>&#36;</span><b> 19 </b> 
        <div className="mo">/Mo</div>
        </div> </div>
        <div className="plist1">
          100plans access <br/>
            progress bar on <br/>
          schedule features <br/>
          notification on <br/> </div>
          <div className="acc"> community access <br/> 
          all file support
        </div>
        <button className="lbtn">
        <img className="shopping" src={scart} alt="first" />
        Purchase now</button>
      </div>

      <div className="lcard2">
      <div class="head4">
        <h3>Pro</h3>
        <img className="love" src={love} alt="first" />
        <div>
        <div className="dollar">
        <b> $49</b>
         <div className="mo">/Mo</div>
        </div>  </div>  
        </div>
        <div className="plist1">
          100plans access <br/>
          progress bar on <br/>
          schedule features <br/>
          notification on <br/>
          community access <br/> 
          <div className="acc">all file support</div>
        </div>
        <button className="lbtn">
        <img className="shopping" src={scart} alt="first" />
        Purchase now</button>
      </div>

      <div className="lcard3">
      <div class="head5">
        <h3>Unlimited</h3>
        <img className="cool" src={cool} alt="first" />
        <div>
        <div className="dollar">
        <b>$99</b>
         <div className="mo">/Mo</div>
        </div>
        </div>
        <div className="plist1">
          100plans access <br/>
          progress bar on <br/>
          schedule features <br/>
          notification on <br/>
          community access <br/> 
          all file support
        </div>
        <button className="lbtn">
        <img className="shopping" src={scart} alt="first" />
        Purchase now</button>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Fourthapp;