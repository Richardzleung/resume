import React from 'react';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Burger, Nav } from './NavBarElements';
// import { 
//   Link,
// } from 'react-router-dom';


// const ContactButton = () => (
//   <Link to="/contact">
//    <button id='button'>Contact</button>
//   </Link>
// );

const NavBar = () => {
  return (
   <header>
      <Nav>
        <ul>
          <li><a href="/"><HomeRoundedIcon color='primary'/></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </Nav>
    </header>
)};

export default NavBar;
