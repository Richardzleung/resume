import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledMenu } from './NavBarElements.styled.js';
import { ScrollItem, MenuItem } from './MenuElements';
import Burger from './Burger'
import useOutsideClick from 'hooks/useOutsideClick';

const NavBar = ({ scrollToProjectsView }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();
  useOutsideClick(clickRef, () => setOpenMenu(false));

  const handleProjectClick = () => {
    scrollToProjectsView();
    setOpenMenu(null);
  };
  
  return (
   <header ref={clickRef} className='header'>
    <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
    <StyledMenu open={openMenu}>
      <ScrollItem 
        aria-label='projects' 
        emoji='&#128214;'
        onClick={handleProjectClick}
      >
        projects
      </ScrollItem>
      <MenuItem 
        aria-label='my blog'
        href='/blog'
        emoji='&#x1F4BB;'
      >
        blog
      </MenuItem>
      <MenuItem 
        aria-label='contact me'
        href='/contact'
        emoji='&#x1f4e9;'
      >
        contact
      </MenuItem>
  </StyledMenu>
  </header>
)};

NavBar.propTypes = {
  scrollToAboutView: PropTypes.func,
  scrollToProjectsView : PropTypes.func,
};


export default NavBar;
