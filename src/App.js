import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;