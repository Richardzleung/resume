import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';


// * scrolls to element on click using a ref
const ScrollItem = ({ children, emoji, ...props }) => {
  const { isLargishScreen } = useWindowSize();
  return (
    <button {...props}>
      {!isLargishScreen && <span role='img' style={{ color: 'initial' }}> {emoji} </span>}
      {/* need to wrap child in span because safari bug  with gradient */}
      <span>
        {children}
      </span>
    </button>
  );
};

ScrollItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  children: PropTypes.string,
};

// * Seperate from scroll because I want to have contact form that is in a seperate view
const MenuItem = ({ children, href, emoji, className, ...props }) => {
  const { isLargishScreen } = useWindowSize();
  return (
    <NavLink 
      to={href} 
      className={className} 
      activeStyle={{
        backgroundPosition: '0 100%',
        fontWeight: 'bold'
      }}
      {...props}
    >
      {!isLargishScreen && <span role='img'> {emoji} </span>}
      {children}
    </NavLink>
  )
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string,
};

export { MenuItem, ScrollItem };