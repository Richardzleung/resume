import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSize';


// * scrolls to element on click using a ref
const ScrollItem = ({ children, emoji, ...props }) => {
  const { isLargishScreen } = useWindowSize();
  return (
    <button {...props}>
      {!isLargishScreen && <span role='img' style={{ color: 'initial' }}> {emoji} </span>}
      <span className='navbar-item'>
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
const MenuItem = ({ children, href, emoji, ...props }) => {
  // const match = useRouteMatch(href);
  const { isLargishScreen } = useWindowSize();
  return (
    <a href={href} {...props}>
      {!isLargishScreen && <span role='img' aria-label={`${children} ${emoji}`}> {emoji} </span>}
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