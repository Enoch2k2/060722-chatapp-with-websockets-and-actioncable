import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import ChatForm from './ChatForm'
import { loadMessages } from '../../actions/messages'

const useStyles = makeStyles({
  chatBox: {
    outline: "1px solid black",
    width: "50%",
    height: "300px",
    overflowY: "auto",
    padding: '5px'
  }
})

const Chat = ({ ws }) => {
  const classes = useStyles();
  const messages = useSelector(store => store.messagesReducer);
  const messageCards = messages.map(message => <Message key={ message.id } message={ message } />)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages())
  }, [])


  return (
    <div>
      <h1>Chat</h1>
      <Box className={ classes.chatBox }>
        { messageCards }
      </Box>
      <ChatForm ws={ ws } />
    </div>
  )
}

export default Chat