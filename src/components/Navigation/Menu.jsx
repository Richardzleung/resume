import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';

import { StyledMenu } from './NavBarElements.styled';
import useWindowSize from '../../hooks/useWindowSize';

const Menu = ({ open, ...props }) => {
  const history = useHistory();
  const { 
    scrollToProjectsView,
    scrollToAboutView
  } = props;

  return (
    <StyledMenu open={open}>
      <p className='logo' onClick={() => history.push('/')}>
        Richard Leung
      </p>
      <ScrollItem 
        aria-label='about me' 
        emoji='&#x1F64B;'
        onClick={scrollToAboutView}
      >
        About
      </ScrollItem>
      <ScrollItem 
        aria-label='projects' 
        emoji='&#128214;'
        onClick={scrollToProjectsView}
      >
        projects
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
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
  scrollToProjectsView: PropTypes.func,
  scrollToAboutView: PropTypes.func
};

// * scrolls to element on click using a ref
// eslint-disable-next-line react/prop-types
const ScrollItem = ({ children, emoji, ...props }) => {
  const { isLargishScreen } = useWindowSize();
  return (
    <div {...props} className='navbar-item'>
      {!isLargishScreen && <span role='img'> {emoji} </span>}
      {children}
    </div>
  );
};

// * Seperate from scroll because I want to have contact form that is in a seperate view
const MenuItem = ({ children, href, emoji }) => {
  // const match = useRouteMatch(href);
  const { isLargishScreen } = useWindowSize();
  return (
    <a href={href}>
      {!isLargishScreen && <span role='img'> {emoji} </span>}
      {children}
    </a>
  )
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Menu;