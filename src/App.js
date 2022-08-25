import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {

  return (
<div>
  <Nav></Nav>
  <main>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
  </main>
</div>
  );
}

export default App;
