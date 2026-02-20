import React, { useEffect, useState } from 'react'
import Axios from "axios"

function GET() {
    const [name,setName]= useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
        })

    })
  return (
    <div>
      <h1>Api printing</h1>
      <table>
        <tr> <th>name</th>
        <th>id</th>
        <th>number</th> </tr>
       
      </table>
    </div>
  )
}

export default GET
