// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Homescreen';
import CateringComponent from './CateringComponent';
import VideoComponent from './Video';

function App() {
  return (
    <Router>
      <Header /> {/* Always display the header */}
      <Routes>
        <Route path="/" element={ <CateringComponent/>} />
        <Route path="/Video" element={<VideoComponent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
