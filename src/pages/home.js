import React from "react";
import Navbar from "../Component/UI/Layout/navbar";
import './home.css';
 //Home page
function Home(){
    return(
        
        <div className="container">
            {/* For contents */}
        <div className="container-1">
        <div className="title">
            <h1></h1>
            <h2>You can Hire</h2>
            <h2>freelancer team </h2>
            <h2>Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            <p> adipiscing elit. Lorem ipsum dolor sit amet,</p>
            <p> consectetur adipiscing elit.</p>
            <div className="buttons">
                <div className="btn">
                <div className="primary">
                    <div className="p1">View</div>
                  
                </div>
                </div>
                <div className="btn">
                <div className="secondary">
                <div className="s1">More</div>
                </div>
                </div>
            </div>
        </div>
        </div>
          {/* For image */}
        <div className="container-2">

        </div>
        </div>

    );
}
export default Home;