import React, { useRef, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import HomeBase from './views/LandingPage';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProjectsView from './views/ProjectsView';
import Loading from 'components/Loading';
import Technologies from 'views/TechnicalSkills';

import './App.css';

const ContactForm = React.lazy(() => import('./views/ContactForm'));
const PageNotFound = React.lazy(() => import('./views/PageNotFound'));
const Blogs = React.lazy(() => import('./components/Blog'));

const App = () => {
  const projectViewRef = useRef();
  const [isLoading, setLoading] = useState(true);

  const fakeRequest = () => new Promise(resolve => setTimeout(() => resolve(), 1250));
  
  useEffect(() => {
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

  return (
    <div className="App">
        <Router>
          <Navigation scrollToProjectsView={scrollToProjectsView}/>
          <Switch>
            <Route path='/contact'>
              <Suspense fallback=''>
                <ContactForm />
              </Suspense>
            </Route> 
            <Route path='/blog'>
              <Suspense fallback=''>
                <Blogs/>
              </Suspense>
            </Route>
            <Route exact path='/' >
              <HomeBase scrollToProjectsView={scrollToProjectsView}/>
              <ProjectsView ref={projectViewRef}/>
              <Technologies />
              <Footer/>
            </Route>
            <Route exact path='/404'>
              <Suspense fallback=''>
                <PageNotFound />
              </Suspense>
            </Route>
            <Redirect to='/404' />
          </Switch>
        </Router>
    </div>
  )
};


export default App;
