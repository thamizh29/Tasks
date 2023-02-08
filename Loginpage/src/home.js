import React from "react";
import { NavLink } from "react-router-dom";
import './home-2.css';
function Home(){
    return(
        <div className="Home-container">
        <div className="top">
        <div className="logo"></div>
        <div className="u-btn">
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className="n-btn">
        <NavLink to="/signIn">Sign In</NavLink>
        </div>
        </div>
        <p className="c-1">TASAK</p>
        <p className="c-2">Hi Welcome!</p>
        <p className="c-3">This is the example SignIn and SignUp </p>
        <p className="c-3">page this is my task so I created</p>
        <p className="c-3"> This Webpage Use To Enjoy</p>
        <p className="c-3">Our Webpage</p>
        <div className="get">
        <NavLink to="/signup">Get Start</NavLink>
        </div>
        <div className="img-2"></div>
        </div>
    );
}
export default Home