import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../actions/messages'


const ChatForm = ({ ws }) => {
  const [message, setMessage] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const messageObj = { content: message };
    fetch("/messages", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageObj)
    })
    setMessage("")
  }

  ws.onmessage = e => {
    const data = JSON.parse(e.data);
    if(data.type === "ping") return;
    if(data.type === "welcome") return;
    if(data.type === "confirm_subscription") return;
    const message = JSON.parse(data.message);
    dispatch(addMessage(message));
  }

  return (
    <form onSubmit={ handleSubmit } >
      <input 
        type="text" name="message" id="message" value={ message } onChange={ e=> setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  )
}

export default ChatForm