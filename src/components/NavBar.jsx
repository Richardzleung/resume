import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

// eslint-disable-next-line react/prop-types
const LinkSpan = ({ children }) => (
  <li>
    <Link className='nav_tab' to={`/${children}`}>
      <span aria-hidden='true' data-content={children}/>
      {children}
    </Link>
  </li>
)

const ScrollToContactForm = () => (
  <li>
    <a className='nav_tab' href='#contact'><span data-content='Contact'/>Contact</a>
  </li>
);

const Navbar = () => (
  <div>
    <nav className='nav'>
      <ul id='container'>
        <LinkSpan>Home</LinkSpan>
        <LinkSpan>About</LinkSpan>
        <LinkSpan>Skills</LinkSpan>
        <LinkSpan>Projects</LinkSpan>
        <ScrollToContactForm/>
      </ul>
    </nav>
  </div>
);

export default Navbar;
