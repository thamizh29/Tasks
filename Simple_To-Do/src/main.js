import React, { useState } from 'react'

export default function Main() {
    const [task,settask]=useState([]);
    const [input,setinput]=useState('');
    function handleChange(e){
        setinput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        settask([...task,input])
        setinput('');
      
    }
    function handlDelete(index){
        const newtask = [...task];
        newtask.splice(index, 1);
        settask(newtask)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your Task' value={input} onChange={handleChange}/>
        <button className='btn' type='submit'>Add</button>
        <h2>Your Task</h2>
            {
                task.map((tasks,index)=>
                <ul>
                    <li key={index} className='data'><input type='checkbox'/>{tasks}<button className='dlt' onClick={handlDelete}>Delete</button></li>
                </ul>
                )
            }

        </form>
    </div>
  )
}

