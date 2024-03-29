// App.js

import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CateringComponent from "./CateringComponent";
import VideoComponent from "./Video";
import Footer from "./footer";
import Yarn from "./Yarn";
import ContactUs from "./Contact";

function App() {
  return (
    <Router>
      <Header /> {/* Always display the header */}
      <Routes>
        <Route path="/" element={<CateringComponent />} />
        <Route path="/Video" element={<VideoComponent />} />
        <Route path="/item1" element={<Yarn />} />
        <Route exact path="/Contact" element={<ContactUs />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
