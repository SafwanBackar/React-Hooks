import React, { useRef, useState } from 'react'

const UseRef = () => {

  const nameRef = useRef(null)
  const [name, setName] = useState('Safwan')

  const nameChangeHandler = () =>{
    setName(nameRef.current.value)
    
    // It will focus on the input when event run.Check input box highlight. 
    nameRef.current.focus()


    nameRef.current.value = ''

  }

  return (
    <div>
        <h1>{name}</h1>
        <input type="text" ref={nameRef} />
        <button onClick={nameChangeHandler}>Change</button>
    </div>
  )
}

export default UseRef