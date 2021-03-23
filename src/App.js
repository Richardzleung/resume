import React from 'react';

import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer.jsx'
import './css/App.css';
import ContactForm from './views/ContactForm';



const App = () => (
  <div className="App">
    <NavBar />
    <ContactForm/>
    <Footer />
  </div>
);


export default App;
