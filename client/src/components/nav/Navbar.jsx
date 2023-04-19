import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/users';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { loggedIn, user } = useSelector(store => store.usersReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {
      method: "DELETE"
    })

    dispatch(logoutUser());
    navigate('/login');
  }

  const links = loggedIn ? <>
    <Button color="inherit" to="/chat" component={NavLink}>Chat</Button>
    <Button color="inherit">{ user.username }</Button>
    <Button color="inherit" onClick={ handleLogout }>Logout</Button>
  </> : <>
    <Button color="inherit" to="/login" component={NavLink}>Login</Button>
    <Button color="inherit" to="/signup" component={NavLink}>Signup</Button>
  </>

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Flatiron Chat App
        </Typography>
        <Button color="inherit" to="/" component={NavLink}>Home</Button>
        
        { links }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar