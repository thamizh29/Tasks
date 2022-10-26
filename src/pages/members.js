import React from "react";
import Navbar from "../Component/UI/Layout/navbar";
import './member.css'
 
function Members(){
    return(
        <div className="m-container">
        <div className="title">
            <h1>Team Members</h1>
        </div>
        <div className="card">
        <div className="card-box">
            <div className="img"></div>
            <div className="name">Jeni</div>
            <div className="detail">Ux/Ui Designer</div>
        </div>
        <div className="card-box">
            <div className="img-1"></div>
            <div className="name">Jasmin</div>
            <div className="detail">Frontend Developer</div>
        </div>
        <div className="card-box">
            <div className="img-2"></div>
            <div className="name">Jiya</div>
            <div className="detail">Backend Developer</div>
        </div>
        </div>
        </div>

    );
}
export default Members;