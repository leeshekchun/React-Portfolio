import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
<div>
  <Nav></Nav>
  <main>
    <Header></Header>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </main>
</div>
  );
}

export default App;
