import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import { StyledMenu } from './NavBarElements.styled';
import useWindowSize from '../../hooks/useWindowSize';

const MenuItem = ({ href, label, emoji }) => {
  const match = useRouteMatch(href);
  const { width } = useWindowSize();
  const isSmallScreen = width < 768;
  const isActive = match?.isExact;

  return (
    <a href={href} className={ isActive && 'active'}>
      {isSmallScreen && <span role='img'> {emoji} </span>}
      {label}
    </a>
  )
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
};

const Menu = props => (
  <StyledMenu {...props}>
    <MenuItem 
      label='About' 
      aria-label='about me' 
      href='/'
      emoji='&#128214;'
    />
    <MenuItem 
      label='Blog'
      aria-label='my blog'
      // i need to have a blog first
      href='/'
      emoji='&#x1f4b8;'
    />
    <MenuItem 
      label='contact'
      aria-label='contact me'
      href='/contact'
      emoji='&#x1f4e9;'
    />
  </StyledMenu>
);

export default Menu;