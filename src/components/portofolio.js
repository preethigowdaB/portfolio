import React from "react";
import HomePage from "./homePage";
import Projects from "./projects/projects";
import About from "./about";
import ContactForm from "./contactForm";
import NavigationBar from './navigationBar'
const Portfolio = () => {
  return (
    <div className="bg_color">
      <NavigationBar/>
      <HomePage />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Portfolio;
