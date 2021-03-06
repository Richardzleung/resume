import React, { useRef, Suspense } from 'react';
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

const App = () => {
  const projectViewRef = useRef();
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
              <Suspense fallback={<Loading/>}>
                <ContactForm />
              </Suspense>
            </Route> 
            <Route exact path='/' >
              <HomeBase scrollToProjectsView={scrollToProjectsView}/>
              <ProjectsView ref={projectViewRef}/>
              <Technologies />
              <Footer/>
            </Route>
            <Route exact path='/404'>
              <Suspense fallback={<Loading/>}>
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
