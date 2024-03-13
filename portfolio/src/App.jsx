import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/pages/home-folder/Homepage';
import Contact from './components/pages/contact-folder/Contact';
import Projectspage from './components/pages/projectpage-folder/Projectspage';
import Footer from './components/Footer/Footer';
import About from './components/pages/aboutme/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="projectspage/*" element={<Projectspage />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="projectspage/*" element={<Projectspage />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
