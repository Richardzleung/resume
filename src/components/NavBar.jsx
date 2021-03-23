import React, { useState } from 'react';
import { 
  Link as RouterLink,
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom';
import AppBar from '@material-ui/core/appbar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Item from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import '../css/Navbar.css';
import logo from '../logo.svg';
import HomeBase from './Homebase';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from '../views/ProjectsPage';


const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <HomeBase />
  </header>
);


// eslint-disable-next-line react/prop-types
const MenuItem = ({ children, onClick }) => (
  <Item onClick={onClick}>
    <RouterLink className='nav_tab' to={`/${children}`}>
      <span aria-hidden='true' data-content={children}/>
      {children}
    </RouterLink>
  </Item>
);

// Contact form is seperated from rest of navigation because it should always be displayed at bottom
// TODO: will probably sync it with other navigation as i make a one page app 
const ContactForm = () => (
  <li>
    <a className='nav_tab' href='#contact'><span data-content='Contact'/>Contact</a>
  </li>
);


const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton 
              edge="start"  
              color="inherit" 
              aria-label="menu" 
              onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <nav className='nav'>
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Skills</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </nav>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/skills'>
          <SkillsPage />
        </Route>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Navbar;
