import React, { useState, useRef } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMenu } from './NavBarElements.styled.js';
import { ScrollItem, MenuItem } from './MenuElements';
import Burger from './Burger'
import useOutsideClick from 'hooks/useOutsideClick';

const NavBar = ({ scrollToProjectsView }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();

  /* I want to match this because 'project' will only be displayed in main view 
    since clicking project will scroll to view
  */
  const { isExact: displayProjectTab } = useRouteMatch('/');
  useOutsideClick(clickRef, () => setOpenMenu(false));

  const handleProjectClick = () => {
    scrollToProjectsView();
    setOpenMenu(false);
  };
  
  return (
   <header ref={clickRef} className='header'>
    <nav>
      {/* navigate back to home & this always remains on screen*/}
      <Link to={'/'} className='nav--home'>Richard Leung</Link>

      {/* these elements collapse when small screeen */}
      <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} aria-label='hamburger'/>
      <StyledMenu open={openMenu}>
        { displayProjectTab &&
          <ScrollItem 
            aria-label='projects' 
            emoji='&#128214;'
            onClick={handleProjectClick}
          >
            projects
          </ScrollItem>
        }
        <MenuItem 
          aria-label='my blog'
          href='/blog'
          emoji='&#x1F4BB;'
          onClick={() => setOpenMenu(false)}
        >
          blog
        </MenuItem>
        <MenuItem 
          aria-label='contact me'
          href='/contact'
          emoji='&#x1f4e9;'
          onClick={() => setOpenMenu(false)}
        >
          contact
        </MenuItem>
      </StyledMenu>
    </nav>
  </header>
)};

NavBar.propTypes = {
  scrollToAboutView: PropTypes.func,
  scrollToProjectsView : PropTypes.func,
};


export default NavBar;