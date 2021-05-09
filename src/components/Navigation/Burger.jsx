import React from 'react';
import { StyledBurger } from './NavBarElements.styled.js';

// eslint-disable-next-line react/prop-types
const Burger = ({ open, ...props }) => (
  <StyledBurger {...props}>
    <span className={!open ? "hamburger-box hamburger--spring" : "hamburger-box hamburger--spring is-active"}>
      <span className="hamburger-inner"></span>
    </span>
  </StyledBurger>
)

export default Burger;