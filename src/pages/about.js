import React from "react";
import Navbar from "../Component/UI/Layout/navbar";
function About(){
    return(
        <div className="c-container">
            <div className="title">
            <h1>About us</h1>
            </div>
        <div className="c-box">
               <h1>Developer</h1>
               <p>Villupuram Glug Volunteer</p>
            <div className="c-img">
            </div>
            <div className="content">
                <div className="insta"></div>
                <div className="twiter"></div>
                <div className="service"></div>
                <div className="email"></div>
            </div>
        </div>
        </div>
    );
}
export default About;