import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='selection:text-slate-800 selection:bg-pink-500'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
