import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [data, setData] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) =>{
            // setData(response.data[0].title)
            setData(response.data[0].title);
         })
    },[])

  return (
    <div>
        <h1>Showcase of UseEffect</h1>
        <h4>the random sentence below is being called through
            api whenever the component re renders
        </h4>
        <p>{data}</p>
    </div>
  )
}

export default UseEffect