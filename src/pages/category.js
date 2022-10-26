import React from "react";
import Navbar from "../Component/UI/Layout/navbar";
 
function Category(){
    return(
        <div className="c-container">
        <div className="title">
            <h1>Categorys</h1>
        </div>
        <div className="card">
        <div className="card-box">
            <div className="img-3"></div>
            <div className="name">Ux/Ui Designer</div>
            <div className="detail-2"><p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet, </p></div>
        </div>
        <div className="card-box">
            <div className="img-4"></div>
            <div className="name">Frontend Development</div>
            <div className="detail-2"><p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet,</p></div>
        </div>
        <div className="card-box">
            <div className="img-5"></div>
            <div className="name">Backend Development</div>
            <div className="detail-2"><p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>Lorem ipsum dolor sit amet, </p></div>
        </div>
        </div>
        </div>
    );
}
export default Category;