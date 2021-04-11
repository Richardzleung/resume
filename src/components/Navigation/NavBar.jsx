import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { StyledMenu } from './NavBarElements.styled';
import { ScrollItem, MenuItem } from './MenuElements';
import Burger from './Burger'
import useOutsideClick from 'hooks/useOutsideClick';

// const ContactButton = () => (
//   <Link to="/contact">
//    <button id='button'>Contact</button>
//   </Link>
// );

const NavBar = ({ scrollToAboutView, scrollToProjectsView }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();
  useOutsideClick(clickRef, () => setOpenMenu(false));

  const handleProjectClick = () => {
    scrollToProjectsView();
    setOpenMenu(null);
  };
  const handleAboutClick = () => {
    scrollToAboutView();
    setOpenMenu(null);
  }
  
  return (
   <header>
    <div ref={clickRef}>
      <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
      <StyledMenu open={openMenu}>
      {/* <p className='logo' onClick={() => history.push('/')}>
        Richard Leung
      </p> */}
        <ScrollItem 
          aria-label='projects' 
          emoji='&#128214;'
          onClick={handleProjectClick}
        >
          projects
        </ScrollItem>
        <ScrollItem 
          aria-label='about me' 
          emoji='&#x1F64B;'
          onClick={handleAboutClick}
        >
          About
        </ScrollItem>
        <MenuItem 
          aria-label='my blog'
          href='/'
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
    </div>
  </header>
)};

NavBar.propTypes = {
  scrollToAboutView: PropTypes.func,
  scrollToProjectsView : PropTypes.func,
};


export default NavBar;
