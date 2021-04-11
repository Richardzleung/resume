import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSize';


// * scrolls to element on click using a ref
const ScrollItem = ({ children, emoji, ...props }) => {
  const { isLargishScreen } = useWindowSize();
  return (
    <div {...props} className='navbar-item'>
      {!isLargishScreen && <span role='img'> {emoji} </span>}
      {children}
    </div>
  );
};

ScrollItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  children: PropTypes.string,
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

export { MenuItem, ScrollItem };