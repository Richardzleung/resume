import React, { useRef } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactForm from './views/ContactForm';
import ProjectsView from './views/ProjectsView';
import PageNotFound from 'views/PageNotFound';

import './App.css';

import HomeBase from './views/LandingPage';
import Technologies from './views/TechnicalSkills';
import AboutView from './views/AboutView';

const Home = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <HomeBase />
      <Technologies />
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
  // eslint-disable-next-line react/prop-types
  const RouteWithNavBar = ({ children,  ...rest }) => (
    <Route {...rest}>
      <Navigation 
        scrollToProjectsView={scrollToProjectsView}
        scrollToAboutView={scrollToAboutView}/>
      {children}
    </Route>
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/404'>
            <PageNotFound />
          </Route>
          <RouteWithNavBar path='/contact'>
            <ContactForm />
          </RouteWithNavBar> 
          <RouteWithNavBar exact path='/' >
            <Home />
            <ProjectsView ref={projectViewRef}/>
            <AboutView ref={aboutViewRef}/>
            <Footer/>
          </RouteWithNavBar>
          <Redirect to='/404' />
        </Switch>
      </Router>
    </div>
  )
};


export default App;
