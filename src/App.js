import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomeBase from './components/Homebase';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import logo from './logo.svg';
import './css/App.css';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

function Home() {
    return <h2>Home</h2>;
  }

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeBase />
      </header>
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);


export default App;
