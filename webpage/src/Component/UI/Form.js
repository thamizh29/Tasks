import React from 'react'
import InputBox from "./InputElement"

function Form() {
  return (
   <form>
      
        <div class="container" style={{
          display:'flex',
          flexDirection:'column',
          height:'150px',
          width:'250px',
          textAlign:'center', 
          
        }}>
       
        <InputBox type="text" placeholder="User Name" name="uname"/>
        <InputBox type="password" placeholder="Password" name="psw"/>
        <button style={{
          backgroundColor:'green',
          height:'40px',
          width:'80px',
          borderRadius:'10px',
      
        }}>Login</button>
        </div>
    </form> 
    
  )
}

export default Form


