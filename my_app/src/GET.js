import React, { useEffect, useState } from 'react'
import Axios from "axios"
import "./Style.css"

function GET() {
    const [name,setName]= useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setName(res.data)
        })
        .catch(err =>{
            console.log(err)
        })

    })
  return (
    <div>
      <h1>Api printing</h1>
      <table className='api'>
        <thead className='id'>   
        <tr> 
        <th>userId</th>
        <th>id</th>
        <th>title</th> 
        <th>body</th>
        </tr>
       </thead>
       <tbody>
        {name.map((am) => {
         return(

        <tr>
          <td>{am.userId}</td>
          <td>{am.id}</td>
          <td>{am.title}</td>
          <td>{am.body}</td>
        </tr>
         )  
        })}
       </tbody>
      </table>
    </div>
  )
}

export default GET
