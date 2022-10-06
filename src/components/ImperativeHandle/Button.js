import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {
// Forward ref allows to accept a reference from a parent component
// This is the child component
const [toggle, setToggle] = useState(false)

useImperativeHandle(ref,()=>({
    alterToggle(){
        setToggle(!toggle)
    }
}))

  return (
    <div>
        <button>Button from Child</button>
        <br />
        {toggle && <span>Toggled Text</span>}


    </div>
  )
})

export default Button