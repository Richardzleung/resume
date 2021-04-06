import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import smoothscroll from 'smoothscroll-polyfill';

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactForm from './views/ContactForm';
import ProjectsView from './views/ProjectsView';

import './App.css';

import HomeBase from './components/LandingPage';
import Technologies from './views/TechnicalSkills';
import AboutView from './views/AboutView';

const Home = () => {
  return (
    <div>
      <HomeBase />
      {/* <CSSTransition 
        in
        timeout={1000}
        appear={true}
        classNames='skills'
      > */}
        <Technologies />
      {/* </CSSTransition> */}
    </div>
  );
};

const App = () => {
  const projectViewRef = useRef();
  const aboutViewRef = useRef();
  smoothscroll.polyfill();
  
  const scrollToProjectsView = () => projectViewRef.current.scrollIntoView({ 
    inline: 'start', 
    behavior: 'smooth' 
  });
  const scrollToAboutView = () => aboutViewRef.current.scrollIntoView({ 
    inline:'start', 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      <Router>
        <Navigation 
          scrollToProjectsView={scrollToProjectsView}
          scrollToAboutView={scrollToAboutView}
        />
        <Switch>
          <Route path='/contact'> 
            <ContactForm />
          </Route>
          <Route path='/'>
            <Home />
            <AboutView ref={aboutViewRef}/>
            <ProjectsView ref={projectViewRef}/>
          </Route>
        </Switch>
      </Router>
      <div>
        <Footer/>
      </div>
    </div>
  )
};


export default App;
