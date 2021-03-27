/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { 
  Link,
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
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
import Form from './Form';

const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <HomeBase />
  </header>
);

const ContactButton = () => (
  <Link to="/contact">
   <button id='button'>Contact</button>
  </Link>
);

const MenuButton = ({ handleMenu }) => (
  <IconButton 
    edge="start"  
    color="inherit" 
    aria-label="menu" 
    onClick={handleMenu}>
    <MenuIcon />
  </IconButton>
);

const MenuItem = ({ children, onClick }) => (
  <Item onClick={onClick}>
    <Link className='nav_tab' to={`/${children}`}>
      <span aria-hidden='true' data-content={children}/>
      {children}
    </Link>
  </Item>
);

const NavMenu = ({ anchorEl, handleClose, open }) => (
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
    <nav>
      <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>About</MenuItem>
      <MenuItem onClick={handleClose}>Skills</MenuItem>
      <MenuItem onClick={handleClose}>Projects</MenuItem>
    </nav>
  </Menu>
);

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const NavMenuProps = {
    open,
    anchorEl,
    handleClose
  };

  return(
    <BrowserRouter>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <div>
            <MenuButton handleMenu={handleMenu}/>
            <NavMenu {...NavMenuProps}/>
          </div>
         <ContactButton/>
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
        <Route path='/contact'>
          <Form/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  )
};

export default Navbar;
