import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
function Navbar(){
    return(
        <div className="menu">
            <div className="icon">
                <p>reelancer</p>
            </div>
            <ul className="menu-list">
                <li className="menu-list-item">
        <NavLink to="/home">Home</NavLink>
        </li>
        <li className="menu-list-item">
        <NavLink to="/members">Members</NavLink>
        </li>
        <li className="menu-list-item">
        <NavLink to="/category">Category</NavLink>
        </li>
        <li className="menu-list-item">
        <NavLink to="/about">About</NavLink>
        </li>
        </ul>
        </div>
    );
}
export default Navbar;