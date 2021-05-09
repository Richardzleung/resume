import React, { useState, useRef } from 'react';
import { Link, NavLink,useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMenu } from './NavBarElements.styled.js';
import Burger from './Burger'
import useOutsideClick from 'hooks/useOutsideClick';
import useWindowSize from 'hooks/useWindowSize';

const NavBar = ({ scrollToProjectsView }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();
  const { isLargishScreen } = useWindowSize();

  /* matching so 'project' will only be displayed in main view */
  const { isExact: displayProjectTab } = useRouteMatch('/');
  useOutsideClick(clickRef, () => setOpenMenu(false));

  const handleProjectClick = () => {
    scrollToProjectsView();
    setOpenMenu(false);
  };
  
  return (
   <header ref={clickRef} className='header'>
    <nav>
      {/* navigate to home & always remains on screen*/}
      <Link to={'/'} className='nav--home'>Richard Leung</Link>

      {/* these elements collapse when small screeen */}
      <Burger open={openMenu} onClick={() => setOpenMenu(!openMenu)} aria-label='hamburger'/>
      <StyledMenu open={openMenu}>
        {/** this element scrolls to my projects */}
        { displayProjectTab &&
          <button onClick={handleProjectClick}>
            {!isLargishScreen && 
              <span role='img' aria-label='projects'> 
                &#128214; 
              </span>
            }
            {/* need to wrap span because safari bug with text animation */}
            <span>projects</span>
          </button>
        }
        {/** these elemnents are in a different page */}
        <NavLink to='/blog' activeStyle={{ backgroundPosition: '0 100%' }}>
          {!isLargishScreen && <span role='img' aria-label='blog'> &#x1F4BB; </span>}
          blog
        </NavLink>
        <NavLink to='contact' activeStyle={{ backgroundPosition: '0 100%' }}>
          {!isLargishScreen && <span role='img' aria-label='contact me'> &#x1f4e9; </span>}
          contact
        </NavLink>
      </StyledMenu>
    </nav>
  </header>
)};

NavBar.propTypes = {
  scrollToAboutView: PropTypes.func,
  scrollToProjectsView : PropTypes.func,
};


export default NavBar;