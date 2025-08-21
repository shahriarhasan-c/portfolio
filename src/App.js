import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectList from './components/ProjectList/ProjectList';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import InteractiveResume from './components/InteractiveResume/InteractiveResume';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <ProjectList />
        <Skills />
        <Contact />
        <Blog />
        <InteractiveResume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
