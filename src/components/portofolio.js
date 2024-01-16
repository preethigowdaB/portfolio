import React from "react";
import HomePage from "./homePage";
import Projects from "./projects/projects";
import About from "./about";
import ContactForm from "./contactForm";
import NavigationBar from './navigationBar'
import Skills from "./skills";
const Portfolio = () => {
  return (
    <div className='bg_color'>
      <NavigationBar/>
      <HomePage />
      <About />
      <Skills/>
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Portfolio;
