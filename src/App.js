import React from 'react'

import "./App.css";
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Banner/Home';
import Testimonial from "./components/Testimonial/Testimonial";
import Expert from "./components/Expert/Expert";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Menu />
      <Expert />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App