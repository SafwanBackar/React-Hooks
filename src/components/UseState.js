import React, { useState } from 'react'

const UseState = () => {

    const [countValue, setCountValue] = useState(0)
    const [inputValue, setInputValue] = useState("Safwan")


    const incrementByOneHandler = () => {
        setCountValue(countValue + 1)
    }
    const decrementByOneHandler = () =>{
        setCountValue(countValue - 1)
    }

    const inputValueHandler = (event) =>{
        const newInputValue = event.target.value
        setInputValue(newInputValue)
    }

  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={incrementByOneHandler}>
            Increase by 1
        </button>
        <button onClick={decrementByOneHandler}>
            Decrease by 1
        </button>

        <br/>
        <h1>Making use of onChange</h1>

        <input onChange={inputValueHandler}/>{inputValue}

    </div>
  )
}

export default UseState