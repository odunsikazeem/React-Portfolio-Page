import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/app/Homepage';
import Contact from './components/app/Contact';
import Projectspage from './components/app/Projectspage';

function App() {
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projectspage" element={<Projectspage />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
        <Route path="projectspage/*" element={<Projectspage />} />
      </Routes>
    </Router>
  );
}

export default App;
