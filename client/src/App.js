import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/static/Home';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Chat from './components/chat/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './actions/users';


// creates a new websocket and points to our Actioncable server
const ws = new WebSocket("ws://localhost:3001/cable")

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useSelector(store => store.usersReducer);

  ws.onopen = () => {    
    console.log('connected to websocket server')
    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: 2,
          channel: "MessagesChannel"
        })
      })
    )
  }

  useEffect(() => {
    dispatch(getCurrentUser(setLoading));
  }, [])
  return (
    <Router>
      <Navbar />
      {
        loading ? <h1>Loading...</h1> : 
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/chat" element={ <Chat ws={ws} /> } />
        </Routes>
      } 
    </Router>
  );
}

export default App;
