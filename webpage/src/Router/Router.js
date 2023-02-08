import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from"react-router-dom";

import Home from "../pages/home";
import Members from"../pages/members";
import About from"../pages/about";
import Category from"../pages/category";
import Notfound from"../pages/pagenotfound";
import Navbar from "../Component/UI/Layout/navbar";
function Mainrouter(){
    return(
        
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/home" exact element={<Home />}/>
                <Route path="/members" exact element={<Members />}/>
                <Route path="/category" exact element={<Category/>}/>
                <Route path="/about" exact element={<About />}/>
                

            </Routes>
        </Router>
        
        
    );
}
export default Mainrouter;