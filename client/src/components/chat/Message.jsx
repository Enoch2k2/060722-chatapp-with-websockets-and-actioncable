import React from 'react'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {
  const { user } = useSelector(store => store.usersReducer );

  return (
    <p>
      <span style={{ color: user.username == message.user.username ? 'red' : 'blue'}}>{message.user.username}</span> says: { message.content }
    </p>
  )
}

export default Message