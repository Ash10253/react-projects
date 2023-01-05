import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import About from './pages/about';
import Welcome from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Welcome/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/projects' element={<Projects/>} />

      </Routes>
      </Router>
  );
  }

export default App
