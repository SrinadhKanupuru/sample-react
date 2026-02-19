import React, { useState } from 'react'
import './App.css';

 function BasicState() {
    const [name,setName] = useState("hari")
    const [counter,SetCounter] = useState(0)
  return (
    <div>
      <h1>srinadh: {name}</h1>
      <button onClick={() => {setName("srinadh")}}>click me</button>
      <h1>counter:{counter}</h1>
      <button onClick={() => {SetCounter(counter + 1)}}>+</button>
     
    </div>
  )
}
export default BasicState
