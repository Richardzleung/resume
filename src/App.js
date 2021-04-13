import React, { useRef, Suspense, useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import HomeBase from './views/LandingPage';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProjectsView from './views/ProjectsView';
import Loading from 'components/Loading';
import AboutView from 'views/AboutView';
import Technologies from 'views/TechnicalSkills';
import './App.css';

const ContactForm = React.lazy(() => import('./views/ContactForm'));
const PageNotFound = React.lazy(() => import('./views/PageNotFound'));

const App = () => {
  const projectViewRef = useRef();
  const aboutViewRef = useRef();
  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => new Promise(resolve => setTimeout(() => resolve(), 1250));
  
  useLayoutEffect(() => {
    fakeRequest().then(() => {
      setLoading(!isLoading);
    })
  }, []);

  if (isLoading) {
    return <Loading/>;
  }

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
              <Suspense fallback=''>
                <PageNotFound />
              </Suspense>
            </Route>
            <RouteWithNavBar path='/contact'>
              <Suspense fallback=''>
                <ContactForm />
              </Suspense>
            </RouteWithNavBar> 
            <RouteWithNavBar exact path='/' >
              <HomeBase scrollToProjectsView={scrollToProjectsView}/>
              <ProjectsView ref={projectViewRef}/>
              <Technologies />
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
