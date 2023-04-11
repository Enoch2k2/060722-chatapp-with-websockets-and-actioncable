import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/static/Home';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';
import Chat from './components/chat/Chat';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/chat" element={ <Chat /> } />
      </Routes>
    </Router>
  );
}

export default App;
