import React from 'react';

import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer.jsx'
import './css/App.css';

const App = () => (
  <div className="App">
    <div>
      <NavBar />
    </div>
    <div>
      <Footer/>
    </div>
  </div>
);


export default App;
