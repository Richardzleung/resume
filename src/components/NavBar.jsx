import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const Span = props => (
  <span {...props} aria-hidden='true'/>
);

const Navbar = () => (
    <div>
      <nav className='nav'>
        <ul id='container'>
          <li>
            <Link className='nav_tab' to='/'><Span data-content='Home' />Home</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/about'><Span data-content='About'/>About</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/skills'><Span data-content='Skills'/>Skills</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/projects'><Span data-content='Projects'/>Projects</Link>
          </li>
          <li>
            <a className='nav_tab' href='#contact'><Span data-content='Contact'/>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
);

export default Navbar;
