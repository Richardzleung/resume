import React, { useState, useRef } from 'react';
import { Link, NavLink,useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledMenu } from './NavBarElements.styled.js';
import Burger from './Burger'
import useOutsideClick from 'hooks/useOutsideClick';

const NavBar = ({ scrollToProjectsView }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const clickRef = useRef();

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
          <button onClick={handleProjectClick} data-content='🚧'>
            {/* need to wrap span because safari bug with text animation */}
            <span>projects</span>
          </button>
        }
        {/** these elemnents are in a different page */}
        <NavLink 
          to='/blog' 
          activeStyle={{ backgroundPosition: '0 100%' }} 
          onClick={() => setOpenMenu(null)}
          data-content='💻'
        >
          blog
        </NavLink>
        <NavLink 
          to='contact' 
          activeStyle={{ backgroundPosition: '0 100%' }}
          onClick={() => setOpenMenu(null)}
          data-content='📩'
        >
          contact
        </NavLink>
        {/* dark mode icon*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: "rotate(40deg)" }}
        >
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" /> 
            <circle cx="12" cy="4" r="9" fill="black" />  
          </mask>
          <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)"/>	
          {/* <g stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g> */}
        </svg>
      </StyledMenu>
    </nav>
  </header>
)};

NavBar.propTypes = {
  scrollToAboutView: PropTypes.func,
  scrollToProjectsView : PropTypes.func,
};


export default NavBar;