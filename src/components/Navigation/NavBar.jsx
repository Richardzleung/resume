import React, { useState, useRef } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import Menu from './Menu';
import Burger from './Burger'
import useOutsideClick from '../../hooks/useOutsideClick';
// import { 
//   Link,
// } from 'react-router-dom';


// const ContactButton = () => (
//   <Link to="/contact">
//    <button id='button'>Contact</button>
//   </Link>
// );

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();
  
  useOutsideClick(clickRef, () => setOpenMenu(false));

  return (
   <header>
    <div ref={clickRef}>
      <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
      <Menu open={openMenu} />
    </div>
  </header>
)};

export default NavBar;
