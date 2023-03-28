import React from "react";
import {BrowserRouter as Router, Routes, Route} from"react-router-dom";
import Signup from "./s-up";
import Signin from "./s-in";
import Home from "./home";
//import Nav from "./nav";

function Mainrouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/signup" exact element={<Signup />}/>
                <Route path="/signin" exact element={<Signin />}/>
                <Route path="/Signup" exact element={<Signup />}/>
                <Route path="/Signin" exact element={<Signin />}/>

            </Routes>
        </Router>
    );
}
export default Mainrouter