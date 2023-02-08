 import React, { useState } from "react";
import { Router } from "react-router-dom";
 //import Form from'./Component/UI/Form';
 import Mainrouter from'./Router/Router';
 
 

function App() {
  /*const [count , setCount] = useState(0)
  const clickable = () => {
    setCount(count + 1)
  }
  return (/*
    <div>
    <div>Login Form</div>
    <div className="login">Login Form</div>
    </div>
    ------------
   <div style={{
    textAlign:'center',
    backgroundColor:'#060042',
    color:'#fff',
    paddingTop:'100px',
    width:'1000px',
    height:'700px',
    margin:'50px',
    marginLeft:'400px',
    borderRadius:'10px',
    
   }}>
    <Form />
   </div> 
   <div>
    <div style={{
      textAlign:'center',
      fontSize:'70px',
      fontFamily:'monospace',
    }}>Fun count : {count}</div>
    <button onClick={() => clickable()}>Click Me!</button>
    </div>*/
    return(
       <div>
        <Mainrouter />
        </div>
  );
}
export default App;
