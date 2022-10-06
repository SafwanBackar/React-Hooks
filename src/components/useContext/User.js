import React, { useContext } from 'react'
import { AppContext } from './ContextTutorial'


const User = () => {
    const {username} = useContext(AppContext)
  return (
    <div>User: {username}</div>
  )
}

export default User