import React from 'react'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import { useSelector } from 'react-redux';

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
  const { loggedIn } = useSelector(store => store.usersReducer);

  const links = loggedIn ? <>
    <Button color="inherit" to="/chat" component={NavLink}>Chat</Button>
    <Button color="inherit">Logout</Button>
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