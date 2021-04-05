import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import { StyledMenu } from './NavBarElements.styled';
import useWindowSize from '../../hooks/useWindowSize';

const Menu = ({ open, ...props }) => {
  const { viewPortWidth: width } = useWindowSize();
  const isSmallScreen = width < 768;
  // eslint-disable-next-line react/prop-types
  const { 
    scrollToProjectsView,
    scrollToAboutView
  } = props;

  return (
    <StyledMenu open={open}>
      <ScrollItem 
        aria-label='about me' 
        emoji='&#x1F64B;'
        isSmallScreen={isSmallScreen}
        onClick={scrollToAboutView}
      >
        About
      </ScrollItem>
      <ScrollItem 
        aria-label='projects' 
        emoji='&#128214;'
        isSmallScreen={isSmallScreen}
        onClick={scrollToProjectsView}
      >
        projects
      </ScrollItem>
      <MenuItem 
        aria-label='my blog'
        href='/'
        emoji='&#x1F4BB;'
        isSmallScreen={isSmallScreen}
      >
        blog
      </MenuItem>
      <MenuItem 
        aria-label='contact me'
        href='/contact'
        emoji='&#x1f4e9;'
        isSmallScreen={isSmallScreen}
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
const ScrollItem = ({ children, isSmallScreen, emoji, ...props }) => {
  return (
    <button {...props}>
      {isSmallScreen && <span role='img'> {emoji} </span>}
      {children}
    </button>
  );
};

// * Seperate from scroll because I want to have contact form in a seperate view
const MenuItem = ({ children, href, emoji, isSmallScreen }) => {
  const match = useRouteMatch(href);
  return (
    <a href={href}>
      {isSmallScreen && <span role='img'> {emoji} </span>}
      {children}
    </a>
  )
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  children: PropTypes.string,
  isSmallScreen: PropTypes.bool
};

export default Menu;