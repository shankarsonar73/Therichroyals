import React from 'react'
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Experience from '../components/Experience';
import { Toaster } from 'react-hot-toast';
import Contact from '../components/Contact';
import CourseForm from '../components/CourseForm';
import '../index.css';

function Home() {
  return (
    
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Toaster position="top-right" />
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Experience />
        <Pricing />
        <Roadmap />
        {/* <Contact/> */}
        <Footer />
        <ButtonGradient />
      </div>

      

      
  )
}

export default Home
