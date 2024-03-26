// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeScreen from './Homescreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomeScreen/>
      </div>
    </Router>
  );
}

export default App;
