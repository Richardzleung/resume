import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactForm from './views/ContactForm';

import './App.css';

import HomeBase from './components/LandingPage';
import SkillsPage from './components/TechnicalSkills';

const Home = () => {
  return (
    <div>
      <HomeBase />
      <CSSTransition 
        in
        timeout={1000}
        appear={true}
        classNames='skills'
      >
        <SkillsPage />
      </CSSTransition>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/contact' component={ContactForm}/>
        </Switch>
      </Router>
      <Home/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};


export default App;
