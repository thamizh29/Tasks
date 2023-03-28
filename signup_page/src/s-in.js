import React from 'react'
import InputBox from "./input.js"
import { NavLink } from "react-router-dom";
import './s-in_style-2.css';
function Signin() {
  return (
   <form>
        <div className='container'> 
        <div className='img'></div> 
        <h2>SIGN IN</h2>
        <div className='textfield'>
        <label className='l-1'>UserName</label>
        <div className='box-u'>
        <InputBox className='uname' type="text" name="uname"/>
        </div>
        <label className='l-2'>Password</label>
        <div className='box-p'>
        <InputBox type="password" name="psw"/>
        </div>
        </div>
        <div className='gbtn'>
        <p className='in-btn'>
        <NavLink to="/signup">Sign Up</NavLink>
        </p>
        <button className='btn'>Sign In</button>
        </div>
        </div>
    </form>   
    
  )
}

export default Signin

