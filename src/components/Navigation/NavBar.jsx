import React, { useState } from 'react';

// import { 
//   Link,
// } from 'react-router-dom';


import '../../css/NavBar.css';


// const ContactButton = () => (
//   <Link to="/contact">
//    <button id='button'>Contact</button>
//   </Link>
// );

const AltNav = () => {
  const [showHamburger, setShowHamburger] = useState(true);
  const showMenu = !showHamburger; 

  return (
   <header>
      <h1 className='logo'>Richard Leung</h1>
      <input type='checkbox' id='nav-toggle' className={showMenu ? 'nav-toggle' : 'hidden'}></input>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
      
        <button 
          className={showHamburger ? "hamburger" : "hamburger is-active hamburger--elastic"}
          onClick={() => setShowHamburger(!showHamburger)}  
        >
          <label htmlFor='nav-toggle' className='nav-toggle-label'>
            <span className="hamburger-box ">
                <span className="hamburger-inner " />
            </span>
          </label>
        </button>
    </header>
)};

export default AltNav;
