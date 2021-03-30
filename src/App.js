import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

import Navigation from './components/NavBar'
import Footer from './components/Footer'
import ContactForm from './views/ContactForm';

import './css/App.css';

import logo from './logo.svg';
import HomeBase from './components/Homebase';
import SkillsPage from './components/TechnicalSkills';
import useOnScreen from 'hooks/useOnScreen';


const Home = () => {
  const [showSkills, setShowSkills] = useState(false);
  console.log({ showSkills })
  // const skillsRef = useRef();

  // const isVisible = useOnScreen(skillsRef);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <HomeBase />
      {/* {showSkills && <SkillsPage />} */}
      <div style={{ height: '1000px' }}>
      <button onClick={() => {
      console.log({ showSkills })
      return setShowSkills(true)}}>click</button>
      </div>
      <CSSTransition 
        in={showSkills}
        timeout={300}
        classNames='alert'
      >
        {/* <SkillsPage/> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore dolores iste expedita minima impedit eos. Dolore quae itaque quasi omnis illum tempore dignissimos.</p>
      </CSSTransition>
    </header>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/contact'><ContactForm/></Route>
          <Route path='/'><Home/></Route>
        </Switch>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  )
};


export default App;
