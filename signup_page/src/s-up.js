import React from 'react'
import InputBox from "./input.js"
import { NavLink } from "react-router-dom";
import './s-up_style-2.css';
function Signup() {
  return (
   <form>
       
        <div className='container'> 
        <div className='img'></div> 
        <h2>SIGN UP</h2>
        <div className='textfield'>
        <label className='l-1'>UserName</label>
        <div className='box-u'>
        <InputBox className='uname' type="text" name="uname"/>
        </div>
        <label className='l-2'>Email</label>
        <div className='box-e'>
        <InputBox className='uname' type="text" name="uname"/>
        </div>
        <label className='l-3'>Password</label>
        <div className='box-p'>
        <InputBox type="password" name="psw"/>
        </div>
        </div>
        <div className='gbtn'>
        <p className='in-btn'>
        <NavLink to="/signin">Sign In</NavLink>
        </p>
        <button className='upbtn'>Sign Up</button>
        </div>
        </div>
    </form>   
    
  )
}

export default Signup

