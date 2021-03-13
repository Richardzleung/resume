import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';

const Navbar = () => (
    <div>
      <nav className='nav'>
        <ul id='container'>
          <li>
            <Link className='nav_tab' to='/'><span data-content='Home' aria-hidden='true'></span>Home</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/about'><span data-content='About' aria-hidden='true'></span>About</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/skills'><span data-content='Skills' aria-hidden='true'></span>Skills</Link>
          </li>
          <li>
            <Link className='nav_tab' to='/projects'><span data-content='Projects' aria-hidden='true'></span>Projects</Link>
          </li>
          <li>
            <a className='nav_tab' href='#contact'><span data-content='Contact' aria-hidden='true'></span>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
);

export default Navbar;
