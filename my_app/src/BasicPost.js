import React, { useState } from 'react'
import Axios from 'axios'

function BasicPost() {
    const [userId,setuserId] = useState('')
    const [Id,setId] = useState('')
    const [title,settitle] = useState('')
    const [body,setbody] = useState('')
    const submitHandler =(e) => {
      e.preventDefault();
      Axios.post('https://jsonplaceholder.typicode.com/posts',{userId,Id,title,body})
      .then((res) => {
        alert("updated")
        console.log(res.data)
       
      })
      .catch((err) => {
        console.log(err)
      })
    };
    
    
      
    
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='number' placeholder='Enter userId' value={userId} onChange={(e) => {setuserId(e.target.value)}}/>
        <input type='number' placeholder='Enter Id' value={Id} onChange={(e) => {setId(e.target.value)}}/>
        <input type='text' placeholder='Enter title' value={title} onChange={(e) => {settitle(e.target.value)}}/>
        <input type='text' placeholder='Enter text' value={body} onChange={(e) => {setbody(e.target.value)}}/>
        <input type='submit' value='add employ'/>
      </form>
    </div>
  )
}

export default BasicPost
