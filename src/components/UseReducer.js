import React, { useReducer } from 'react'

const UseReducer = () => {

const reducerFunc = (state, action) =>{
    switch(action.type){
        case "INCREMENTANDTOGGLETEXT":
        return  {
            count: state.count + 1,
            showText: !state.showText
        }
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(reducerFunc, {
    count: 0,
    showText: true
})



  return (
    <div>
        {state.count}

        <button onClick={()=>{
            dispatch({type: 'INCREMENTANDTOGGLETEXT'});
        }}>
            Increment
        </button>

        {state.showText && <p>This text is now showing</p>}
    </div>
  )
}

export default UseReducer