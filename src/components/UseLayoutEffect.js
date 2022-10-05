import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {

  const nameRef = useRef(null)

  useLayoutEffect(()=>{
    console.log(nameRef.current.value);
  },[])

  useEffect(()=>{
    nameRef.current.value = 'Backar'
  },[])



  return (
    <div>
      <p>If you check the console, input value will be still safwan first
         .Thats bcos useLayoutEffect is called before the page render and useEffect being after.
      </p>
      <input ref={nameRef} value='Safwan'></input>
    </div>
  )
}

export default UseLayoutEffect