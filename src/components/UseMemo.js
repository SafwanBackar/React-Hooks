import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {

 const [data, setData] = useState('')
 const [toggle, setToggle] = useState(false)

 

 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response) =>{
        setData(response.data);
    })
 },[])

 const findLongestName = (comments)=>{
    if(!comments) return null

    let longestName = ''
    for(let i=0;i<comments.length;i++){
        if(comments[i].name.length > longestName.length){
            longestName = comments[i].name
        }
    

    console.log('This was computed');
    return longestName
    }
 }

 const getLongestUsername = useMemo(()=> findLongestName(data), [data])
// If we didnt use useMemo and instead executed the findLongestName 
// function within the p tag, we can see the findLongestName function running everytime
// (Check the console for 'This was computed')
// we toggle the 'Toggled' text, which has nothing to do with the
// findLongestName function

  return (
    <div>
        <div>UseMemo</div>
        <p>{getLongestUsername}</p>
        <button onClick={()=> setToggle(!toggle)}>Toggler</button>
        <br/>
        {toggle && <span>Toggled</span>}
    </div>
  )
}

export default UseMemo