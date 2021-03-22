import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomeBase from './components/Homebase';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer.jsx'
import logo from './logo.svg';
import './css/App.css';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './views/ProjectsPage';

const Home = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <HomeBase />
  </header>
);

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/skills'>
          <SkillsPage />
        </Route>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>

    <ContactPage/>
    <Footer />
  </div>
);


export default App;
