import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const Navbar = () => (
    <div >
      <nav className='Navbar-root'>
        <ul id='tabContainer'>
          <li>
            <Link className='Navbar-tab' to='/'><span data-content='Home' aria-hidden='true'></span>Home</Link>
          </li>
          <li>
            <Link className='Navbar-tab' to='/about'><span data-content='About' aria-hidden='true'></span>About</Link>
          </li>
          <li>
            <Link className='Navbar-tab' to='/contact'><span data-content='Contact' aria-hidden='true'></span>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
);

export default Navbar;
