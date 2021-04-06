import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

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
      <CSSTransition 
        in
        timeout={1000}
        appear={true}
        classNames='skills'
      >
        <Technologies />
      </CSSTransition>
    </div>
  );
};

const App = () => {
  const projectViewRef = useRef();
  const aboutViewRef = useRef();
  const scrollToProjectsView = () => projectViewRef.current.scrollIntoView(true, { inline:'start' });
  const scrollToAboutView = () => aboutViewRef.current.scrollIntoView(true, { inline:'start' });

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
